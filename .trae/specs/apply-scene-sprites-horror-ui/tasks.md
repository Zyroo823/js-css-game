# Tasks
- [x] Task 1: Normalize scene sprite configuration
  - [x] Review all scenes in `game.js` and define an intentional default sprite for each scene that should display a character
  - [x] Keep sprite paths consistent so scene defaults and movement overrides use the same source rules

- [x] Task 2: Fix sprite state transitions
  - [x] Update character rendering so door interactions and scene changes always restore the correct scene default sprite
  - [x] Ensure temporary movement sprites do not persist after input ends or after changing scenes

- [x] Task 3: Strengthen the horror UI theme
  - [x] Restyle the HUD, playfield, story console, and option panel to feel darker and more unsettling
  - [x] Adjust control styling and labels where needed to better match the psychological horror setting

- [x] Task 4: Verify inactive controls are clearly communicated
  - [x] Confirm unfinished controls remain visibly disabled and consistent with the new theme

- [ ] Task 5: Validate the change
  - [ ] Perform a focused code review of the updated rendering and UI paths
  - [ ] Run available checks or manual verification appropriate to the environment

# Task Dependencies
- Task 2 depends on Task 1
- Task 4 depends on Task 3
- Task 5 depends on Tasks 2, 3, and 4
