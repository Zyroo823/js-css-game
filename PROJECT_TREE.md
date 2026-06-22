# Project Folder Tree

```text
jsGame/
|-- index.html
|-- style.css
|-- game.js
|-- COMMAND_TREE.md
|-- PROJECT_TREE.md
|-- README.md
`-- assets/
    |-- characters/
    |   `-- README.md
    |-- scenes/
    |   `-- README.md
    `-- ui/
        `-- README.md
```

## Asset Plan

- `assets/characters/` is for patient, doctor, double, and other horror character sprites.
- `assets/scenes/` is for ward rooms, nightmare spaces, backgrounds, and scene panels.
- `assets/ui/` is for medical-record icons, tape controls, dialogue borders, and buttons.

The game currently shows a CSS pixel placeholder. When your real character art is ready, place it in `assets/characters/` and set `characterImage` on any scene in `game.js`.
