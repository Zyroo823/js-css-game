# Characters

Put pixel art character sprites here.

Recommended names:

- `patient-09-idle.png`
- `dr-vale.png`
- `the-double.png`
- `recorder.png`

Use small transparent PNG files when possible, such as `32x32`, `48x48`, or `64x64`. The game uses `image-rendering: pixelated` so small sprites stay crisp when scaled.

To show a sprite in a scene, add `characterImage` in `game.js`:

```js
characterImage: "assets/characters/explorer-idle.png",
```
