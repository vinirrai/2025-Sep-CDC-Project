# Carolina Data Challenge 2025: Zero Gravity

**Project: Orbital Debris Tracker – 3D Space Visualization**

Using NASA TLE API on Grad Track

---

## About the Project

At **Carolina Data Challenge 2025**, our team set out to explore the growing problem of **orbital debris** and make it **understandable, visual, and interactive**. Using **TLE (Two-Line Element) data**, we simulate satellite and debris trajectories in Earth’s orbit and provide a platform to study their dynamics.

Our platform allows users to:

* Track satellites and debris in **real-time**
* Explore orbits in a **3D globe environment**
* Detect potential **collisions and conjunctions**
* Ask an **AI Satellite Assistant** (Gemini integration) questions about orbits and debris

---

## Features

### 3D Globe Environment

* Realistic Earth with day/night textures, atmosphere, and city lights
* Smooth globe rotation and zoom navigation

### Satellite & Debris Tracking

* TLE-based orbital propagation (via Satellite.js)
* Orbits color-coded by altitude (LEO, MEO, GEO, HEO)
* Toggle orbit trails and object labels

### Interactive Controls

* Click-to-select satellites/debris
* Search by **name or NORAD ID**
* Zoom into objects and view detailed orbital parameters

### AI Satellite Assistant

* Ask questions such as:

  * *“Where is the ISS right now?”*
  * *“Which satellites are currently in GEO?”*
  * *“Explain the difference between Line 1 and Line 2 in TLE format.”*
* Integrated securely with `.env` API key management

---

## Steps of Analysis

1. **Data Collection** – Pulled archived TLEs from **CelesTrak/NASA feeds**.
2. **TLE Parsing** – Extracted **Line 1/Line 2** elements and propagated orbits.
3. **Visualization** – Plotted objects in a 3D environment with altitude coding.
4. **Analysis** – Compared orbital densities and detected potential conjunctions.
5. **Communication** – Enabled an AI-driven Q\&A assistant for contextual insights.

---

## Visualizations

Below are key visual outputs that demonstrate our workflow and analysis:

1. **Global Orbital Debris Map** – Thousands of tracked objects rendered in real-time.
   *(Insert screenshot/GIF here)*

2. **Altitude-Based Classification** – LEO, MEO, GEO, and HEO objects shown in different colors for clarity.
   *(Insert screenshot/GIF here)*

3. **Collision Detection Demo** – Example of two close approaches flagged by our system.
   *(Insert screenshot/GIF here)*

4. **AI Assistant in Action** – Example queries like “Where is the ISS right now?” and AI-powered answers.
   *(Insert screenshot/GIF here)*

---

## Conclusions

* **Debris density is highest in LEO**, confirming risks of congestion and collisions.
* Visualization reveals clear clustering patterns not obvious in raw data.
* The interactive globe helps bridge the gap between raw orbital mechanics and human understanding.
* AI integration lowers barriers, making **space situational awareness accessible** to non-experts.

---

## Value and Impact

* **Education**: A tool for students to explore and understand space debris.
* **Research**: Useful for studying decay rates, clustering, and conjunctions.
* **Policy Awareness**: Makes the urgency of orbital debris mitigation more visible.
* **Hackathon Relevance**: Demonstrates how data science and visualization translate into **actionable insights**.

---

## Installation

```bash
git clone https://github.com/your-username/2025-Sep-CDC-Project.git
cd 2025-Sep-CDC-Project
npm install
npm run dev
```

Then open:

```
http://localhost:3000
```

---

## Project Structure

```
2025-Sep-CDC-Project/
├── dist/                 # Build output
├── public/               # Static assets
├── src/                  # Core code
│   ├── earth.js
│   ├── debrisManager.js
│   ├── collisionDetector.js
│   ├── tleParser.js
│   ├── geminiService.js
│   ├── uiController.js
│   └── style.css
├── sample_TLE_data.pdf
├── index.html
├── vite.config.js
├── package.json
├── env-setup.md
└── README.md
```

---

## Technologies Used

* **Three.js** – 3D rendering
* **Satellite.js** – TLE parsing & orbital mechanics
* **GSAP** – Animations
* **Vite** – Build tool
* **Llama 70B API** – AI Assistant

---

## Citations & Acknowledgments

* **Three.js**, **Satellite.js**, **GSAP**, **Vite**
* **Skyfield** – offline orbital propagation
* **CelesTrak** – Source of TLE data
* **Llama 70 Billion API** – AI assistant integration
* **ChatGPT (OpenAI GPT-5)** – Assisted in brainstorming, debugging, and documentation

Built at **Carolina Data Challenge 2025 (UNC Chapel Hill)** under the theme: **Zero Gravity**.
