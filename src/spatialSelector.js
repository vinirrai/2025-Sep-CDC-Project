import * as THREE from 'three';
import gsap from 'gsap';

export class SpatialSelector {
    constructor(scene, camera, renderer, app) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.app = app;
        
        this.isSelecting = false;
        this.selectionBox = null;
        this.selectionHelper = null;
        this.selectionBounds = null;
        
        this.startPoint = new THREE.Vector3();
        this.endPoint = new THREE.Vector3();
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        
        this.init();
    }

    init() {
        this.createSelectionBox();
        this.setupEventListeners();
    }

    createSelectionBox() {
        // Create wireframe box for selection visualization
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 1.0,
            linewidth: 3
        });
        
        this.selectionBox = new THREE.LineSegments(edges, material);
        this.selectionBox.visible = false;
        this.scene.add(this.selectionBox);

        // Create selection helper (semi-transparent box)
        const helperMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.2,
            side: THREE.DoubleSide,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        
        this.selectionHelper = new THREE.Mesh(geometry, helperMaterial);
        this.selectionHelper.visible = false;
        this.scene.add(this.selectionHelper);
        
        // Add pulsing animation for better visibility
        this.animateSelection();
    }

    setupEventListeners() {
        // Will be controlled by UI buttons
    }

    enableSelection() {
        this.isSelecting = true;
        document.body.style.cursor = 'crosshair';
        
        // Add event listeners
        this.renderer.domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.renderer.domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
        
        // Disable orbit controls
        this.app.controls.enabled = false;
    }

    disableSelection() {
        this.isSelecting = false;
        document.body.style.cursor = 'grab';
        
        // Remove event listeners
        this.renderer.domElement.removeEventListener('mousedown', this.onMouseDown.bind(this));
        this.renderer.domElement.removeEventListener('mousemove', this.onMouseMove.bind(this));
        this.renderer.domElement.removeEventListener('mouseup', this.onMouseUp.bind(this));
        
        // Re-enable orbit controls
        this.app.controls.enabled = true;
    }

    onMouseDown(event) {
        if (!this.isSelecting) return;

        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Raycast to get 3D point on a sphere around Earth
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        // Create an invisible sphere for intersection
        const sphereGeometry = new THREE.SphereGeometry(50, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ visible: false });
        const intersectSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        intersectSphere.position.set(0, 0, 0);
        
        const intersects = this.raycaster.intersectObject(intersectSphere);
        
        if (intersects.length > 0) {
            this.startPoint = intersects[0].point;
        } else {
            // Fallback to camera-based positioning
            const distance = this.camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
            const direction = this.camera.getWorldDirection(new THREE.Vector3()).normalize();
            this.startPoint = this.camera.position.clone().add(direction.multiplyScalar(distance * 0.3));
        }
        
        this.selectionBox.visible = true;
        this.selectionHelper.visible = true;
        this.updateSelectionBox();
    }

    onMouseMove(event) {
        if (!this.isSelecting || !this.selectionBox.visible) return;

        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        // Calculate end point
        const distance = this.camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
        const direction = this.camera.getWorldDirection(new THREE.Vector3()).normalize();
        this.endPoint = this.camera.position.clone().add(direction.multiplyScalar(distance * 0.5));
        
        // Add mouse offset
        const right = new THREE.Vector3().crossVectors(this.camera.up, direction).normalize();
        const up = new THREE.Vector3().crossVectors(direction, right).normalize();
        
        this.endPoint.add(right.multiplyScalar(this.mouse.x * distance * 0.2));
        this.endPoint.add(up.multiplyScalar(this.mouse.y * distance * 0.2));

        this.updateSelectionBox();
    }

    onMouseUp(event) {
        if (!this.isSelecting || !this.selectionBox.visible) return;

        // Finalize selection
        this.createSelectionBounds();
        this.disableSelection();
        
        // Notify app of selection
        if (this.app.onSpatialSelection) {
            this.app.onSpatialSelection(this.selectionBounds);
        }
    }

    updateSelectionBox() {
        const center = this.startPoint.clone().add(this.endPoint).multiplyScalar(0.5);
        const size = new THREE.Vector3();
        size.subVectors(this.endPoint, this.startPoint).abs();
        
        // Ensure minimum size
        size.x = Math.max(size.x, 10);
        size.y = Math.max(size.y, 10);
        size.z = Math.max(size.z, 10);

        this.selectionBox.position.copy(center);
        this.selectionBox.scale.copy(size);
        
        this.selectionHelper.position.copy(center);
        this.selectionHelper.scale.copy(size);
    }

    createSelectionBounds() {
        if (!this.selectionBox.visible) return null;

        const center = this.selectionBox.position.clone();
        const size = this.selectionBox.scale.clone();
        
        this.selectionBounds = {
            center: center,
            size: size,
            min: new THREE.Vector3(
                center.x - size.x / 2,
                center.y - size.y / 2,
                center.z - size.z / 2
            ),
            max: new THREE.Vector3(
                center.x + size.x / 2,
                center.y + size.y / 2,
                center.z + size.z / 2
            )
        };

        return this.selectionBounds;
    }

    clearSelection() {
        this.selectionBox.visible = false;
        this.selectionHelper.visible = false;
        this.selectionBounds = null;
        
        if (this.app.onSpatialSelectionCleared) {
            this.app.onSpatialSelectionCleared();
        }
    }

    isPointInSelection(point) {
        if (!this.selectionBounds) return false;

        return point.x >= this.selectionBounds.min.x &&
               point.x <= this.selectionBounds.max.x &&
               point.y >= this.selectionBounds.min.y &&
               point.y <= this.selectionBounds.max.y &&
               point.z >= this.selectionBounds.min.z &&
               point.z <= this.selectionBounds.max.z;
    }

    getSelectedSatellites(debrisManager, time) {
        if (!this.selectionBounds) return [];

        const selectedSatellites = [];
        
        debrisManager.debrisData.forEach(satData => {
            const position = debrisManager.parser.propagateOrbit(satData, time);
            if (position) {
                const scaledPos = new THREE.Vector3(
                    position.x * debrisManager.orbitScale,
                    position.y * debrisManager.orbitScale,
                    position.z * debrisManager.orbitScale
                );
                
                if (this.isPointInSelection(scaledPos)) {
                    selectedSatellites.push({
                        ...satData,
                        currentPosition: scaledPos,
                        realPosition: position
                    });
                }
            }
        });

        return selectedSatellites;
    }

    animateToRegion() {
        if (!this.selectionBounds) return;

        const center = this.selectionBounds.center;
        const size = this.selectionBounds.size;
        const maxDim = Math.max(size.x, size.y, size.z);
        
        // Calculate optimal camera distance
        const distance = maxDim * 2;
        const direction = center.clone().sub(this.camera.position).normalize();
        const targetPosition = center.clone().sub(direction.multiplyScalar(distance));

        // Smooth camera animation
        gsap.to(this.camera.position, {
            duration: 2,
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            ease: "power2.inOut"
        });

        gsap.to(this.app.controls.target, {
            duration: 2,
            x: center.x,
            y: center.y,
            z: center.z,
            ease: "power2.inOut"
        });
    }

    animateSelection() {
        // Continuous animation loop for selection box
        const animate = () => {
            if (this.selectionBox && this.selectionBox.visible) {
                // Pulse the wireframe
                this.selectionBox.material.opacity = 0.5 + Math.sin(Date.now() * 0.003) * 0.5;
                
                // Rotate slightly for visual interest
                this.selectionBox.rotation.y += 0.001;
                this.selectionHelper.rotation.y = this.selectionBox.rotation.y;
            }
            requestAnimationFrame(animate);
        };
        animate();
    }
    
    highlightSelection() {
        // This method is now handled by animateSelection
    }

    getSelectionInfo() {
        if (!this.selectionBounds) return null;

        const size = this.selectionBounds.size;
        return {
            center: this.selectionBounds.center,
            dimensions: {
                width: size.x.toFixed(1),
                height: size.y.toFixed(1),
                depth: size.z.toFixed(1)
            },
            volume: (size.x * size.y * size.z).toFixed(2)
        };
    }
}
