import { GoogleGenerativeAI } from '@google/generative-ai';
import mammoth from 'mammoth';

export class GeminiService {
    constructor() {
        this.apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!this.apiKey) {
            console.error('VITE_GEMINI_API_KEY environment variable is not set');
            throw new Error('Gemini API key is required but not found in environment variables');
        }
        this.genAI = new GoogleGenerativeAI(this.apiKey);
        this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
        this.documentCache = new Map();
    }

    async loadSatelliteDocument(satelliteName) {
        // Check cache first
        if (this.documentCache.has(satelliteName)) {
            return this.documentCache.get(satelliteName);
        }

        try {
            // Construct file path based on satellite name
            const fileName = `${satelliteName}.docx`;
            const filePath = `./satelliteinfo/${fileName}`;
            
            // Fetch the .docx file
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Document not found: ${fileName}`);
            }
            
            const arrayBuffer = await response.arrayBuffer();
            
            // Convert .docx to text using mammoth
            const result = await mammoth.extractRawText({ arrayBuffer });
            const documentText = result.value;
            
            // Cache the document
            this.documentCache.set(satelliteName, documentText);
            
            return documentText;
        } catch (error) {
            console.error(`Error loading document for ${satelliteName}:`, error);
            return null;
        }
    }

    async generateSatelliteIntro(satelliteData, documentContent) {
        const prompt = `You are ${satelliteData.name}, a satellite in space. Using the following information, introduce yourself in first person as if you are the satellite speaking. Keep it to 3-4 sentences, friendly and informative.

Satellite Technical Data:
- Name: ${satelliteData.name}
- NORAD ID: ${satelliteData.noradId}
- Altitude: ${satelliteData.altitude} km
- Inclination: ${satelliteData.inclination}°
- Orbital Period: ${satelliteData.period} minutes
- Velocity: ${this.calculateVelocity(satelliteData.altitude)} km/s

Additional Information:
${documentContent || 'No additional documentation available.'}

Start with "Hey! I'm ${satelliteData.name}..." and keep the tone conversational and engaging.`;

        try {
            const result = await this.model.generateContent(prompt);
            return result.response.text();
        } catch (error) {
            console.error('Error generating satellite intro:', error);
            return `Hey! I'm ${satelliteData.name}, orbiting Earth at ${satelliteData.altitude} km altitude. I complete one orbit every ${satelliteData.period} minutes, traveling at approximately ${this.calculateVelocity(satelliteData.altitude)} km/s. Feel free to ask me anything about my mission!`;
        }
    }

    async generateSuggestedQuestions(satelliteData, documentContent) {
        const prompt = `Based on the following satellite information, generate exactly 3 interesting questions that someone might ask about this satellite. Make them specific and relevant to the satellite's mission and capabilities.

Satellite: ${satelliteData.name}
${documentContent || 'Basic orbital satellite with no specific mission details available.'}

Return only the 3 questions, one per line, without numbering or additional text.`;

        try {
            const result = await this.model.generateContent(prompt);
            const questions = result.response.text()
                .split('\n')
                .filter(q => q.trim())
                .slice(0, 3)
                .map(q => q.replace(/^\d+\.?\s*/, '').trim());
            
            return questions.length === 3 ? questions : this.getDefaultQuestions(satelliteData);
        } catch (error) {
            console.error('Error generating suggested questions:', error);
            return this.getDefaultQuestions(satelliteData);
        }
    }

    getDefaultQuestions(satelliteData) {
        return [
            `What is the primary mission of ${satelliteData.name}?`,
            `How does my orbital altitude of ${satelliteData.altitude} km affect my capabilities?`,
            `What makes my orbital inclination of ${satelliteData.inclination}° special for my mission?`
        ];
    }

    async answerQuestion(question, satelliteData, documentContent) {
        const prompt = `You are ${satelliteData.name}, a satellite in space. Answer the following question in first person as the satellite, using your technical specifications and mission information.

Question: ${question}

Your Technical Data:
- Name: ${satelliteData.name}
- NORAD ID: ${satelliteData.noradId}
- Altitude: ${satelliteData.altitude} km
- Inclination: ${satelliteData.inclination}°
- Eccentricity: ${satelliteData.eccentricity}
- Orbital Period: ${satelliteData.period} minutes
- Mean Motion: ${satelliteData.meanMotion} revolutions/day
- Launch Year: ${satelliteData.epochYear}
- Age: ${new Date().getFullYear() - satelliteData.epochYear} years

Mission & Technical Information:
${documentContent || 'No specific mission documentation available.'}

Answer conversationally as the satellite, using "I" and "my" when referring to yourself. Be informative but friendly. If you don't have specific information, be honest about it but provide related general knowledge when helpful.`;

        try {
            const result = await this.model.generateContent(prompt);
            return result.response.text();
        } catch (error) {
            console.error('Error answering question:', error);
            return `I apologize, but I'm having trouble accessing my knowledge systems right now. Please try asking your question again in a moment!`;
        }
    }

    calculateVelocity(altitude) {
        const earthRadius = 6371; // km
        const mu = 398600.4418; // Earth's gravitational parameter km^3/s^2
        const radius = earthRadius + altitude;
        return Math.sqrt(mu / radius).toFixed(2);
    }
}
