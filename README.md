---

# 🛰️ Carolina Data Challenge 2025: Zero Gravity

**Project: Orbital Debris Tracker – 3D Space Visualization**

Using NASA TLE API on Grad Track

---

## 🌌 About the Project

At **Carolina Data Challenge 2025**, our team wanted to explore the growing problem of **orbital debris** and make it **understandable, visual, and interactive**. Using **TLE (Two-Line Element) data**, we simulate satellite and debris trajectories in Earth’s orbit.

Our platform allows users to:

* Track satellites and debris in **real-time**
* Explore orbits in a **3D globe environment**
* Detect potential **collisions and conjunctions**
* Ask an **AI Satellite Assistant** (Gemini integration) questions about orbits and debris

---

## ✨ Features

### 🌍 3D Globe Environment

* Realistic Earth with day/night textures, atmosphere, and city lights
* Smooth globe rotation and zoom navigation

### 🛰️ Satellite & Debris Tracking

* TLE-based orbital propagation (via Satellite.js)
* Orbits color-coded by altitude (LEO, MEO, GEO, HEO)
* Toggle orbit trails and object labels

### ⚠️ Collision Detection (CDC Core)

* Predicts possible debris-satellite conjunctions
* Highlights collision risk zones

### 🎮 Interactive Controls

* Click-to-select satellites/debris
* Search by **name or NORAD ID**
* Zoom into objects and view detailed orbital parameters

### 🤖 Gemini AI Satellite Assistant

* Ask questions like:

  * *“Where is the ISS right now?”*
  * *“Which satellites are currently in GEO?”*
  * *“Explain the difference between Line 1 and Line 2 in TLE format.”*
* Integrated securely with `.env` API key management

---

## 🚀 Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/2025-Sep-CDC-Project.git
   cd 2025-Sep-CDC-Project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup environment variables:
   Create a `.env` file in the project root:

   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

5. Open your browser at:

   ```
   http://localhost:3000
   ```

---

## 📂 Project Structure

```
2025-Sep-CDC-Project/
│
├── dist/                 # Build output
├── public/               # Static assets
├── src/                  # Core code
│   ├── earth.js          # 3D Earth rendering
│   ├── debrisManager.js  # Orbital debris visualization
│   ├── collisionDetector.js # Collision prediction
│   ├── tleParser.js      # TLE parsing utilities
│   ├── geminiService.js  # AI integration
│   ├── uiController.js   # UI interactions
│   └── style.css         # Styling
│
├── sample_TLE_data.pdf   # Example TLE dataset
├── index.html            # Entry point
├── vite.config.js        # Build config
├── package.json          # Dependencies
├── env-setup.md          # API key setup
└── README.md             # Project documentation
```

---

## 🛠 Technologies Used

* **Three.js** – 3D rendering (Earth, orbits, debris)
* **Satellite.js** – TLE parsing & orbital mechanics
* **GSAP** – Animations & smooth transitions
* **Vite** – Build tool & dev server
* **Gemini AI API** – Satellite Assistant

---

## 🌟 Why This Matters

* Orbital debris is a **growing problem**: thousands of fragments threaten satellites and the ISS.
* Our tool helps **visualize, understand, and communicate** the issue in an **interactive way**.
* It can be used for **education, research, and cawareness** — making the invisible problem visible.

---

📜 License

MIT License – Open for educational and research use.

🙏 Citations & Acknowledgments

This project was built with the support of several open-source tools and APIs:

Three.js
 – 3D rendering and WebGL

Satellite.js
 – TLE parsing and orbital mechanics

GSAP
 – Smooth animations and transitions

Vite
 – Modern dev server and build tool

Skyfield
 (for offline TLE validation and orbital propagation)

CelesTrak
 – Source of TLE data

Gemini API
 – Used for our AI Satellite Assistant that answers user queries

ChatGPT (OpenAI GPT-5)
 – Assisted in brainstorming, debugging, and drafting documentation, including this README

We also acknowledge the Carolina Data Challenge 2025 team for providing the theme “Zero Gravity” and organizing the hackathon.

⚡ Built at Carolina Data Challenge 2025 (UNC Chapel Hill) under the theme: Zero Gravity.
