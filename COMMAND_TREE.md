# Game Command Tree

This file maps the psychological horror decision paths in `game.js`.

```text
Start: The Ward Remembers
|-- Pull against the restraints
|   |-- Open the nearest 6B
|   |   |-- Break the mirror
|   |   |   |-- Wait for the footsteps
|   |   |   |   |-- Let the double leave
|   |   |   |   |   `-- Ending: The Symptom Remains
|   |   |   |   `-- Lock the double in
|   |   |   |       `-- Ending: Recovered
|   |   |   `-- Keep descending
|   |   |       |-- Keep the painful memory
|   |   |       |   `-- Ending: The Honest Scar
|   |   |       `-- Accept the planted memory
|   |   |           `-- Ending: Soft White Room
|   |   `-- Touch the glass
|   |       |-- Keep the painful memory
|   |       |   `-- Ending: The Honest Scar
|   |       `-- Accept the planted memory
|   |           `-- Ending: Soft White Room
|   `-- Follow the laugh
|       |-- Take your name tag
|       |   |-- Read the final page
|       |   |   |-- Keep the painful memory
|       |   |   |   `-- Ending: The Honest Scar
|       |   |   `-- Accept the planted memory
|       |   |       `-- Ending: Soft White Room
|       |   `-- Burn the file
|       |       |-- Wait for the footsteps
|       |       |   |-- Let the double leave
|       |       |   |   `-- Ending: The Symptom Remains
|       |       |   `-- Lock the double in
|       |       |       `-- Ending: Recovered
|       |       `-- Keep descending
|       |           |-- Keep the painful memory
|       |           |   `-- Ending: The Honest Scar
|       |           `-- Accept the planted memory
|       |               `-- Ending: Soft White Room
|       `-- Take the old name
|           |-- Keep the painful memory
|           |   `-- Ending: The Honest Scar
|           `-- Accept the planted memory
|               `-- Ending: Soft White Room
`-- Answer the recorder
    |-- Admit you signed it
    |   |-- Read the final page
    |   |   |-- Keep the painful memory
    |   |   |   `-- Ending: The Honest Scar
    |   |   `-- Accept the planted memory
    |   |       `-- Ending: Soft White Room
    |   `-- Burn the file
    |       |-- Wait for the footsteps
    |       |   |-- Let the double leave
    |       |   |   `-- Ending: The Symptom Remains
    |       |   `-- Lock the double in
    |       |       `-- Ending: Recovered
    |       `-- Keep descending
    |           |-- Keep the painful memory
    |           |   `-- Ending: The Honest Scar
    |           `-- Accept the planted memory
    |               `-- Ending: Soft White Room
    `-- Accuse the tape of lying
        |-- Step through the ink
        |   |-- Keep the painful memory
        |   |   `-- Ending: The Honest Scar
        |   `-- Accept the planted memory
        |       `-- Ending: Soft White Room
        `-- Run from the room
            `-- Ending: No Discharge
```

## Windows Commands

Run these in PowerShell from this folder:

```powershell
# See your project files
tree /F

# Open the game in your browser
start .\index.html
```
