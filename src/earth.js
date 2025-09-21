import * as THREE from 'three';

export class Earth {
    constructor(scene) {
        this.scene = scene;
        this.earthGroup = new THREE.Group();
        this.earthRadius = 30; // Scaled radius for visualization
        this.init();
    }

    init() {
        this.createEarthSphere();
        this.createAtmosphere();
        this.createClouds();
        this.scene.add(this.earthGroup);
    }

    createEarthSphere() {
        const geometry = new THREE.SphereGeometry(this.earthRadius, 128, 128);
        
        // Load textures
        const textureLoader = new THREE.TextureLoader();
        
        // Create Earth material with PBR materials for realism
        const material = new THREE.MeshPhysicalMaterial({
            map: this.createEarthTexture(),
            bumpMap: this.createBumpTexture(),
            bumpScale: 0.8,
            specularMap: this.createSpecularTexture(),
            roughness: 0.7,
            metalness: 0.1,
            clearcoat: 0.3,
            clearcoatRoughness: 0.4
        });

        this.earthMesh = new THREE.Mesh(geometry, material);
        this.earthMesh.castShadow = true;
        this.earthMesh.receiveShadow = true;
        this.earthGroup.add(this.earthMesh);

        // Add night lights (city lights)
        this.createNightLights();
    }

    createEarthTexture() {
        // Create a more realistic procedural Earth texture
        const canvas = document.createElement('canvas');
        canvas.width = 4096;
        canvas.height = 2048;
        const ctx = canvas.getContext('2d');

        // Create realistic ocean with multiple gradients
        const oceanGradient = ctx.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 0,
            canvas.width / 2, canvas.height / 2, canvas.width / 2
        );
        oceanGradient.addColorStop(0, '#002040');
        oceanGradient.addColorStop(0.5, '#003060');
        oceanGradient.addColorStop(1, '#001530');
        ctx.fillStyle = oceanGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add ocean depth variation
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 200 + 50;
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, 'rgba(0, 30, 60, 0.3)');
            gradient.addColorStop(1, 'rgba(0, 30, 60, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
        }

        // Add continents with more realistic colors and textures
        const landGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        landGradient.addColorStop(0, '#3a5f1f');
        landGradient.addColorStop(0.5, '#2d5016');
        landGradient.addColorStop(1, '#234012');
        ctx.fillStyle = landGradient;
        
        // Simplified continent shapes
        // Africa & Europe
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.52, canvas.height * 0.5, 150, 200, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Americas
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.25, canvas.height * 0.5, 120, 250, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Asia
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.7, canvas.height * 0.35, 200, 150, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Australia
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.75, canvas.height * 0.75, 80, 60, 0, 0, Math.PI * 2);
        ctx.fill();

        // Add some texture detail
        ctx.globalAlpha = 0.3;
        for (let i = 0; i < 1000; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 3;
            ctx.fillStyle = Math.random() > 0.5 ? '#3d6828' : '#1a3d5c';
            ctx.fillRect(x, y, size, size);
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        return texture;
    }

    createBumpTexture() {
        // Create a simple bump map
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#808080';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add some noise for terrain
        for (let i = 0; i < 500; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const brightness = Math.floor(Math.random() * 100 + 100);
            ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 5, 0, Math.PI * 2);
            ctx.fill();
        }

        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    }

    createSpecularTexture() {
        // Create specular map (water is reflective)
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');

        // Ocean areas are bright (reflective), land is dark
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Darken land areas
        ctx.fillStyle = '#000000';
        
        // Simple continent masks
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.52, canvas.height * 0.5, 37, 50, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.25, canvas.height * 0.5, 30, 62, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.7, canvas.height * 0.35, 50, 37, 0, 0, Math.PI * 2);
        ctx.fill();

        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    }

    createNightLights() {
        const geometry = new THREE.SphereGeometry(this.earthRadius + 0.1, 64, 64);
        
        // Create city lights texture
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add city lights as bright spots
        const cities = [
            // North America
            {x: 0.2, y: 0.35, size: 3}, // New York
            {x: 0.15, y: 0.4, size: 2.5}, // Los Angeles
            {x: 0.22, y: 0.38, size: 2}, // Chicago
            // Europe
            {x: 0.51, y: 0.32, size: 2.5}, // London
            {x: 0.53, y: 0.33, size: 2.5}, // Paris
            {x: 0.55, y: 0.35, size: 2}, // Berlin
            // Asia
            {x: 0.75, y: 0.4, size: 3}, // Tokyo
            {x: 0.72, y: 0.45, size: 2.5}, // Shanghai
            {x: 0.68, y: 0.5, size: 2}, // Mumbai
        ];

        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ffaa00';
        
        cities.forEach(city => {
            const gradient = ctx.createRadialGradient(
                city.x * canvas.width, city.y * canvas.height, 0,
                city.x * canvas.width, city.y * canvas.height, city.size * 5
            );
            gradient.addColorStop(0, 'rgba(255, 200, 100, 1)');
            gradient.addColorStop(0.5, 'rgba(255, 170, 0, 0.5)');
            gradient.addColorStop(1, 'rgba(255, 170, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(city.x * canvas.width, city.y * canvas.height, city.size * 5, 0, Math.PI * 2);
            ctx.fill();
        });

        const texture = new THREE.CanvasTexture(canvas);
        
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide
        });

        this.nightLights = new THREE.Mesh(geometry, material);
        this.earthGroup.add(this.nightLights);
    }

    createAtmosphere() {
        // Multi-layer atmosphere for realism
        // Inner atmosphere glow
        const innerAtmosphereGeometry = new THREE.SphereGeometry(this.earthRadius + 1, 64, 64);
        const innerAtmosphereMaterial = new THREE.MeshPhongMaterial({
            color: 0x88bbff,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending
        });
        const innerAtmosphere = new THREE.Mesh(innerAtmosphereGeometry, innerAtmosphereMaterial);
        this.earthGroup.add(innerAtmosphere);
        
        // Middle atmosphere layer
        const midAtmosphereGeometry = new THREE.SphereGeometry(this.earthRadius + 2, 64, 64);
        const midAtmosphereMaterial = new THREE.MeshPhongMaterial({
            color: 0x4080ff,
            transparent: true,
            opacity: 0.08,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending
        });
        const midAtmosphere = new THREE.Mesh(midAtmosphereGeometry, midAtmosphereMaterial);
        this.earthGroup.add(midAtmosphere);

        // Outer atmosphere glow
        const glowGeometry = new THREE.SphereGeometry(this.earthRadius + 4, 64, 64);
        const glowMaterial = new THREE.ShaderMaterial({
            uniforms: {
                c: { value: 0.6 },
                p: { value: 4.5 },
                glowColor: { value: new THREE.Color(0x0080ff) },
                viewVector: { value: new THREE.Vector3() }
            },
            vertexShader: `
                uniform vec3 viewVector;
                varying float intensity;
                void main() {
                    vec3 vNormal = normalize(normalMatrix * normal);
                    vec3 vNormel = normalize(normalMatrix * viewVector);
                    intensity = pow(0.65 - dot(vNormal, vNormel), 2.0);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 glowColor;
                varying float intensity;
                void main() {
                    vec3 glow = glowColor * intensity;
                    gl_FragColor = vec4(glow, intensity * 0.5);
                }
            `,
            side: THREE.FrontSide,
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        
        this.glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        this.earthGroup.add(this.glowMesh);
    }

    createClouds() {
        const cloudsGeometry = new THREE.SphereGeometry(this.earthRadius + 1, 64, 64);
        
        // Create cloud texture
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add cloud patterns
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const width = Math.random() * 100 + 50;
            const height = Math.random() * 30 + 10;
            
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(Math.random() * Math.PI);
            ctx.beginPath();
            ctx.ellipse(0, 0, width, height, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        const texture = new THREE.CanvasTexture(canvas);
        
        const cloudsMaterial = new THREE.MeshPhongMaterial({
            map: texture,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide,
            depthWrite: false
        });

        this.cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
        this.earthGroup.add(this.cloudsMesh);
    }

    update(deltaTime) {
        // Rotate Earth
        this.earthMesh.rotation.y += deltaTime * 0.05;
        this.nightLights.rotation.y = this.earthMesh.rotation.y;
        
        // Rotate clouds slightly faster
        this.cloudsMesh.rotation.y += deltaTime * 0.07;
        this.cloudsMesh.rotation.z += deltaTime * 0.01;
        
        // Update atmosphere glow
        if (this.glowMesh && this.glowMesh.material.uniforms) {
            this.glowMesh.material.uniforms.viewVector.value = new THREE.Vector3().subVectors(
                this.earthGroup.position,
                this.glowMesh.position
            );
        }
    }

    getRadius() {
        return this.earthRadius;
    }
}
