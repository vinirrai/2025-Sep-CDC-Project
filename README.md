# Orbital Debris Tracker - 3D Space Visualization

A professional web-based 3D visualization platform for tracking orbital debris and satellites using TLE (Two-Line Element) data. Features real-time orbit simulation, smooth interactive exploration, and a modern space-themed UI.

## Features

### 🌍 3D Globe Environment
- Realistic Earth rendering with day/night textures
- Atmospheric glow effects
- Cloud layers and city lights
- Smooth rotation and navigation

### 🛰️ Debris Visualization
- Real-time TLE data parsing and orbital propagation
- Color-coded debris by altitude (LEO, MEO, GEO, HEO)
- Orbital path visualization
- Optimized rendering for thousands of objects

### 🎮 Interactive Controls
- Click-to-select debris with smooth zoom transitions
- Detailed information panel with orbital parameters
- Search by satellite name or NORAD ID
- Playback speed control
- Toggle orbit trails and labels

### 🎨 Professional UI
- Dark space-themed design
- Smooth animations and transitions
- Responsive layout
- Real-time statistics display

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

## Usage

### Navigation
- **Left Mouse**: Rotate view
- **Right Mouse**: Pan camera
- **Scroll**: Zoom in/out
- **Click Debris**: Select and view details

### Controls
- **Reset View**: Return to default camera position
- **Toggle Orbits**: Show/hide orbital paths
- **Toggle Labels**: Show/hide debris labels
- **Fullscreen**: Enter fullscreen mode
- **Play/Pause**: Control simulation playback
- **Speed Slider**: Adjust simulation speed (0.1x to 100x)

### Loading TLE Data
- Click "Upload TLE File" to load custom TLE data
- Supports standard TLE format (.txt, .tle files)
- Sample data loads automatically on startup

### Search Function
- Type satellite name or NORAD ID in search bar
- Click search result to zoom to object
- Displays up to 10 matching results

## TLE Data Format

The application accepts standard Two-Line Element format:
```
SATELLITE NAME
1 NNNNNC NNNNNAAA NNNNN.NNNNNNNN +.NNNNNNNN +NNNNN-N +NNNNN-N N NNNNN
2 NNNNN NNN.NNNN NNN.NNNN NNNNNNN NNN.NNNN NNN.NNNN NN.NNNNNNNNNNNNNN
```

## Technologies Used

- **Three.js**: 3D rendering and WebGL
- **Satellite.js**: TLE parsing and orbital mechanics
- **GSAP**: Smooth animations and transitions
- **Vite**: Fast build tool and dev server

## Performance

- Instanced rendering for large debris fields
- Level-of-detail system for optimal performance
- Efficient orbital propagation algorithms
- GPU-accelerated particle effects

## Browser Requirements

- Modern browser with WebGL support
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Recommended: Desktop with dedicated GPU

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

MIT License - Feel free to use for educational and commercial purposes.
