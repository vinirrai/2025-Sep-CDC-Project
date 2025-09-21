import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

export class FocusedView {
    constructor(app) {
        this.app = app;
        this.isActive = false;
        this.focusedScene = null;
        this.focusedCamera = null;
        this.focusedRenderer = null;
        this.focusedControls = null;
        this.focusedContainer = null;
        this.selectedRegion = null;
        this.satellitesInRegion = [];
        this.focusedDebris = [];
        this.gridHelper = null;
        this.boundingBox = null;
    }

    enter(spatialBounds, satellites) {
        if (this.isActive) return;
        
        this.isActive = true;
        this.selectedRegion = spatialBounds;
        this.satellitesInRegion = satellites;
        
        // Create focused view container
        this.createFocusedContainer();
        this.setupFocusedScene();
        this.setupFocusedCamera();
        this.setupFocusedRenderer();
        this.setupFocusedControls();
        this.setupFocusedLighting();
        
        // Add content to focused scene
        this.createBoundingBox();
        this.createGridSystem();
        this.addSatellitesToFocusedScene();
        this.addReturnButton();
        
        // Transition to focused view
        this.transitionToFocusedView();
        
        // Start animation loop
        this.animate();
    }

    createFocusedContainer() {
        this.focusedContainer = document.createElement('div');
        this.focusedContainer.id = 'focused-view-container';
        this.focusedContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            background: radial-gradient(ellipse at center, #0a0a1a 0%, #000005 100%);
            opacity: 0;
            pointer-events: none;
        `;
        document.body.appendChild(this.focusedContainer);
    }

    setupFocusedScene() {
        this.focusedScene = new THREE.Scene();
        this.focusedScene.fog = new THREE.FogExp2(0x000011, 0.002);
        
        // Add starfield background
        const starsGeometry = new THREE.BufferGeometry();
        const starCount = 5000;
        const positions = new Float32Array(starCount * 3);
        
        for (let i = 0; i < starCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 500;
            positions[i + 1] = (Math.random() - 0.5) * 500;
            positions[i + 2] = (Math.random() - 0.5) * 500;
        }
        
        starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.5,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true
        });
        
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        this.focusedScene.add(stars);
    }

    setupFocusedCamera() {
        const aspect = window.innerWidth / window.innerHeight;
        this.focusedCamera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
        
        // Position camera to view the entire selected region
        const size = this.selectedRegion.size;
        const maxDim = Math.max(size.x, size.y, size.z);
        const distance = maxDim * 2.5;
        
        this.focusedCamera.position.set(distance, distance * 0.7, distance);
        this.focusedCamera.lookAt(0, 0, 0);
    }

    setupFocusedRenderer() {
        this.focusedRenderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true 
        });
        this.focusedRenderer.setSize(window.innerWidth, window.innerHeight);
        this.focusedRenderer.setPixelRatio(window.devicePixelRatio);
        this.focusedRenderer.shadowMap.enabled = true;
        this.focusedRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.focusedRenderer.toneMapping = THREE.ACESFilmicToneMapping;
        
        this.focusedContainer.appendChild(this.focusedRenderer.domElement);
    }

    setupFocusedControls() {
        this.focusedControls = new OrbitControls(this.focusedCamera, this.focusedRenderer.domElement);
        this.focusedControls.enableDamping = true;
        this.focusedControls.dampingFactor = 0.05;
        this.focusedControls.rotateSpeed = 0.5;
        this.focusedControls.zoomSpeed = 1.2;
        this.focusedControls.target.set(0, 0, 0);
    }

    setupFocusedLighting() {
        // Main directional light
        const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
        mainLight.position.set(50, 50, 50);
        mainLight.castShadow = true;
        mainLight.shadow.mapSize.width = 2048;
        mainLight.shadow.mapSize.height = 2048;
        this.focusedScene.add(mainLight);
        
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0x404080, 0.5);
        this.focusedScene.add(ambientLight);
        
        // Hemisphere light for better shading
        const hemiLight = new THREE.HemisphereLight(0x0080ff, 0x002040, 0.3);
        this.focusedScene.add(hemiLight);
        
        // Add colored rim lights for dramatic effect
        const rimLight1 = new THREE.DirectionalLight(0x00ffff, 0.3);
        rimLight1.position.set(-50, 0, 0);
        this.focusedScene.add(rimLight1);
        
        const rimLight2 = new THREE.DirectionalLight(0xff00ff, 0.3);
        rimLight2.position.set(50, 0, 0);
        this.focusedScene.add(rimLight2);
    }

    createBoundingBox() {
        const size = this.selectedRegion.size;
        
        // Create wireframe box to show region bounds
        const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.3,
            linewidth: 1
        });
        
        this.boundingBox = new THREE.LineSegments(edges, material);
        this.focusedScene.add(this.boundingBox);
        
        // Add corner markers
        const cornerGeometry = new THREE.SphereGeometry(1, 16, 16);
        const cornerMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.6
        });
        
        const corners = [
            new THREE.Vector3(-size.x/2, -size.y/2, -size.z/2),
            new THREE.Vector3(size.x/2, -size.y/2, -size.z/2),
            new THREE.Vector3(-size.x/2, size.y/2, -size.z/2),
            new THREE.Vector3(size.x/2, size.y/2, -size.z/2),
            new THREE.Vector3(-size.x/2, -size.y/2, size.z/2),
            new THREE.Vector3(size.x/2, -size.y/2, size.z/2),
            new THREE.Vector3(-size.x/2, size.y/2, size.z/2),
            new THREE.Vector3(size.x/2, size.y/2, size.z/2)
        ];
        
        corners.forEach(pos => {
            const marker = new THREE.Mesh(cornerGeometry, cornerMaterial);
            marker.position.copy(pos);
            this.boundingBox.add(marker);
        });
    }

    createGridSystem() {
        const size = this.selectedRegion.size;
        const maxDim = Math.max(size.x, size.y, size.z);
        
        // Create 3D grid for spatial reference
        const gridHelper = new THREE.GridHelper(maxDim * 2, 20, 0x004444, 0x002222);
        gridHelper.position.y = -size.y / 2;
        this.focusedScene.add(gridHelper);
        
        // Add vertical grid planes
        const planeGeometry = new THREE.PlaneGeometry(maxDim * 2, maxDim * 2, 20, 20);
        const planeMaterial = new THREE.MeshBasicMaterial({
            color: 0x004444,
            transparent: true,
            opacity: 0.05,
            wireframe: true,
            side: THREE.DoubleSide
        });
        
        const planeXZ = new THREE.Mesh(planeGeometry, planeMaterial);
        planeXZ.rotation.x = Math.PI / 2;
        this.focusedScene.add(planeXZ);
        
        const planeXY = new THREE.Mesh(planeGeometry, planeMaterial);
        planeXY.position.z = -size.z / 2;
        this.focusedScene.add(planeXY);
    }

    addSatellitesToFocusedScene() {
        // Clear previous debris
        this.focusedDebris.forEach(obj => {
            this.focusedScene.remove(obj);
        });
        this.focusedDebris = [];
        
        // Add satellites with enhanced visuals
        this.satellitesInRegion.forEach(satData => {
            const debris = this.createEnhancedSatellite(satData);
            
            // Adjust position relative to region center
            const relativePos = satData.currentPosition.clone()
                .sub(this.selectedRegion.center);
            debris.position.copy(relativePos);
            
            this.focusedScene.add(debris);
            this.focusedDebris.push(debris);
        });
        
        // Add orbit trails
        this.createOrbitTrails();
    }

    createEnhancedSatellite(satData) {
        const group = new THREE.Group();
        group.userData = satData;
        
        // Main satellite body
        const size = this.getSatelliteSize(satData) * 2; // Larger in focused view
        const geometry = this.createDetailedGeometry(satData, size);
        const color = this.app.debrisManager.getAltitudeColor(satData.altitude);
        
        const material = new THREE.MeshPhysicalMaterial({
            color: color,
            metalness: 0.8,
            roughness: 0.2,
            emissive: color,
            emissiveIntensity: 0.2,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);
        
        // Add solar panels for satellites
        if (!satData.name.toUpperCase().includes('DEB')) {
            this.addSolarPanels(group, size, color);
        }
        
        // Add glow effect
        const glowGeometry = new THREE.SphereGeometry(size * 1.5, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.2,
            blending: THREE.AdditiveBlending
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        group.add(glow);
        
        // Add label
        this.addSatelliteLabel(group, satData);
        
        return group;
    }

    createDetailedGeometry(satData, size) {
        const type = satData.name.toUpperCase();
        
        if (type.includes('DEB')) {
            // Irregular debris shape
            return new THREE.DodecahedronGeometry(size, 0);
        } else if (type.includes('ISS') || type.includes('STATION')) {
            // Complex station shape
            const group = new THREE.BoxGeometry(size * 2, size, size * 1.5);
            return group;
        } else {
            // Standard satellite
            return new THREE.OctahedronGeometry(size, 2);
        }
    }

    addSolarPanels(group, size, color) {
        const panelGeometry = new THREE.BoxGeometry(size * 3, size * 0.1, size);
        const panelMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x000033,
            metalness: 0.9,
            roughness: 0.1,
            emissive: color,
            emissiveIntensity: 0.1
        });
        
        const panel1 = new THREE.Mesh(panelGeometry, panelMaterial);
        panel1.position.x = size * 2;
        group.add(panel1);
        
        const panel2 = new THREE.Mesh(panelGeometry, panelMaterial);
        panel2.position.x = -size * 2;
        group.add(panel2);
    }

    addSatelliteLabel(group, satData) {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, 256, 64);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px Arial';
        ctx.fillText(satData.name, 10, 25);
        
        ctx.fillStyle = '#00ffff';
        ctx.font = '12px Arial';
        ctx.fillText(`Alt: ${Math.round(satData.altitude)} km`, 10, 45);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({
            map: texture,
            transparent: true
        });
        
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(10, 2.5, 1);
        sprite.position.y = 5;
        group.add(sprite);
    }

    createOrbitTrails() {
        // Create simple orbit trails for each satellite
        this.focusedDebris.forEach(debris => {
            const trail = new THREE.BufferGeometry();
            const positions = [];
            
            // Create circular trail
            for (let i = 0; i <= 64; i++) {
                const angle = (i / 64) * Math.PI * 2;
                const radius = debris.position.length();
                positions.push(
                    Math.cos(angle) * radius,
                    debris.position.y,
                    Math.sin(angle) * radius
                );
            }
            
            trail.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            
            const trailMaterial = new THREE.LineBasicMaterial({
                color: debris.children[0].material.color,
                transparent: true,
                opacity: 0.2
            });
            
            const line = new THREE.Line(trail, trailMaterial);
            this.focusedScene.add(line);
        });
    }

    getSatelliteSize(satData) {
        const name = satData.name.toUpperCase();
        
        if (name.includes('ISS') || name.includes('TIANGONG')) {
            return 3.0;
        } else if (name.includes('DEB')) {
            return 0.8;
        }
        return 1.5;
    }

    addReturnButton() {
        const button = document.createElement('button');
        button.innerHTML = '← Return to Main View';
        button.style.cssText = `
            position: fixed;
            top: 30px;
            left: 30px;
            padding: 12px 24px;
            background: rgba(0, 217, 255, 0.2);
            border: 2px solid #00d9ff;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            z-index: 2001;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        `;
        
        button.onmouseover = () => {
            button.style.background = 'rgba(0, 217, 255, 0.3)';
            button.style.transform = 'translateX(5px)';
        };
        
        button.onmouseout = () => {
            button.style.background = 'rgba(0, 217, 255, 0.2)';
            button.style.transform = 'translateX(0)';
        };
        
        button.onclick = () => this.exit();
        this.focusedContainer.appendChild(button);
    }

    transitionToFocusedView() {
        // Hide main view controls
        document.querySelector('.toolbar').style.display = 'none';
        document.querySelector('.navbar').style.opacity = '0.3';
        document.querySelector('.legend').style.display = 'none';
        
        // Fade in focused view
        gsap.to(this.focusedContainer.style, {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut',
            onComplete: () => {
                this.focusedContainer.style.pointerEvents = 'auto';
            }
        });
        
        // Animate camera entrance
        const startPos = this.focusedCamera.position.clone();
        this.focusedCamera.position.multiplyScalar(3);
        
        gsap.to(this.focusedCamera.position, {
            x: startPos.x,
            y: startPos.y,
            z: startPos.z,
            duration: 2,
            ease: 'power3.out'
        });
    }

    exit() {
        if (!this.isActive) return;
        
        // Fade out focused view
        gsap.to(this.focusedContainer.style, {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                // Clean up
                this.focusedContainer.remove();
                this.focusedContainer = null;
                this.focusedScene = null;
                this.focusedCamera = null;
                this.focusedRenderer = null;
                this.focusedControls = null;
                this.focusedDebris = [];
                this.isActive = false;
                
                // Restore main view controls
                document.querySelector('.toolbar').style.display = '';
                document.querySelector('.navbar').style.opacity = '';
                document.querySelector('.legend').style.display = '';
            }
        });
    }

    animate() {
        if (!this.isActive) return;
        
        requestAnimationFrame(() => this.animate());
        
        // Update controls
        if (this.focusedControls) {
            this.focusedControls.update();
        }
        
        // Rotate satellites
        this.focusedDebris.forEach((debris, index) => {
            debris.rotation.y += 0.001 * (index % 2 === 0 ? 1 : -1);
            debris.rotation.x += 0.0005;
            
            // Update positions if app is playing
            if (this.app.isPlaying && debris.userData) {
                const position = this.app.debrisManager.parser.propagateOrbit(
                    debris.userData,
                    this.app.simulationTime
                );
                
                if (position) {
                    const scaledPos = new THREE.Vector3(
                        position.x * this.app.debrisManager.orbitScale,
                        position.y * this.app.debrisManager.orbitScale,
                        position.z * this.app.debrisManager.orbitScale
                    );
                    
                    // Adjust position relative to region center
                    const relativePos = scaledPos.sub(this.selectedRegion.center);
                    debris.position.lerp(relativePos, 0.1);
                }
            }
        });
        
        // Animate bounding box
        if (this.boundingBox) {
            this.boundingBox.rotation.y += 0.0005;
        }
        
        // Render scene
        if (this.focusedRenderer && this.focusedScene && this.focusedCamera) {
            this.focusedRenderer.render(this.focusedScene, this.focusedCamera);
        }
    }

    onResize() {
        if (!this.isActive) return;
        
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.focusedCamera.aspect = width / height;
        this.focusedCamera.updateProjectionMatrix();
        this.focusedRenderer.setSize(width, height);
    }
}
