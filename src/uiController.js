export class UIController {
    constructor(app) {
        this.app = app;
        this.infoPanel = document.getElementById('info-panel');
        this.panelContent = document.getElementById('panel-content');
        this.debrisName = document.getElementById('debris-name');
        this.debrisCount = document.getElementById('debris-count');
        this.timeDisplay = document.getElementById('time-display');
        this.speedValue = document.getElementById('speed-value');
    }

    showDebrisInfo(debrisData) {
        this.debrisName.textContent = debrisData.name;
        
        // Calculate current orbital parameters
        const apogee = this.calculateApogee(debrisData.altitude, debrisData.eccentricity);
        const perigee = this.calculatePerigee(debrisData.altitude, debrisData.eccentricity);
        const velocity = this.calculateOrbitalVelocity(debrisData.altitude);
        
        this.panelContent.innerHTML = `
            <div class="info-group">
                <h4>Identification</h4>
                <div class="info-item">
                    <span class="info-label">NORAD ID:</span>
                    <span class="info-value">${debrisData.noradId}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Name:</span>
                    <span class="info-value">${debrisData.name}</span>
                </div>
            </div>
            
            <div class="info-group">
                <h4>Orbital Elements</h4>
                <div class="info-item">
                    <span class="info-label">Inclination:</span>
                    <span class="info-value">${debrisData.inclination.toFixed(2)}°</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Eccentricity:</span>
                    <span class="info-value">${debrisData.eccentricity.toFixed(6)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Mean Motion:</span>
                    <span class="info-value">${debrisData.meanMotion.toFixed(4)} rev/day</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Period:</span>
                    <span class="info-value">${this.formatPeriod(debrisData.period)}</span>
                </div>
            </div>
            
            <div class="info-group">
                <h4>Altitude Information</h4>
                <div class="info-item">
                    <span class="info-label">Mean Altitude:</span>
                    <span class="info-value">${Math.round(debrisData.altitude)} km</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Apogee:</span>
                    <span class="info-value">${Math.round(apogee)} km</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Perigee:</span>
                    <span class="info-value">${Math.round(perigee)} km</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Velocity:</span>
                    <span class="info-value">${velocity.toFixed(2)} km/s</span>
                </div>
            </div>
            
            <div class="info-group">
                <h4>Epoch Data</h4>
                <div class="info-item">
                    <span class="info-label">Epoch Year:</span>
                    <span class="info-value">${debrisData.epochYear}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Epoch Day:</span>
                    <span class="info-value">${debrisData.epochDay.toFixed(6)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Age:</span>
                    <span class="info-value">${this.calculateTLEAge(debrisData.epochYear, debrisData.epochDay)}</span>
                </div>
            </div>
            
            <div class="info-group">
                <h4>Classification</h4>
                <div class="info-item">
                    <span class="info-label">Orbit Type:</span>
                    <span class="info-value">${this.classifyOrbit(debrisData.altitude)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Object Type:</span>
                    <span class="info-value">${this.classifyObject(debrisData.name)}</span>
                </div>
            </div>
        `;
        
        // Show the panel and ensure it's not minimized
        this.infoPanel.classList.remove('minimized');
        
        // Small delay to ensure proper CSS transitions
        requestAnimationFrame(() => {
            this.infoPanel.classList.add('active');
        });
        
        // Update minimize button text if it exists
        const minimizeBtn = document.getElementById('panel-minimize');
        if (minimizeBtn) {
            minimizeBtn.textContent = '−';
        }
        
        // Ensure panel is properly positioned (in case dragging moved it off-screen)
        if (this.infoPanel.style.right === 'auto' || this.infoPanel.style.left) {
            // Reset to CSS positioning if it was dragged
            this.infoPanel.style.left = '';
            this.infoPanel.style.top = '';
            this.infoPanel.style.right = '';
            this.infoPanel.style.bottom = '';
        }
    }

    hideInfoPanel() {
        this.infoPanel.classList.remove('active');
    }

    updateDebrisCount(count) {
        this.debrisCount.textContent = count.toLocaleString();
    }

    updateTime(simulationTime) {
        const hours = simulationTime.getUTCHours().toString().padStart(2, '0');
        const minutes = simulationTime.getUTCMinutes().toString().padStart(2, '0');
        const seconds = simulationTime.getUTCSeconds().toString().padStart(2, '0');
        this.timeDisplay.textContent = `${hours}:${minutes}:${seconds} UTC`;
    }

    updateSpeed(speed) {
        this.speedValue.textContent = `${speed}x`;
    }

    calculateApogee(altitude, eccentricity) {
        const earthRadius = 6371;
        const semiMajorAxis = altitude + earthRadius;
        return semiMajorAxis * (1 + eccentricity) - earthRadius;
    }

    calculatePerigee(altitude, eccentricity) {
        const earthRadius = 6371;
        const semiMajorAxis = altitude + earthRadius;
        return semiMajorAxis * (1 - eccentricity) - earthRadius;
    }

    calculateOrbitalVelocity(altitude) {
        const earthRadius = 6371;
        const mu = 398600.4418; // Earth's gravitational parameter km^3/s^2
        const r = earthRadius + altitude;
        return Math.sqrt(mu / r);
    }

    formatPeriod(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = Math.floor(minutes % 60);
        const secs = Math.floor((minutes * 60) % 60);
        
        if (hours > 0) {
            return `${hours}h ${mins}m ${secs}s`;
        } else {
            return `${mins}m ${secs}s`;
        }
    }

    calculateTLEAge(epochYear, epochDay) {
        const epochDate = new Date(epochYear, 0, 1);
        epochDate.setDate(epochDate.getDate() + epochDay - 1);
        
        const now = new Date();
        const ageInDays = Math.floor((now - epochDate) / (1000 * 60 * 60 * 24));
        
        if (ageInDays < 1) {
            return "< 1 day";
        } else if (ageInDays === 1) {
            return "1 day";
        } else if (ageInDays < 30) {
            return `${ageInDays} days`;
        } else if (ageInDays < 365) {
            const months = Math.floor(ageInDays / 30);
            return `${months} month${months > 1 ? 's' : ''}`;
        } else {
            const years = Math.floor(ageInDays / 365);
            return `${years} year${years > 1 ? 's' : ''}`;
        }
    }

    classifyOrbit(altitude) {
        if (altitude < 2000) {
            return "Low Earth Orbit (LEO)";
        } else if (altitude < 35786) {
            return "Medium Earth Orbit (MEO)";
        } else if (altitude >= 35786 && altitude <= 36786) {
            return "Geostationary Orbit (GEO)";
        } else {
            return "High Earth Orbit (HEO)";
        }
    }

    classifyObject(name) {
        const upperName = name.toUpperCase();
        
        if (upperName.includes('DEB') || upperName.includes('DEBRIS')) {
            return "Debris Fragment";
        } else if (upperName.includes('R/B') || upperName.includes('ROCKET')) {
            return "Rocket Body";
        } else if (upperName.includes('ISS') || upperName.includes('STATION')) {
            return "Space Station";
        } else if (upperName.includes('STARLINK') || upperName.includes('ONEWEB')) {
            return "Communication Satellite";
        } else if (upperName.includes('GPS') || upperName.includes('GLONASS') || upperName.includes('GALILEO')) {
            return "Navigation Satellite";
        } else if (upperName.includes('COSMOS') || upperName.includes('USA')) {
            return "Military Satellite";
        } else if (upperName.includes('WEATHER') || upperName.includes('METEOSAT') || upperName.includes('GOES')) {
            return "Weather Satellite";
        } else if (upperName.includes('LANDSAT') || upperName.includes('SENTINEL')) {
            return "Earth Observation";
        } else if (upperName.includes('HUBBLE') || upperName.includes('SPITZER')) {
            return "Space Telescope";
        } else {
            return "Satellite";
        }
    }
}
