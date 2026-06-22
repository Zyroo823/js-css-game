const scenes = {
  start: {
    chapter: "Session 01",
    title: "The Ward Remembers",
    characterName: "Patient 09",
    art: String.raw`
      ______________________
     |  OBSERVATION WARD   |
     |  03:17 AM           |
     |_____________________|
       |   |         |   |
       |___|_________|___|
           do not blink
    `,
    text: "You wake strapped to a chair in a ward that closed twenty years ago. A recorder clicks on by itself and speaks in your voice: 'Tell me which memory is real.'",
    choices: [
      {
        label: "Pull against the restraints",
        detail: "Pain proves the room is real, but it costs you nerve.",
        next: "hall",
        effects: { power: -1 },
      },
      {
        label: "Answer the recorder",
        detail: "Let the voice guide the first memory back.",
        next: "recorder",
        effects: { trust: 1 },
      },
    ],
  },
  hall: {
    chapter: "Session 02",
    title: "The Locked Hall",
    characterName: "Patient 09",
    art: String.raw`
      |  |  |  |  |  |
      |__|__|__|__|__|
      |  6B  |  6B  |
      |______|______|
          footsteps stop
          when you stop
    `,
    text: "The hallway smells of bleach and old rain. Every door is marked 6B, including the one you came from. A child's laugh moves behind the walls.",
    choices: [
      {
        label: "Open the nearest 6B",
        detail: "Face the repeating room and search for a fragment.",
        next: "mirror",
        effects: { clue: 1, power: -1 },
      },
      {
        label: "Follow the laugh",
        detail: "Let the sound lead you deeper into the ward.",
        next: "nursery",
        effects: { clue: 1 },
      },
    ],
  },
  recorder: {
    chapter: "Session 02",
    title: "Your Voice On Tape",
    characterName: "The Recorder",
    art: String.raw`
       .--------------.
      |  REC  PLAY    |
      |  o    [====]  |
      |________________|
          it breathes
          between words
    `,
    text: "The tape knows your pauses. It asks why you signed the release form. You do not remember signing anything, but your hand aches like it held a pen for hours.",
    choices: [
      {
        label: "Admit you signed it",
        detail: "Accept guilt and unlock a buried fragment.",
        next: "file",
        effects: { trust: 1, clue: 1 },
      },
      {
        label: "Accuse the tape of lying",
        detail: "Resist the story, even as doubt grows louder.",
        next: "ink",
        effects: { trust: 1 },
      },
    ],
  },
  mirror: {
    chapter: "Session 03",
    title: "The Mirror Room",
    characterName: "The Reflection",
    art: String.raw`
       ______________
      |              |
      |   you are    |
      |   behind     |
      |   yourself   |
      |______________|
    `,
    text: "The mirror shows you standing behind your own chair, smiling with too many calm thoughts. The reflection raises a finger to its lips before you do.",
    choices: [
      {
        label: "Break the mirror",
        detail: "Shatter the image before it finishes copying you.",
        next: "stairwell",
        effects: { power: -1 },
      },
      {
        label: "Touch the glass",
        detail: "Let the reflection show you what it remembers.",
        next: "basement",
        effects: { clue: 1, trust: 1 },
      },
    ],
  },
  nursery: {
    chapter: "Session 03",
    title: "The Empty Nursery",
    characterName: "Small Voice",
    art: String.raw`
       crib  crib  crib
      [____][____][____]
          mobile turns
          without wind
    `,
    text: "The nursery has no children, only name tags tied to empty cribs. One tag carries your name. Another carries the name you used before the ward changed it.",
    choices: [
      {
        label: "Take your name tag",
        detail: "Keep the identity you woke with.",
        next: "file",
        effects: { power: -1, clue: 1 },
      },
      {
        label: "Take the old name",
        detail: "Let the forgotten self speak.",
        next: "basement",
        effects: { trust: 1, clue: 1 },
      },
    ],
  },
  file: {
    chapter: "Session 03",
    title: "The Patient File",
    characterName: "Dr. Vale",
    art: String.raw`
       CONFIDENTIAL
      ______________
     |  SUBJECT 09  |
     |  CONSENT: ?  |
     |  RESULT: NO  |
     |______________|
    `,
    text: "The file says the treatment did not erase fear. It taught fear to wear your face. A note in the margin reads: 'If subject returns, do not let them sleep.'",
    choices: [
      {
        label: "Read the final page",
        detail: "Learn what the treatment made of you.",
        next: "basement",
        effects: { clue: 1, trust: 1 },
      },
      {
        label: "Burn the file",
        detail: "Destroy the record and keep moving.",
        next: "stairwell",
        effects: { power: -1 },
      },
    ],
  },
  ink: {
    chapter: "Session 03",
    title: "Black Ink",
    characterName: "The Recorder",
    art: String.raw`
       drip
          drip
      ____________
     | I AGREE    |
     | I AGREE    |
     | I AGREE    |
     |____________|
    `,
    text: "Ink crawls from the tape deck and forms your signature on the floor. When you step away, it follows, correcting each footprint into a confession.",
    choices: [
      {
        label: "Step through the ink",
        detail: "Accept the stain and reach the lower ward.",
        next: "basement",
        effects: { clue: 1, trust: 1 },
      },
      {
        label: "Run from the room",
        detail: "Keep your hands clean, if only for now.",
        next: "escape",
        effects: { power: -2 },
      },
    ],
  },
  stairwell: {
    chapter: "Session 04",
    title: "The Stairwell Down",
    characterName: "Patient 09",
    art: String.raw`
          down
        ______
       |      |
       |______|
          down
       |______|
          down
    `,
    text: "The stairs descend farther than the building should allow. Above you, someone wearing your shoes begins walking down one flight behind.",
    choices: [
      {
        label: "Wait for the footsteps",
        detail: "Meet what has been following you.",
        next: "double",
        effects: { trust: 1 },
      },
      {
        label: "Keep descending",
        detail: "Reach the treatment room before it catches up.",
        next: "basement",
        effects: { power: -1 },
      },
    ],
  },
  basement: {
    chapter: "Final Session",
    title: "Treatment Room B",
    characterName: "Dr. Vale",
    art: String.raw`
       ______________________
      |  CHAIR      SCREEN   |
      |   ||        [    ]   |
      |   ||                 |
      |___||_________________|
          the straps are warm
    `,
    text: "The treatment room is waiting, straps open like hands. Dr. Vale's voice comes through the wall: 'One memory is yours. One was planted. Choose which one survives.'",
    choices: [
      {
        label: "Keep the painful memory",
        detail: "Choose truth, even if it keeps hurting.",
        next: "endingTruth",
      },
      {
        label: "Accept the planted memory",
        detail: "Choose peace, even if it belongs to someone else.",
        next: "endingQuiet",
      },
    ],
  },
  double: {
    chapter: "Final Session",
    title: "The Other Patient",
    characterName: "The Double",
    art: String.raw`
       you     you
       | |     | |
       |_|     |_|
        \       /
         \_____/
       only one leaves
    `,
    text: "The person behind you has your face and your missing years. They ask softly, 'Are you the patient, or the symptom?'",
    choices: [
      {
        label: "Let the double leave",
        detail: "Stay behind and become the thing that remembers.",
        next: "endingDouble",
      },
      {
        label: "Lock the double in",
        detail: "Escape, knowing it will keep calling your name.",
        next: "endingEscape",
      },
    ],
  },
  escape: {
    chapter: "Ending",
    title: "No Discharge",
    characterName: "Patient 09",
    art: String.raw`
        EXIT
      __====__
     /  __   \
    /__/  \___\
       locked
       inside
    `,
    text: "You find the exit, but the sign is painted on a wall. Behind you, the recorder starts session one again.",
    choices: [],
    ending: true,
  },
  endingTruth: {
    chapter: "Ending",
    title: "The Honest Scar",
    characterName: "Patient 09",
    art: String.raw`
      MEMORY RESTORED
      PAIN: CONFIRMED
      SELF: UNSTABLE
    `,
    text: "You keep the painful memory. It does not free you, but it becomes yours again. The ward goes silent because it can no longer tell the story for you.",
    choices: [],
    ending: true,
  },
  endingQuiet: {
    chapter: "Ending",
    title: "Soft White Room",
    characterName: "Dr. Vale",
    art: String.raw`
       sleep schedule normal
       affect stable
       memory compliant
    `,
    text: "You accept the gentle memory. Morning arrives clean and false. Somewhere under your tongue, the real name keeps trying to bleed through.",
    choices: [],
    ending: true,
  },
  endingDouble: {
    chapter: "Ending",
    title: "The Symptom Remains",
    characterName: "The Double",
    art: String.raw`
      SUBJECT RELEASED
      SYMPTOM CONTAINED
      DO NOT ENTER 6B
    `,
    text: "The double walks out wearing your life. You stay in the ward, listening through the walls, learning how to sound like everyone who gets lost here.",
    choices: [],
    ending: true,
  },
  endingEscape: {
    chapter: "Ending",
    title: "Recovered",
    characterName: "Patient 09",
    art: String.raw`
      DISCHARGE APPROVED
      FOLLOW-UP REQUIRED
      DO NOT ANSWER TAPES
    `,
    text: "You leave the ward before dawn. At home, every mirror is turned to the wall, but each one still knows where you are standing.",
    choices: [],
    ending: true,
  },
};

const state = {
  currentScene: "start",
  power: 3,
  trust: 1,
  clue: 0,
  insanity: 0,
  intel: 1,
  history: [],
};

const chapterLabel = document.querySelector("#chapterLabel");
const sceneTitle = document.querySelector("#sceneTitle");
const sceneArt = document.querySelector("#sceneArt");
const characterSprite = document.querySelector("#characterSprite");
const pixelPlaceholder = document.querySelector("#pixelPlaceholder");
const characterName = document.querySelector("#characterName");
const storyText = document.querySelector("#storyText");
const choices = document.querySelector("#choices");
const powerValue = document.querySelector("#powerValue");
const trustValue = document.querySelector("#trustValue");
const clueValue = document.querySelector("#clueValue");
const insanityValue = document.querySelector("#insanityValue");
const intelValue = document.querySelector("#intelValue");
const historyList = document.querySelector("#historyList");
const resetButton = document.querySelector("#resetButton");
const locationLabel = document.querySelector("#locationLabel");
const sceneCounter = document.querySelector("#sceneCounter");
const doorButton = document.querySelector("#doorButton");
const interactionPrompt = document.querySelector("#interactionPrompt");
const fpsCounter = document.querySelector("#fpsCounter");
const timeDisplay = document.querySelector("#timeDisplay");

function renderScene() {
  const scene = scenes[state.currentScene];

  chapterLabel.textContent = scene.chapter;
  sceneTitle.textContent = scene.title;
  sceneArt.textContent = scene.art.trim();
  characterName.textContent = scene.characterName || "Patient 09";
  locationLabel.textContent = getLocationLabel(scene);
  sceneCounter.textContent = String(Object.keys(scenes).indexOf(state.currentScene) + 1).padStart(2, "0");
  renderCharacter(scene);
  storyText.textContent = getSceneText(scene);

  powerValue.textContent = state.power;
  trustValue.textContent = state.trust;
  clueValue.textContent = state.clue;
  insanityValue.textContent = state.insanity;
  intelValue.textContent = state.intel;

  historyList.innerHTML = state.history
    .map((item) => `<li>${item}</li>`)
    .join("");

  choices.innerHTML = "";
  updateDoorPrompt(scene);

  if (scene.ending) {
    const endingButton = document.createElement("button");
    endingButton.className = "choice-button";
    endingButton.type = "button";
    endingButton.innerHTML = "<strong>Begin again</strong><span>Return to session one.</span>";
    endingButton.addEventListener("click", resetGame);
    choices.append(endingButton);
    return;
  }

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.innerHTML = `<strong>${choice.label}</strong><span>${choice.detail}</span>`;
    button.addEventListener("click", () => choosePath(choice));
    choices.append(button);
  });
}

function updateDoorPrompt(scene) {
  const firstChoice = scene.choices[0];

  if (!firstChoice) {
    interactionPrompt.innerHTML = "<span></span><p>Press <strong>Enter</strong><br>to begin again</p>";
    doorButton.setAttribute("aria-label", "Begin again");
    return;
  }

  interactionPrompt.innerHTML = `<span></span><p>${firstChoice.label}<br>Press <strong>Enter</strong></p>`;
  doorButton.setAttribute("aria-label", firstChoice.label);
}

function getLocationLabel(scene) {
  const cleanChapter = scene.chapter.replace("Session ", "Floor ");

  if (scene.chapter === "Ending") {
    return "Discharge corridor";
  }

  if (scene.chapter === "Final Session") {
    return "Lower ward treatment room";
  }

  return `${cleanChapter}, ${scene.title}`;
}

function renderCharacter(scene) {
  if (scene.characterImage) {
    characterSprite.src = scene.characterImage;
    characterSprite.alt = scene.characterName || "Character portrait";
    characterSprite.classList.remove("is-hidden");
    pixelPlaceholder.classList.add("is-hidden");
    return;
  }

  characterSprite.removeAttribute("src");
  characterSprite.alt = "";
  characterSprite.classList.add("is-hidden");
  pixelPlaceholder.classList.remove("is-hidden");
}

function getSceneText(scene) {
  if (scene.ending && state.power <= 0) {
    return `${scene.text} You have no nerve left, so the final words arrive in someone else's handwriting.`;
  }

  if (scene.ending && state.clue >= 3) {
    return `${scene.text} Because you gathered enough fragments, the hidden version of events stays visible.`;
  }

  if (scene.ending && state.trust >= 3) {
    return `${scene.text} Because doubt took root, the ward cannot fully convince you this is over.`;
  }

  return scene.text;
}

function choosePath(choice) {
  applyEffects(choice.effects);
  state.history.push(choice.label);
  state.currentScene = choice.next;
  renderScene();
}

function applyEffects(effects = {}) {
  state.power = Math.max(0, state.power + (effects.power || 0));
  state.trust = Math.max(0, state.trust + (effects.trust || 0));
  state.clue = Math.max(0, state.clue + (effects.clue || 0));
  state.insanity = Math.max(0, state.insanity + (effects.insanity || 0));
  state.intel = Math.max(0, state.intel + (effects.intel || 0));
}

function resetGame() {
  state.currentScene = "start";
  state.power = 3;
  state.trust = 1;
  state.clue = 0;
  state.insanity = 0;
  state.intel = 1;
  state.history = [];
  renderScene();
}

resetButton.addEventListener("click", resetGame);
doorButton.addEventListener("click", activatePrimaryAction);
document.addEventListener("keydown", (event) => {
  const focusedButton = event.target instanceof HTMLElement && event.target.closest("button");

  if (event.key === "Enter" && !focusedButton) {
    event.preventDefault();
    activatePrimaryAction();
  }
});

function activatePrimaryAction() {
  const scene = scenes[state.currentScene];
  const firstChoice = scene.choices[0];

  if (firstChoice) {
    choosePath(firstChoice);
    return;
  }

  resetGame();
}

renderScene();

// FPS Counter
let frameCount = 0;
let lastTime = performance.now();

function updateFPS() {
  const currentTime = performance.now();
  frameCount++;

  if (currentTime - lastTime >= 1000) {
    fpsCounter.textContent = `${frameCount} FPS`;
    frameCount = 0;
    lastTime = currentTime;
  }

  requestAnimationFrame(updateFPS);
}

requestAnimationFrame(updateFPS);

// Time Display
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  timeDisplay.textContent = `${displayHours}:${minutes} ${ampm}`;
}

updateTime();
setInterval(updateTime, 60000);
