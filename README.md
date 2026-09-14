# Leo & Mimi's Little World - Children's Educational Show Prototype

A web-based animated children's educational show prototype built with React, Vite, SVG, and CSS animations.

## Overview

This prototype showcases Episode 1: "Leo & Mimi Learn About Colors". It features:

- Animated background with moving clouds, swaying grass, and bobbing flowers
- Original characters: Leo (lion) and Mimi (bunny) with expressive animations
- Interactive controls: Play/Pause, Restart, Next Scene, Mute/Unmute, Progress indicator
- Speech synthesis placeholder for character dialogue (can be replaced with professional audio)
- Responsive design for desktop, tablet, and mobile
- Modular architecture for easy episode expansion

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Animations.css   # CSS animations and keyframes
│   ├── Character.jsx    # Character display with actions
│   ├── Controls.jsx     # Playback controls
│   ├── Dialogue.jsx     # Speech bubble with Web Speech API
│   ├── EndScreen.jsx    # End screen
│   ├── Meadow.jsx       # Animated background
│   ├── Object.jsx       # Object display (apple, butterfly, flower)
│   └── Title.jsx        # Title screen
├── episodes/            # Episode data in JSON format
│   └── episode1.json    # First episode script
├── assets/
│   ├── characters/      # SVG characters (Leo.svg, Mimi.svg)
│   └── objects/         # SVG objects (apple.svg, butterfly.svg, flower.svg)
├── App.jsx              # Main application logic
├── index.css            # Global styles and animation imports
└── main.jsx             # React entry point
```

## How It Works

- **Episode Data**: Each episode is defined in a JSON file under `src/episodes/`. The data contains scenes with timing, characters, objects, dialogue, and actions.
- **Animation Engine**: The App component reads the current scene and renders characters, objects, and dialogue based on the data.
- **Character Actions**: Characters can perform actions like `idle`, `point`, `look`, `ask`, `smile`, `celebrate`, `wave`, each tied to CSS animations.
- **Background**: The Meadow component provides an animated sky with moving clouds, swaying grass, and bobbing flowers using pure CSS.
- **Controls**: Playback is managed via `requestAnimationFrame` for smooth scene transitions. Controls update playback state and seek position.
- **Speech Synthesis**: The Dialogue component uses the Web Speech API's `SpeechSynthesisUtterance` as a placeholder for voice audio. Set `muted:true` to disable speech.

## Adding New Episodes

1. Create a new JSON file in `src/episodes/` (e.g., `episode2.json`).
2. Follow the same structure as `episode1.json`:
   - Each scene has a `duration` (seconds) and an array of `elements`.
   - Supported element types:
     - `character`: `{ name: "Leo"|"Mimi", action: string, x: number, y: number }`
     - `object`: `{ name: "apple"|"butterfly"|"flower", x: number, y: number }`
     - `dialogue`: `{ character: "Leo"|"Mimi", text: string, duration: number }`
     - `title`: `{ text: string }` (shows as title screen overlay)
3. Import the episode in `App.jsx` if you want to add a selection mechanism, or replace the import to test a new episode.
4. For now, the app loads `episode1.json` by default. To test another episode, change the import in `App.jsx`.

## Replacing Placeholder Assets

### Characters & Objects
- Place new SVG files in `src/assets/characters/` and `src/assets/objects/`.
- Ensure the filenames match those referenced in the episode JSON (`name` field).
- The SVG will scale automatically; keep the viewBox appropriate for the intended size.

### Background
- To change the meadow background, modify `src/components/Meadow.jsx`.
- Replace the inline SVG or CSS with your own artwork.
- For more complex backgrounds, consider using CSS backgrounds or SVG layers.

### Audio
- Replace the Web Speech API call in `src/components/Dialogue.jsx` with your audio playback logic.
- The `muted` prop can be controlled via the mute button.
- To add professional voice files, store them in `src/assets/audio/` and play them based on dialogue events.

## Development

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Build for Production
```bash
npm run build
```
Output will be in the `dist/` folder.

## Customization

### Styling
- Global styles and animations are in `src/index.css` (which imports `src/components/Animations.css`).
- Adjust colors, fonts, and animation timing to match your brand.

### Responsiveness
- The app uses a container with `max-width: 800px` and scales down on smaller screens.
- Adjust breakpoints in `index.css` if needed.

## Notes

- This is a prototype intended to demonstrate the concept. For production, consider:
  - Adding proper state management (e.g., Redux, Context) for complex episodes.
  - Using a sprite sheet or CSS sheets for character animations.
  - Preloading assets and implementing lazy loading.
  - Adding accessibility features (ARIA labels, keyboard controls).
  - Testing across browsers.

Enjoy creating your children's show!
