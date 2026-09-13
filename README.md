# Kroma-Demo

A small collection of browser games and interactive experiments.

## Structure

```text
Kroma-Demo/
├── assets/
│   ├── css/
│   │   └── shared.css
│   └── js/
│       └── shared.js
├── games.json
├── index.html
├── game2.html
├── game3.html
├── game4.html
└── game5.html
```

### Rules

- `games.json` is the single game registry.
- `assets/css/shared.css` is the canonical shared stylesheet.
- `assets/js/shared.js` is the canonical shared runtime/navigation code.
- The root `shared.css` and `shared.js` files are temporary compatibility loaders for the existing root game pages. They contain no game logic.
- Game pages stay at the repository root for simple GitHub Pages URLs.
