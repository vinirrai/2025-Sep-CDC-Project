import { GeminiService } from './geminiService.js';

export class UIController {
    constructor(app) {
        this.app = app;
        this.geminiService = new GeminiService();
        this.currentSatelliteData = null;
        this.chatHistory = [];
        this.infoPanel = document.getElementById('info-panel');
        this.panelContent = document.getElementById('panel-content');
        this.debrisName = document.getElementById('debris-name');
        this.debrisCount = document.getElementById('debris-count');
        this.timeDisplay = document.getElementById('time-display');
        this.speedValue = document.getElementById('speed-value');
    }

    async showDebrisInfo(debrisData) {
        this.debrisName.textContent = debrisData.name;
        this.currentSatelliteData = debrisData;
        this.chatHistory = []; // Reset chat history for new satellite
        
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
            
            <div class="ai-assistant-section">
                <div class="ai-loading">
                    <div class="spinner"></div>
                    <span>Loading AI assistant...</span>
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
        
        // Load AI assistant content
        await this.loadAIAssistant(debrisData);
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
    
    calculateGravityAtAltitude(altitude) {
        const earthRadius = 6371; // km
        const surfaceGravity = 9.80665; // m/s²
        
        // g(h) = g0 * (Re / (Re + h))^2
        const ratio = earthRadius / (earthRadius + altitude);
        const gravityAtAltitude = surfaceGravity * Math.pow(ratio, 2);
        const gravityPercent = (gravityAtAltitude / surfaceGravity) * 100;
        
        return {
            gravity: gravityAtAltitude,
            percentage: gravityPercent
        };
    }
    
    generateZeroGInfoCard(satelliteData) {
        const gravity = this.calculateGravityAtAltitude(satelliteData.altitude);
        const velocity = this.calculateOrbitalVelocity(satelliteData.altitude);
        
        return `
            <div class="info-group zerog-info-card">
                <h4>🚀 Zero-G Physics at This Orbit</h4>
                <div class="zerog-explanation">
                    <p><strong>Why I feel weightless:</strong> Even though gravity here is <strong>${gravity.percentage.toFixed(1)}%</strong> of Earth's surface gravity, I'm in continuous <em>free-fall</em> around Earth!</p>
                </div>
                
                <div class="zerog-stats">
                    <div class="zerog-stat">
                        <span class="zerog-stat-label">Local Gravity:</span>
                        <span class="zerog-stat-value">${gravity.gravity.toFixed(2)} m/s² (${gravity.percentage.toFixed(1)}% of surface)</span>
                    </div>
                    <div class="zerog-stat">
                        <span class="zerog-stat-label">Orbital Velocity:</span>
                        <span class="zerog-stat-value">${velocity.toFixed(2)} km/s</span>
                    </div>
                    <div class="zerog-stat">
                        <span class="zerog-stat-label">Free-fall State:</span>
                        <span class="zerog-stat-value">Weightless (0G experience)</span>
                    </div>
                    <div class="zerog-stat">
                        <span class="zerog-stat-label">Orbital Period:</span>
                        <span class="zerog-stat-value">${this.formatPeriod(satelliteData.period)}</span>
                    </div>
                </div>
                
                <div class="zerog-physics-note">
                    <small>💡 <em>Microgravity = Gravity + Centripetal acceleration canceling each other out</em></small>
                </div>
            </div>
        `;
    }

    async loadAIAssistant(satelliteData) {
        const aiSection = this.panelContent.querySelector('.ai-assistant-section');
        
        try {
            // Load satellite documentation
            const documentContent = await this.geminiService.loadSatelliteDocument(satelliteData.name);
            
            // Generate satellite introduction
            const intro = await this.geminiService.generateSatelliteIntro(satelliteData, documentContent);
            
            // Generate suggested questions
            const suggestedQuestions = await this.geminiService.generateSuggestedQuestions(satelliteData, documentContent);
            
            // Update the AI section with content
            aiSection.innerHTML = `
                <div class="satellite-intro">
                    ${intro}
                </div>
                
                ${this.generateZeroGInfoCard(satelliteData)}
                
                <div class="suggested-questions">
                    <h5>Ask me about:</h5>
                    ${suggestedQuestions.map(question => 
                        `<button class="question-button" onclick="window.ui.askSuggestedQuestion('${question.replace(/'/g, "\\'")}')">${question}</button>`
                    ).join('')}
                </div>
                
                <div class="chat-interface">
                    <div class="chat-messages" id="chat-messages"></div>
                    <div class="chat-input-group">
                        <textarea 
                            class="chat-input" 
                            id="chat-input" 
                            placeholder="Ask me anything about my mission..."
                            rows="1"
                        ></textarea>
                        <button class="chat-send-btn" id="chat-send-btn" onclick="window.ui.sendChatMessage()">
                            Send
                        </button>
                    </div>
                </div>
            `;
            
            // Setup chat input event listeners
            this.setupChatEventListeners();
            
        } catch (error) {
            console.error('Error loading AI assistant:', error);
            aiSection.innerHTML = `
                <div class="satellite-intro">
                    Hey! I'm ${satelliteData.name}, orbiting Earth at ${Math.round(satelliteData.altitude)} km altitude. 
                    I complete one orbit every ${this.formatPeriod(satelliteData.period)}, traveling at approximately 
                    ${this.calculateOrbitalVelocity(satelliteData.altitude).toFixed(2)} km/s. 
                    My AI systems are currently offline, but feel free to explore my technical specifications above!
                </div>
            `;
        }
    }

    setupChatEventListeners() {
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('chat-send-btn');
        
        if (!chatInput || !sendBtn) return;
        
        // Auto-resize textarea
        chatInput.addEventListener('input', () => {
            chatInput.style.height = 'auto';
            chatInput.style.height = Math.min(chatInput.scrollHeight, 72) + 'px';
        });
        
        // Send message on Enter (Shift+Enter for new line)
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendChatMessage();
            }
        });
    }

    async askSuggestedQuestion(question) {
        // Add user message to chat
        this.addChatMessage(question, 'user');
        
        // Disable all question buttons
        const questionButtons = this.panelContent.querySelectorAll('.question-button');
        questionButtons.forEach(btn => {
            btn.disabled = true;
            btn.textContent = 'Loading...';
        });
        
        try {
            // Get answer from Gemini
            const documentContent = await this.geminiService.loadSatelliteDocument(this.currentSatelliteData.name);
            const answer = await this.geminiService.answerQuestion(question, this.currentSatelliteData, documentContent);
            
            // Add AI response to chat
            this.addChatMessage(answer, 'assistant');
            
        } catch (error) {
            console.error('Error getting AI response:', error);
            this.addChatMessage("I apologize, but I'm having trouble accessing my knowledge systems right now. Please try again in a moment!", 'assistant');
        }
        
        // Re-enable question buttons with original text
        const originalQuestions = await this.geminiService.generateSuggestedQuestions(this.currentSatelliteData, 
            await this.geminiService.loadSatelliteDocument(this.currentSatelliteData.name));
        questionButtons.forEach((btn, index) => {
            btn.disabled = false;
            if (originalQuestions[index]) {
                btn.textContent = originalQuestions[index];
            }
        });
    }

    async sendChatMessage() {
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('chat-send-btn');
        
        if (!chatInput || !sendBtn) return;
        
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Clear input and disable send button
        chatInput.value = '';
        chatInput.style.height = 'auto';
        sendBtn.disabled = true;
        sendBtn.textContent = '...';
        
        // Add user message to chat
        this.addChatMessage(message, 'user');
        
        try {
            // Get answer from Gemini
            const documentContent = await this.geminiService.loadSatelliteDocument(this.currentSatelliteData.name);
            const answer = await this.geminiService.answerQuestion(message, this.currentSatelliteData, documentContent);
            
            // Add AI response to chat
            this.addChatMessage(answer, 'assistant');
            
        } catch (error) {
            console.error('Error getting AI response:', error);
            this.addChatMessage("I apologize, but I'm having trouble processing your question right now. Please try again in a moment!", 'assistant');
        }
        
        // Re-enable send button
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send';
        chatInput.focus();
    }

    addChatMessage(message, type) {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        messageDiv.textContent = message;
        
        chatMessages.appendChild(messageDiv);
        
        // Store in chat history
        this.chatHistory.push({ message, type, timestamp: new Date() });
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
