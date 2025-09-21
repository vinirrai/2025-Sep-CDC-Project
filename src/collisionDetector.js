import * as THREE from 'three';

export class CollisionDetector {
    constructor() {
        this.collisionThreshold = 2; // km - minimum distance for collision warning
        this.timeStep = 60; // seconds - time step for collision analysis
        this.analysisWindow = 24 * 60 * 60; // 24 hours in seconds
        this.collisions = [];
    }

    analyzeCollisions(satellites, startTime, spatialBounds = null) {
        this.collisions = [];
        const endTime = new Date(startTime.getTime() + this.analysisWindow * 1000);
        
        console.log(`Analyzing collisions for ${satellites.length} satellites from ${startTime.toISOString()} to ${endTime.toISOString()}`);
        
        // Compare each pair of satellites
        for (let i = 0; i < satellites.length; i++) {
            for (let j = i + 1; j < satellites.length; j++) {
                const collision = this.analyzeCollisionPair(
                    satellites[i], 
                    satellites[j], 
                    startTime, 
                    endTime,
                    spatialBounds
                );
                
                if (collision) {
                    this.collisions.push(collision);
                }
            }
        }
        
        // Sort collisions by time
        this.collisions.sort((a, b) => a.time - b.time);
        
        return this.collisions;
    }

    analyzeCollisionPair(sat1, sat2, startTime, endTime, spatialBounds) {
        let minDistance = Infinity;
        let closestApproachTime = null;
        let closestPositions = null;
        
        // Sample positions over time
        const totalTime = (endTime - startTime) / 1000; // in seconds
        const numSamples = Math.min(totalTime / this.timeStep, 1000); // Limit samples for performance
        const actualTimeStep = totalTime / numSamples;
        
        for (let i = 0; i <= numSamples; i++) {
            const currentTime = new Date(startTime.getTime() + i * actualTimeStep * 1000);
            
            const pos1 = this.getSatellitePosition(sat1, currentTime);
            const pos2 = this.getSatellitePosition(sat2, currentTime);
            
            if (pos1 && pos2) {
                // If spatial bounds specified, check if both satellites are in bounds
                if (spatialBounds) {
                    if (!this.isPositionInBounds(pos1, spatialBounds) || 
                        !this.isPositionInBounds(pos2, spatialBounds)) {
                        continue;
                    }
                }
                
                const distance = this.calculateDistance(pos1, pos2);
                
                if (distance < minDistance) {
                    minDistance = distance;
                    closestApproachTime = currentTime;
                    closestPositions = { pos1: pos1.clone(), pos2: pos2.clone() };
                }
            }
        }
        
        // Check if this constitutes a potential collision
        if (minDistance < this.collisionThreshold) {
            return {
                satellite1: sat1,
                satellite2: sat2,
                time: closestApproachTime,
                distance: minDistance,
                positions: closestPositions,
                riskLevel: this.calculateRiskLevel(minDistance),
                relativeVelocity: this.calculateRelativeVelocity(sat1, sat2, closestApproachTime)
            };
        }
        
        return null;
    }

    getSatellitePosition(satellite, time) {
        try {
            // Use the parser from the main app - this will be injected
            if (window.orbitalApp && window.orbitalApp.debrisManager) {
                const position = window.orbitalApp.debrisManager.parser.propagateOrbit(satellite, time);
                if (position) {
                    return new THREE.Vector3(position.x, position.y, position.z);
                }
            }
        } catch (error) {
            console.warn(`Failed to get position for ${satellite.name}:`, error);
        }
        return null;
    }

    calculateDistance(pos1, pos2) {
        return pos1.distanceTo(pos2);
    }

    isPositionInBounds(position, bounds) {
        const scaledPos = position.clone().multiplyScalar(0.01); // Apply orbit scale
        return scaledPos.x >= bounds.min.x && scaledPos.x <= bounds.max.x &&
               scaledPos.y >= bounds.min.y && scaledPos.y <= bounds.max.y &&
               scaledPos.z >= bounds.min.z && scaledPos.z <= bounds.max.z;
    }

    calculateRiskLevel(distance) {
        if (distance < 0.5) return 'CRITICAL';
        if (distance < 1.0) return 'HIGH';
        if (distance < 1.5) return 'MEDIUM';
        return 'LOW';
    }

    calculateRelativeVelocity(sat1, sat2, time) {
        const timeOffset = 10; // seconds
        const time1 = new Date(time.getTime() - timeOffset * 500);
        const time2 = new Date(time.getTime() + timeOffset * 500);
        
        const pos1_1 = this.getSatellitePosition(sat1, time1);
        const pos1_2 = this.getSatellitePosition(sat1, time2);
        const pos2_1 = this.getSatellitePosition(sat2, time1);
        const pos2_2 = this.getSatellitePosition(sat2, time2);
        
        if (pos1_1 && pos1_2 && pos2_1 && pos2_2) {
            const vel1 = pos1_2.clone().sub(pos1_1).divideScalar(timeOffset);
            const vel2 = pos2_2.clone().sub(pos2_1).divideScalar(timeOffset);
            const relativeVel = vel1.sub(vel2);
            
            return relativeVel.length(); // km/s
        }
        
        return 0;
    }

    getCollisionsByRisk() {
        const byRisk = {
            CRITICAL: [],
            HIGH: [],
            MEDIUM: [],
            LOW: []
        };
        
        this.collisions.forEach(collision => {
            byRisk[collision.riskLevel].push(collision);
        });
        
        return byRisk;
    }

    getCollisionsInTimeWindow(startTime, endTime) {
        return this.collisions.filter(collision => 
            collision.time >= startTime && collision.time <= endTime
        );
    }

    createCollisionVisualization(scene, collision) {
        // Create warning markers at collision points
        const geometry = new THREE.SphereGeometry(1, 16, 16);
        const material = new THREE.MeshBasicMaterial({
            color: this.getRiskColor(collision.riskLevel),
            emissive: this.getRiskColor(collision.riskLevel),
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.8
        });
        
        const marker1 = new THREE.Mesh(geometry, material);
        const marker2 = new THREE.Mesh(geometry, material);
        
        // Position markers at collision points (scaled for visualization)
        marker1.position.copy(collision.positions.pos1.multiplyScalar(0.01));
        marker2.position.copy(collision.positions.pos2.multiplyScalar(0.01));
        
        // Connect with a line
        const points = [
            collision.positions.pos1.clone().multiplyScalar(0.01),
            collision.positions.pos2.clone().multiplyScalar(0.01)
        ];
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
            color: this.getRiskColor(collision.riskLevel),
            transparent: true,
            opacity: 0.6,
            linewidth: 3
        });
        
        const line = new THREE.Line(lineGeometry, lineMaterial);
        
        // Group everything together
        const collisionGroup = new THREE.Group();
        collisionGroup.add(marker1);
        collisionGroup.add(marker2);
        collisionGroup.add(line);
        
        collisionGroup.userData = {
            type: 'collision',
            collision: collision
        };
        
        scene.add(collisionGroup);
        
        return collisionGroup;
    }

    getRiskColor(riskLevel) {
        switch (riskLevel) {
            case 'CRITICAL': return 0xff0000;
            case 'HIGH': return 0xff6600;
            case 'MEDIUM': return 0xffaa00;
            case 'LOW': return 0xffff00;
            default: return 0xffffff;
        }
    }

    generateCollisionReport() {
        const byRisk = this.getCollisionsByRisk();
        const totalCollisions = this.collisions.length;
        
        return {
            total: totalCollisions,
            byRisk: {
                critical: byRisk.CRITICAL.length,
                high: byRisk.HIGH.length,
                medium: byRisk.MEDIUM.length,
                low: byRisk.LOW.length
            },
            timeRange: totalCollisions > 0 ? {
                first: this.collisions[0].time,
                last: this.collisions[this.collisions.length - 1].time
            } : null,
            averageDistance: totalCollisions > 0 ? 
                this.collisions.reduce((sum, c) => sum + c.distance, 0) / totalCollisions : 0,
            details: this.collisions
        };
    }

    setCollisionThreshold(threshold) {
        this.collisionThreshold = threshold;
    }

    setAnalysisWindow(hours) {
        this.analysisWindow = hours * 60 * 60; // Convert to seconds
    }

    setTimeStep(seconds) {
        this.timeStep = seconds;
    }
}
