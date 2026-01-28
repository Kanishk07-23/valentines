# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is a static HTML/CSS/JavaScript Valentine's Day interactive card. No build tools, package managers, or frameworks are used - it's pure vanilla web development.

## Architecture
The project follows a simple three-file structure:
- `index.html` - Main structure with two screens: envelope container and letter container
- `script.js` - Interactive behavior logic
- `style.css` - All styling and animations

### Key Interactive Flow
1. **Envelope Screen** → User clicks envelope (`#envelope-container`)
2. **Letter Screen** → Displays with animated window (`#letter-container`)
   - Question: "Will you be my Valentine?"
   - Two buttons: Yes (straightforward) and No (evasive)
3. **Final State** → After "Yes" is clicked, shows success message with date details

### Important DOM Elements
- `#envelope-container` - Initial screen with clickable envelope
- `#letter-container` - Main letter screen (initially hidden)
- `.letter-window` - Container for letter content with `window.png` background
- `#letter-cat` - Cat GIF that changes from `cat_heart.gif` to `cat_dance.gif`
- `.yes-btn` and `.no-btn` - Interactive buttons with different behaviors
- `#final-text` - Hidden until "Yes" is clicked

### Interactive Behaviors
- **No Button**: Uses `mouseover` event to move away from cursor using polar coordinates (distance + angle)
- **Yes Button**: On click, triggers final state (title change, cat GIF swap, show final text)
- **Envelope**: Single click reveals letter with CSS transition animation
- **Letter Window**: Uses `.open` class for scale/opacity animation on reveal, `.final` class for success state

## Development Workflow

### Running the Project
Simply open `index.html` in a web browser:
```bash
open index.html
```

Or use Python's built-in server:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000`

### Testing Changes
1. Make edits to HTML/CSS/JS files
2. Refresh browser to see changes
3. Test interactive elements:
   - Click envelope to reveal letter
   - Hover over "No" button (should move away)
   - Click "Yes" button (should show final message with dancing cat)

### Asset Files
All images are in the root directory:
- `envelope.png` - Initial envelope image
- `window.png` - Letter background
- `heart-bg.jpg` - Body background
- `cat_heart.gif` - Initial cat animation
- `cat_dance.gif` - Success state cat animation
- `yes.png`, `no.png` - Button images

## Code Modification Guidelines

### When Modifying JavaScript
- All interactive logic is event-driven (click, mouseover)
- The "No" button movement uses `transform: translate()` with calculated polar coordinates
- State changes are triggered by DOM manipulation (display changes, class additions, src swaps)
- Commented code (lines 42-59) shows an alternative "Yes" button growth implementation

### When Modifying CSS
- `.letter-window` has two state classes: `.open` (reveal animation) and `.final` (success state)
- Animations use CSS transitions, not keyframes (except `@keyframes pulse` on envelope)
- The letter window uses `background-image` with `window.png` for the window frame effect
- Layout is flexbox-based with full viewport centering

### When Modifying HTML
- Two main containers are toggled via `display: none/flex`
- IDs are critical for JavaScript selectors - changing them requires updating script.js
- Font is loaded from Google Fonts: "Pixelify Sans"

## Architecture Notes
This is intentionally a simple, dependency-free static site. There are no:
- Build steps or bundlers
- Package managers (npm, yarn, etc.)
- Testing frameworks
- Linting/formatting tools
- Version control hooks
- Deployment scripts

Keep modifications inline with this simplicity philosophy.
