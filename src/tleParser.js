import * as satellite from 'satellite.js';

export class TLEParser {
    constructor() {
        this.satellites = [];
    }

    parse(tleData) {
        this.satellites = [];
        const lines = tleData.trim().split('\n');
        
        for (let i = 0; i < lines.length; i += 3) {
            if (i + 2 < lines.length) {
                const name = lines[i].trim();
                const line1 = lines[i + 1].trim();
                const line2 = lines[i + 2].trim();
                
                // Validate TLE format
                if (this.isValidTLE(line1, line2)) {
                    try {
                        const satrec = satellite.twoline2satrec(line1, line2);
                        
                        if (satrec) {
                            const satelliteData = {
                                name: name,
                                line1: line1,
                                line2: line2,
                                satrec: satrec,
                                noradId: this.extractNoradId(line1),
                                inclination: this.extractInclination(line2),
                                eccentricity: this.extractEccentricity(line2),
                                meanMotion: this.extractMeanMotion(line2),
                                epochYear: this.extractEpochYear(line1),
                                epochDay: this.extractEpochDay(line1),
                                altitude: this.calculateAltitude(line2),
                                period: this.calculatePeriod(line2)
                            };
                            
                            this.satellites.push(satelliteData);
                        }
                    } catch (error) {
                        console.warn(`Failed to parse TLE for ${name}:`, error);
                    }
                }
            }
        }
        
        return this.satellites;
    }

    isValidTLE(line1, line2) {
        // Basic TLE format validation
        return line1.length >= 69 && 
               line2.length >= 69 && 
               line1[0] === '1' && 
               line2[0] === '2';
    }

    extractNoradId(line1) {
        return line1.substring(2, 7).trim();
    }

    extractInclination(line2) {
        return parseFloat(line2.substring(8, 16));
    }

    extractEccentricity(line2) {
        return parseFloat('0.' + line2.substring(26, 33));
    }

    extractMeanMotion(line2) {
        return parseFloat(line2.substring(52, 63));
    }

    extractEpochYear(line1) {
        let year = parseInt(line1.substring(18, 20));
        return year < 57 ? 2000 + year : 1900 + year;
    }

    extractEpochDay(line1) {
        return parseFloat(line1.substring(20, 32));
    }

    calculateAltitude(line2) {
        // Calculate approximate altitude from mean motion
        const meanMotion = this.extractMeanMotion(line2);
        const earthRadius = 6371; // km
        const mu = 398600.4418; // Earth's gravitational parameter km^3/s^2
        
        // Calculate semi-major axis using mean motion
        const n = meanMotion * 2 * Math.PI / 86400; // Convert to radians per second
        const a = Math.pow(mu / (n * n), 1/3); // Semi-major axis in km
        
        return Math.round(a - earthRadius); // Altitude above Earth's surface
    }

    calculatePeriod(line2) {
        const meanMotion = this.extractMeanMotion(line2);
        return Math.round(1440 / meanMotion); // Period in minutes
    }

    propagateOrbit(satelliteData, date) {
        try {
            const positionAndVelocity = satellite.propagate(satelliteData.satrec, date);
            
            if (positionAndVelocity && positionAndVelocity.position) {
                const gmst = satellite.gstime(date);
                const position = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
                
                return {
                    position: positionAndVelocity.position,
                    velocity: positionAndVelocity.velocity,
                    latitude: satellite.degreesLat(position.latitude),
                    longitude: satellite.degreesLong(position.longitude),
                    altitude: position.height,
                    x: positionAndVelocity.position.x,
                    y: positionAndVelocity.position.y,
                    z: positionAndVelocity.position.z
                };
            }
        } catch (error) {
            console.warn(`Propagation failed for ${satelliteData.name}:`, error);
        }
        
        return null;
    }

    calculateOrbitPath(satelliteData, startDate, numberOfPoints = 100) {
        const points = [];
        const period = this.calculatePeriod(satelliteData.line2) * 60 * 1000; // Convert to milliseconds
        const timeStep = period / numberOfPoints;
        
        for (let i = 0; i < numberOfPoints; i++) {
            const time = new Date(startDate.getTime() + i * timeStep);
            const position = this.propagateOrbit(satelliteData, time);
            
            if (position) {
                points.push({
                    x: position.x,
                    y: position.y,
                    z: position.z
                });
            }
        }
        
        return points;
    }
}
