import * as THREE from 'three';
import { TLEParser } from './tleParser.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export class DebrisManager {
    constructor(scene, app) {
        this.scene = scene;
        this.app = app;
        this.parser = new TLEParser();
        this.debrisObjects = [];
        this.orbitLines = [];
        this.labels = [];
        this.debrisGroup = new THREE.Group();
        this.orbitsGroup = new THREE.Group();
        this.labelsGroup = new THREE.Group();
        this.instancedMesh = null;
        this.debrisData = [];
        this.earthRadiusScale = 30; // Match Earth's scaled radius
        this.orbitScale = 0.01; // Scale factor for orbits
        this.labelRenderer = null;
        
        this.init();
    }

    init() {
        this.scene.add(this.debrisGroup);
        this.scene.add(this.orbitsGroup);
        
        // Setup CSS2D renderer for labels
        this.setupLabelRenderer();
    }

    setupLabelRenderer() {
        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0px';
        this.labelRenderer.domElement.style.pointerEvents = 'none';
        document.getElementById('canvas-container').appendChild(this.labelRenderer.domElement);

        window.addEventListener('resize', () => {
            this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    clearDebris() {
        // Clear debris objects
        this.debrisGroup.clear();
        this.orbitsGroup.clear();
        
        // Clear labels
        this.labels.forEach(label => {
            if (label.element && label.element.parentNode) {
                label.element.parentNode.removeChild(label.element);
            }
        });
        
        this.debrisObjects = [];
        this.orbitLines = [];
        this.labels = [];
        this.debrisData = [];
    }

    addDebris(satelliteDataArray) {
        this.debrisData = satelliteDataArray;
        
        // Use instanced mesh for better performance with many objects
        if (satelliteDataArray.length > 100) {
            this.createInstancedDebris(satelliteDataArray);
        } else {
            this.createIndividualDebris(satelliteDataArray);
        }
        
        // Create orbit paths
        satelliteDataArray.forEach(satData => {
            this.createOrbitPath(satData);
        });
    }

    createInstancedDebris(satelliteDataArray) {
        const geometry = new THREE.SphereGeometry(0.5, 8, 8);
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        });
        
        this.instancedMesh = new THREE.InstancedMesh(geometry, material, satelliteDataArray.length);
        this.instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        
        const matrix = new THREE.Matrix4();
        const color = new THREE.Color();
        
        satelliteDataArray.forEach((satData, index) => {
            // Set initial position
            matrix.makeTranslation(0, 0, 0);
            this.instancedMesh.setMatrixAt(index, matrix);
            
            // Set color based on altitude
            const altitudeColor = this.getAltitudeColor(satData.altitude);
            this.instancedMesh.setColorAt(index, altitudeColor);
            
            // Store satellite data reference
            satData.instanceIndex = index;
        });
        
        this.instancedMesh.instanceMatrix.needsUpdate = true;
        if (this.instancedMesh.instanceColor) {
            this.instancedMesh.instanceColor.needsUpdate = true;
        }
        
        this.debrisGroup.add(this.instancedMesh);
    }

    createIndividualDebris(satelliteDataArray) {
        satelliteDataArray.forEach(satData => {
            // Create more realistic debris/satellite mesh
            const size = this.getSatelliteSize(satData);
            const geometry = this.createSatelliteGeometry(satData, size);
            const color = this.getAltitudeColor(satData.altitude);
            
            const material = new THREE.MeshPhongMaterial({
                color: color,
                emissive: color,
                emissiveIntensity: 0.3,
                metalness: 0.7,
                roughness: 0.3,
                transparent: true,
                opacity: 0.95
            });
            
            const debris = new THREE.Mesh(geometry, material);
            debris.userData = satData;
            debris.castShadow = true;
            debris.receiveShadow = true;
            
            // Add multi-layer glow effect for realism
            const glowGroup = new THREE.Group();
            
            // Inner glow
            const innerGlowGeometry = new THREE.SphereGeometry(size * 1.2, 16, 16);
            const innerGlowMaterial = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.4,
                blending: THREE.AdditiveBlending
            });
            const innerGlow = new THREE.Mesh(innerGlowGeometry, innerGlowMaterial);
            glowGroup.add(innerGlow);
            
            // Outer glow
            const outerGlowGeometry = new THREE.SphereGeometry(size * 1.8, 8, 8);
            const outerGlowMaterial = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.15,
                blending: THREE.AdditiveBlending
            });
            const outerGlow = new THREE.Mesh(outerGlowGeometry, outerGlowMaterial);
            glowGroup.add(outerGlow);
            
            // Add point light for nearby illumination
            const light = new THREE.PointLight(color, 0.5, size * 5);
            glowGroup.add(light);
            
            debris.add(glowGroup);
            
            this.debrisGroup.add(debris);
            this.debrisObjects.push(debris);
            
            // Create label
            this.createLabel(debris, satData);
        });
    }

    createLabel(debrisObject, satData) {
        const labelDiv = document.createElement('div');
        labelDiv.className = 'debris-label';
        labelDiv.textContent = satData.name;
        labelDiv.style.cssText = `
            color: white;
            font-size: 10px;
            padding: 2px 6px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 3px;
            pointer-events: none;
            white-space: nowrap;
            display: none;
        `;
        
        const label = new CSS2DObject(labelDiv);
        label.position.set(0, 2, 0);
        debrisObject.add(label);
        
        this.labels.push(label);
    }

    createOrbitPath(satData) {
        const orbitPoints = this.parser.calculateOrbitPath(satData, new Date(), 100);
        
        if (orbitPoints.length > 0) {
            const curve = new THREE.CatmullRomCurve3(
                orbitPoints.map(p => new THREE.Vector3(
                    p.x * this.orbitScale,
                    p.y * this.orbitScale,
                    p.z * this.orbitScale
                ))
            );
            curve.closed = true;
            
            const points = curve.getPoints(200);
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            
            const color = this.getAltitudeColor(satData.altitude);
            const material = new THREE.LineBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.3,
                blending: THREE.AdditiveBlending
            });
            
            const orbitLine = new THREE.Line(geometry, material);
            orbitLine.userData = satData;
            
            this.orbitsGroup.add(orbitLine);
            this.orbitLines.push(orbitLine);
        }
    }

    createSatelliteGeometry(satData, size) {
        // Create more detailed geometry based on satellite type
        const type = this.classifySatelliteType(satData.name);
        
        if (type === 'debris') {
            // Irregular shape for debris
            return new THREE.IcosahedronGeometry(size, 0);
        } else if (type === 'station') {
            // Box shape for space stations
            return new THREE.BoxGeometry(size * 1.5, size, size * 2);
        } else {
            // Default sphere with more detail
            return new THREE.SphereGeometry(size, 24, 24);
        }
    }
    
    getSatelliteSize(satData) {
        // Vary size based on satellite type and importance
        const name = satData.name.toUpperCase();
        
        if (name.includes('ISS') || name.includes('TIANGONG')) {
            return 2.0; // Large for space stations
        } else if (name.includes('DEB') || name.includes('FRAGMENT')) {
            return 0.4; // Small for debris
        } else if (name.includes('STARLINK') || name.includes('ONEWEB')) {
            return 0.6; // Small for constellation satellites
        } else {
            return 0.8; // Default size
        }
    }
    
    classifySatelliteType(name) {
        const upperName = name.toUpperCase();
        if (upperName.includes('DEB') || upperName.includes('FRAGMENT')) {
            return 'debris';
        } else if (upperName.includes('ISS') || upperName.includes('STATION')) {
            return 'station';
        }
        return 'satellite';
    }
    
    getAltitudeColor(altitude) {
        if (altitude < 2000) {
            return new THREE.Color(0xff6666); // Brighter red for LEO
        } else if (altitude < 35786) {
            return new THREE.Color(0xffbb33); // Brighter orange for MEO
        } else if (altitude < 36786) {
            return new THREE.Color(0x33bbff); // Brighter blue for GEO
        } else {
            return new THREE.Color(0xcc66ff); // Brighter purple for HEO
        }
    }

    update(simulationTime) {
        if (this.instancedMesh) {
            // Update instanced mesh positions
            const matrix = new THREE.Matrix4();
            
            this.debrisData.forEach((satData, index) => {
                const position = this.parser.propagateOrbit(satData, simulationTime);
                
                if (position) {
                    matrix.makeTranslation(
                        position.x * this.orbitScale,
                        position.y * this.orbitScale,
                        position.z * this.orbitScale
                    );
                    this.instancedMesh.setMatrixAt(index, matrix);
                }
            });
            
            this.instancedMesh.instanceMatrix.needsUpdate = true;
        } else {
            // Update individual debris positions
            this.debrisObjects.forEach(debris => {
                const position = this.parser.propagateOrbit(debris.userData, simulationTime);
                
                if (position) {
                    debris.position.set(
                        position.x * this.orbitScale,
                        position.y * this.orbitScale,
                        position.z * this.orbitScale
                    );
                }
            });
        }
        
        // Update label renderer
        if (this.labelRenderer && this.app) {
            this.labelRenderer.render(this.scene, this.app.camera);
        }
    }

    selectDebris(debrisObject) {
        if (debrisObject.material) {
            // Store original material properties
            debrisObject.userData.originalEmissiveIntensity = debrisObject.material.emissiveIntensity;
            debrisObject.userData.originalScale = debrisObject.scale.clone();
            
            // Highlight selected debris
            debrisObject.material.emissiveIntensity = 1.5;
            debrisObject.scale.multiplyScalar(1.5);
            
            // Show orbit for selected debris
            const orbit = this.orbitLines.find(line => 
                line.userData.noradId === debrisObject.userData.noradId
            );
            if (orbit) {
                orbit.material.opacity = 0.8;
            }
        }
    }

    deselectDebris(debrisObject) {
        if (debrisObject.material && debrisObject.userData.originalEmissiveIntensity !== undefined) {
            // Restore original properties
            debrisObject.material.emissiveIntensity = debrisObject.userData.originalEmissiveIntensity;
            debrisObject.scale.copy(debrisObject.userData.originalScale);
            
            // Hide orbit
            const orbit = this.orbitLines.find(line => 
                line.userData.noradId === debrisObject.userData.noradId
            );
            if (orbit) {
                orbit.material.opacity = 0.3;
            }
        }
    }

    toggleOrbits(show) {
        this.orbitsGroup.visible = show;
    }

    toggleLabels(show) {
        this.labels.forEach(label => {
            if (label.element) {
                label.element.style.display = show ? 'block' : 'none';
            }
        });
    }

    searchDebris(query) {
        if (!query) return [];
        
        const searchTerm = query.toLowerCase();
        const results = [];
        
        this.debrisObjects.forEach(debris => {
            const name = debris.userData.name.toLowerCase();
            const noradId = debris.userData.noradId;
            
            if (name.includes(searchTerm) || noradId.includes(searchTerm)) {
                results.push(debris);
            }
        });
        
        // Also search in instanced mesh data
        if (this.instancedMesh) {
            this.debrisData.forEach((satData, index) => {
                const name = satData.name.toLowerCase();
                const noradId = satData.noradId;
                
                if (name.includes(searchTerm) || noradId.includes(searchTerm)) {
                    // Create temporary object for selection
                    const tempObject = {
                        userData: satData,
                        position: new THREE.Vector3(),
                        instanceIndex: index
                    };
                    results.push(tempObject);
                }
            });
        }
        
        return results;
    }

    getDebrisObjects() {
        return this.debrisObjects;
    }
}
