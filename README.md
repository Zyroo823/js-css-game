# The Ward Remembers

A dark psychological horror text adventure built with HTML, CSS, and JavaScript.

Open `index.html` in a browser to play. Each button moves to a different scene, changes the patient stats, and can lead to a different ending.

## Files

- `index.html` sets up the game screen.
- `style.css` controls the dark clinical horror look.
- `game.js` contains the command/decision tree and game state.
- `COMMAND_TREE.md` maps the story decisions and endings.
- `PROJECT_TREE.md` shows the project folder layout.
- `assets/characters/` is ready for horror pixel art character sprites.
- `assets/scenes/` is ready for ward, hallway, memory, or nightmare art.
- `assets/ui/` is ready for interface art like medical records, tape icons, and dialogue frames.

To add more paths, edit the `scenes` object in `game.js`. Each scene can have text, ASCII art, choices, stat effects, and an ending flag.

To add a character image to a scene, put a PNG in `assets/characters/` and add this to the scene in `game.js`:

```js
characterImage: "assets/characters/patient-09-idle.png",
```
