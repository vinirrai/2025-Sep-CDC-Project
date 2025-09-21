// ACE Data to TLE Converter
// Converts ACE satellite position data to TLE format

export class ACEToTLEConverter {
    constructor() {
        this.earthRadius = 6371.0; // km
        this.mu = 398600.4418; // Earth's gravitational parameter km^3/s^2
    }

    parseACEData(aceDataLine) {
        // Parse a single line of ACE data
        const parts = aceDataLine.trim().split(/\s+/);
        
        if (parts.length < 20) {
            throw new Error('Invalid ACE data format');
        }

        const time = {
            year: parseInt(parts[0]),
            dayOfYear: parseInt(parts[1]),
            hour: parseInt(parts[2].split(':')[0]),
            minute: parseInt(parts[2].split(':')[1]),
            second: parseInt(parts[2].split(':')[2])
        };

        // GEI coordinates (columns 3-5, in Earth radii)
        const position = {
            x: parseFloat(parts[3]) * this.earthRadius, // Convert to km
            y: parseFloat(parts[4]) * this.earthRadius,
            z: parseFloat(parts[5]) * this.earthRadius
        };

        return { time, position };
    }

    calculateOrbitalElements(position, time) {
        // Since ACE is at L1 Lagrange point, we'll estimate orbital parameters
        const r = Math.sqrt(position.x**2 + position.y**2 + position.z**2);
        
        // For L1 point satellites, approximate as highly elliptical Earth orbit
        const semiMajorAxis = r; // Approximate
        const eccentricity = 0.8; // High eccentricity for L1-type orbit
        const inclination = Math.abs(Math.atan2(position.z, Math.sqrt(position.x**2 + position.y**2))) * 180 / Math.PI;
        
        // Right Ascension of Ascending Node
        const raan = Math.atan2(position.y, position.x) * 180 / Math.PI;
        
        // Argument of Perigee (estimated)
        const argPerigee = 270.0; // Typical for L1 halo orbits
        
        // Mean Anomaly (based on time in orbit)
        const meanAnomaly = (time.dayOfYear * 0.98563) % 360; // Approximate daily motion
        
        // Mean Motion from semi-major axis
        const meanMotion = Math.sqrt(this.mu / (semiMajorAxis**3)) * 86400 / (2 * Math.PI); // rev/day
        
        return {
            inclination: inclination,
            raan: raan,
            eccentricity: eccentricity,
            argPerigee: argPerigee,
            meanAnomaly: meanAnomaly,
            meanMotion: meanMotion,
            semiMajorAxis: semiMajorAxis
        };
    }

    formatTLE(satelliteName, noradId, elements, time) {
        // Convert time to TLE epoch format
        const epochYear = time.year % 100; // Two-digit year
        const epochDay = time.dayOfYear + (time.hour * 3600 + time.minute * 60 + time.second) / 86400;
        
        // Format Line 1
        const line1 = this.formatLine1(noradId, epochYear, epochDay);
        
        // Format Line 2
        const line2 = this.formatLine2(noradId, elements);
        
        return {
            line0: satelliteName,
            line1: line1,
            line2: line2
        };
    }

    formatLine1(noradId, epochYear, epochDay) {
        const noradIdStr = noradId.toString().padStart(5, '0');
        const epochYearStr = epochYear.toString().padStart(2, '0');
        const epochDayStr = epochDay.toFixed(8).padStart(12, '0');
        
        // First derivative of mean motion (drag term) - minimal for L1 satellites
        const firstDeriv = '.00000100';
        
        // Second derivative and BSTAR (negligible for L1)
        const secondDeriv = '00000-0';
        const bstar = '00000-0';
        
        // Element set number and classification
        const elementSet = '0';
        const classification = 'U';
        const intlDesignator = '97055A'; // ACE's actual international designator
        
        let line1 = `1 ${noradIdStr}${classification} ${intlDesignator} ${epochYearStr}${epochDayStr} ${firstDeriv} ${secondDeriv} ${bstar} ${elementSet}`;
        
        // Add checksum
        const checksum1 = this.calculateChecksum(line1);
        line1 += checksum1.toString();
        
        return line1;
    }

    formatLine2(noradId, elements) {
        const noradIdStr = noradId.toString().padStart(5, '0');
        const inclinationStr = elements.inclination.toFixed(4).padStart(8, '0');
        const raanStr = elements.raan.toFixed(4).padStart(8, '0');
        
        // Format eccentricity without decimal point
        const eccStr = (elements.eccentricity * 10000000).toFixed(0).padStart(7, '0');
        
        const argPerigeeStr = elements.argPerigee.toFixed(4).padStart(8, '0');
        const meanAnomalyStr = elements.meanAnomaly.toFixed(4).padStart(8, '0');
        const meanMotionStr = elements.meanMotion.toFixed(8).padStart(11, '0');
        
        // Revolution number (estimated)
        const revNumber = Math.floor((elements.meanAnomaly / 360) + 1000).toString().padStart(5, '0');
        
        let line2 = `2 ${noradIdStr} ${inclinationStr} ${raanStr} ${eccStr} ${argPerigeeStr} ${meanAnomalyStr} ${meanMotionStr}${revNumber}`;
        
        // Add checksum
        const checksum2 = this.calculateChecksum(line2);
        line2 += checksum2.toString();
        
        return line2;
    }

    calculateChecksum(line) {
        let sum = 0;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char >= '0' && char <= '9') {
                sum += parseInt(char);
            } else if (char === '-') {
                sum += 1;
            }
            // Ignore letters and other characters
        }
        return sum % 10;
    }

    convertSingleRecord(aceDataLine, satelliteName = 'ACE (ADVANCED COMPOSITION EXPLORER)', noradId = 27871) {
        try {
            const parsedData = this.parseACEData(aceDataLine);
            const elements = this.calculateOrbitalElements(parsedData.position, parsedData.time);
            const tle = this.formatTLE(satelliteName, noradId, elements, parsedData.time);
            
            return {
                success: true,
                tle: tle,
                info: {
                    originalTime: `${parsedData.time.year} ${parsedData.time.dayOfYear} ${parsedData.time.hour}:${parsedData.time.minute}:${parsedData.time.second}`,
                    position: parsedData.position,
                    elements: elements
                }
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}

// Example usage function
export function convertACEToTLE(aceDataLine) {
    const converter = new ACEToTLEConverter();
    return converter.convertSingleRecord(aceDataLine);
}

// Test with the 2024 data line
const testACELine = "2024   1 17:48:00      80.70    -201.26     -83.81 -21.13 291.85      79.43    -201.69     -84.00 -21.18 291.49      52.34    -210.43     -83.81 -21.13 283.97 12:43:52     227.26     -12.68     -47.29 -11.74 356.81 12:38:13     229.25      38.43       3.15   0.78   9.52 12:38:04     229.25      37.78       7.73   1.91   9.36     224.45      37.78     -47.29 -11.74   9.55 12:38:13   N/A    N/A     N/A      N/A    N/A     N/A      N/A    N/A     N/A      N/A    N/A     N/A       232.47     N/A        NA         217.92     221.54  242.5   86.3 Intpl_Med  Low-Lat       None       None        N/A        N/A        N/A";

console.log('ACE to TLE Converter Ready!');
console.log('Example conversion:', convertACEToTLE(testACELine));
