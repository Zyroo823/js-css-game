# Scene Sprites And Horror UI Spec

## Why
The game currently mixes scene-specific character art with movement override sprites in a way that can produce the wrong image after door interactions and scene transitions. The UI also reads more like a generic retro panel than a cohesive psychological horror interface.

## What Changes
- Ensure every playable scene has an intentional character sprite presentation instead of falling back unpredictably
- Preserve the correct scene sprite after door interactions, keyboard movement, and scene changes
- Strengthen the visual horror theme across HUD, playfield, story panel, and controls
- Clarify non-functional UI controls so the interface does not imply missing gameplay systems

## Impact
- Affected specs: scene rendering, sprite state handling, UI theming, interaction affordances
- Affected code: `game.js`, `index.html`, `style.css`, `assets/characters/`

## ADDED Requirements
### Requirement: Consistent Scene Sprite Rendering
The system SHALL render a deliberate character sprite for each scene that presents a visible character.

#### Scenario: Scene entry uses the correct sprite
- **WHEN** the player enters a scene with configured character art
- **THEN** the scene shows the intended default sprite for that scene

#### Scenario: Movement does not permanently corrupt the scene sprite
- **WHEN** the player uses movement controls and then stops or changes scenes
- **THEN** the character sprite returns to the correct scene-appropriate default instead of an unrelated movement sprite

### Requirement: Horror-Themed Presentation
The system SHALL present the game interface with a cohesive horror tone through color, contrast, copy, and component styling.

#### Scenario: Core UI communicates horror atmosphere
- **WHEN** the player views the HUD, story console, playfield, and option panel
- **THEN** the interface styling reinforces the psychological horror setting with darker, more distressed visual treatment

## MODIFIED Requirements
### Requirement: Scene Interaction UI
The system SHALL keep visible interaction controls aligned with actual gameplay behavior, and visibly mark unavailable controls as inactive.

#### Scenario: Unavailable controls do not mislead the player
- **WHEN** the player sees controls for features that are not implemented
- **THEN** those controls appear disabled or clearly non-interactive

## REMOVED Requirements
### Requirement: Implicit Sprite Fallback By Last Movement State
**Reason**: Reusing the last movement sprite as an unbounded fallback causes incorrect art to persist across scene changes and door interactions.
**Migration**: Scene rendering should use an explicit per-scene default sprite, while temporary movement sprites act only as reversible overrides.
