const fs = require('fs');

// ACE to TLE Converter
class ACEToTLEConverter {
    constructor() {
        this.earthRadius = 6371.0; // km
        this.mu = 398600.4418; // Earth's gravitational parameter km^3/s^2
    }

    parseACEData(aceDataLine) {
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
        // Calculate distance from Earth center
        const r = Math.sqrt(position.x**2 + position.y**2 + position.z**2);
        
        // For ACE at L1 point, estimate orbital parameters
        const semiMajorAxis = r * 0.5; // Approximate for highly elliptical orbit
        const eccentricity = 0.9; // Very high eccentricity
        const inclination = Math.abs(Math.atan2(position.z, Math.sqrt(position.x**2 + position.y**2))) * 180 / Math.PI;
        const raan = (Math.atan2(position.y, position.x) * 180 / Math.PI + 360) % 360;
        const argPerigee = 90.0; // Typical for halo orbits
        const meanAnomaly = (time.dayOfYear * 0.5 + time.hour * 0.02) % 360; // Slow motion for L1
        
        // Calculate mean motion (very slow for L1 orbit)
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

    calculateChecksum(line) {
        let sum = 0;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char >= '0' && char <= '9') {
                sum += parseInt(char);
            } else if (char === '-') {
                sum += 1;
            }
        }
        return sum % 10;
    }

    formatTLE(satelliteName, noradId, elements, time) {
        const epochYear = time.year % 100; // Two-digit year
        const epochDay = time.dayOfYear + (time.hour * 3600 + time.minute * 60 + time.second) / 86400;
        
        // Format Line 1
        const noradIdStr = noradId.toString().padStart(5, '0');
        const epochYearStr = epochYear.toString().padStart(2, '0');
        const epochDayStr = epochDay.toFixed(8).padStart(12, ' ');
        
        let line1 = `1 ${noradIdStr}U 97055A   ${epochYearStr}${epochDayStr}  .00000100  00000-0  00000-0 0  999`;
        const checksum1 = this.calculateChecksum(line1);
        line1 += checksum1.toString();
        
        // Format Line 2
        const incStr = elements.inclination.toFixed(4).padStart(8, ' ');
        const raanStr = elements.raan.toFixed(4).padStart(8, ' ');
        const eccStr = (elements.eccentricity * 10000000).toFixed(0).padStart(7, '0');
        const argPerStr = elements.argPerigee.toFixed(4).padStart(8, ' ');
        const meanAnoStr = elements.meanAnomaly.toFixed(4).padStart(8, ' ');
        const meanMotStr = elements.meanMotion.toFixed(8).padStart(11, ' ');
        const revStr = '12345';
        
        let line2 = `2 ${noradIdStr} ${incStr} ${raanStr} ${eccStr} ${argPerStr} ${meanAnoStr} ${meanMotStr}${revStr}`;
        const checksum2 = this.calculateChecksum(line2);
        line2 += checksum2.toString();
        
        return {
            line0: satelliteName,
            line1: line1,
            line2: line2
        };
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

// Test with 2024 ACE data
const testACELine = '2024   1 17:48:00      80.70    -201.26     -83.81 -21.13 291.85      79.43    -201.69     -84.00 -21.18 291.49      52.34    -210.43     -83.81 -21.13 283.97 12:43:52     227.26     -12.68     -47.29 -11.74 356.81 12:38:13     229.25      38.43       3.15   0.78   9.52 12:38:04     229.25      37.78       7.73   1.91   9.36     224.45      37.78     -47.29 -11.74   9.55 12:38:13   N/A    N/A     N/A      N/A    N/A     N/A      N/A    N/A     N/A      N/A    N/A     N/A       232.47     N/A        NA         217.92     221.54  242.5   86.3 Intpl_Med  Low-Lat       None       None        N/A        N/A        N/A';

const converter = new ACEToTLEConverter();
const result = converter.convertSingleRecord(testACELine);

if (result.success) {
    console.log('=== ACE TO TLE CONVERSION SUCCESS ===');
    console.log('Original ACE Data Time:', result.info.originalTime);
    console.log('Position (km):');
    console.log('  X:', result.info.position.x.toFixed(2), 'km');
    console.log('  Y:', result.info.position.y.toFixed(2), 'km');
    console.log('  Z:', result.info.position.z.toFixed(2), 'km');
    console.log('  Distance from Earth:', Math.sqrt(result.info.position.x**2 + result.info.position.y**2 + result.info.position.z**2).toFixed(2), 'km');
    console.log('');
    console.log('Calculated Orbital Elements:');
    console.log('  Inclination:', result.info.elements.inclination.toFixed(4), 'degrees');
    console.log('  RAAN:', result.info.elements.raan.toFixed(4), 'degrees');
    console.log('  Eccentricity:', result.info.elements.eccentricity.toFixed(6));
    console.log('  Arg. of Perigee:', result.info.elements.argPerigee.toFixed(4), 'degrees');
    console.log('  Mean Anomaly:', result.info.elements.meanAnomaly.toFixed(4), 'degrees');
    console.log('  Mean Motion:', result.info.elements.meanMotion.toFixed(8), 'rev/day');
    console.log('');
    console.log('Generated TLE Format:');
    console.log(result.tle.line0);
    console.log(result.tle.line1);
    console.log(result.tle.line2);
    
    // Append to sample-tle.txt
    const tleContent = '\n' + result.tle.line0 + '\n' + result.tle.line1 + '\n' + result.tle.line2;
    fs.appendFileSync('public/sample-tle.txt', tleContent);
    console.log('');
    console.log('✅ TLE data appended to public/sample-tle.txt');
    
    // Show the difference in formats
    console.log('');
    console.log('=== FORMAT COMPARISON ===');
    console.log('ACE Format (Original):');
    console.log('Time: yyyy ddd hh:mm:ss | X(RE) Y(RE) Z(RE) | Lat Long | ...');
    console.log(testACELine.substring(0, 80) + '...');
    console.log('');
    console.log('TLE Format (Converted):');
    console.log('Line 0: Satellite Name');
    console.log('Line 1: Catalog# Classification IntlDesignator Epoch MeanMotion1stDeriv 2ndDeriv BSTAR ElementSet Checksum');
    console.log('Line 2: Catalog# Inclination RAAN Eccentricity ArgPerigee MeanAnomaly MeanMotion RevNumber Checksum');
    
} else {
    console.log('❌ Conversion failed:', result.error);
}
