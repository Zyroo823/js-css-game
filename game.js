const scenes = {
  start: {
    chapter: "Session 01",
    title: "The Ward Remembers",
    characterName: "Patient 09",
    characterImage: "assets/characters/standSprite.png",
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
        effects: { power: -1, insanity: 1 },
      },
      {
        label: "Answer the recorder",
        detail: "Let the voice guide the first memory back.",
        next: "recorder",
        effects: { trust: 1, intel: 1 },
      },
    ],
  },
  hall: {
    chapter: "Session 02",
    title: "The Locked Hall",
    characterName: "Patient 09",
    characterImage: "assets/characters/standSprite.png",
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
        effects: { clue: 1, power: -1, insanity: 1 },
      },
      {
        label: "Follow the laugh",
        detail: "Let the sound lead you deeper into the ward.",
        next: "nursery",
        effects: { clue: 1, intel: 1 },
      },
    ],
  },
  recorder: {
    chapter: "Session 02",
    title: "Your Voice On Tape",
    characterName: "The Recorder",
    characterImage: "assets/characters/standSprite.png",
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
        effects: { trust: 1, clue: 1, intel: 1 },
      },
      {
        label: "Accuse the tape of lying",
        detail: "Resist the story, even as doubt grows louder.",
        next: "ink",
        effects: { trust: 1, insanity: 1 },
      },
    ],
  },
  mirror: {
    chapter: "Session 03",
    title: "The Mirror Room",
    characterName: "The Reflection",
    characterImage: "assets/characters/standSprite.png",
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
        effects: { power: -1, insanity: 1 },
      },
      {
        label: "Touch the glass",
        detail: "Let the reflection show you what it remembers.",
        next: "basement",
        effects: { clue: 1, trust: 1, intel: 1 },
      },
    ],
  },
  nursery: {
    chapter: "Session 03",
    title: "The Empty Nursery",
    characterName: "Small Voice",
    characterImage: "assets/characters/standSprite.png",
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
        effects: { power: -1, clue: 1, intel: 1 },
      },
      {
        label: "Take the old name",
        detail: "Let the forgotten self speak.",
        next: "basement",
        effects: { trust: 1, clue: 1, insanity: 1 },
      },
    ],
  },
  file: {
    chapter: "Session 03",
    title: "The Patient File",
    characterName: "Dr. Vale",
    characterImage: "assets/characters/standSprite.png",
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
        effects: { clue: 1, trust: 1, intel: 2 },
      },
      {
        label: "Burn the file",
        detail: "Destroy the record and keep moving.",
        next: "stairwell",
        effects: { power: -1, insanity: 1 },
      },
    ],
  },
  ink: {
    chapter: "Session 03",
    title: "Black Ink",
    characterName: "The Recorder",
    characterImage: "assets/characters/standSprite.png",
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
        effects: { clue: 1, trust: 1, insanity: 1 },
      },
      {
        label: "Run from the room",
        detail: "Keep your hands clean, if only for now.",
        next: "escape",
        effects: { power: -2, intel: 1 },
      },
    ],
  },
  stairwell: {
    chapter: "Session 04",
    title: "The Stairwell Down",
    characterName: "Patient 09",
    characterImage: "assets/characters/standSprite.png",
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
        effects: { trust: 1, intel: 1 },
      },
      {
        label: "Keep descending",
        detail: "Reach the treatment room before it catches up.",
        next: "basement",
        effects: { power: -1, insanity: 1 },
      },
    ],
  },
  basement: {
    chapter: "Final Session",
    title: "Treatment Room B",
    characterName: "Dr. Vale",
    characterImage: "assets/characters/standSprite.png",
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
        effects: { intel: 1 },
      },
      {
        label: "Accept the planted memory",
        detail: "Choose peace, even if it belongs to someone else.",
        next: "endingQuiet",
        effects: { insanity: 1 },
      },
    ],
  },
  double: {
    chapter: "Final Session",
    title: "The Other Patient",
    characterName: "The Double",
    characterImage: "assets/characters/standSprite.png",
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
        effects: { insanity: 2 },
      },
      {
        label: "Lock the double in",
        detail: "Escape, knowing it will keep calling your name.",
        next: "endingEscape",
        effects: { intel: 1 },
      },
    ],
  },
  escape: {
    chapter: "Ending",
    title: "No Discharge",
    characterName: "Patient 09",
    characterImage: "assets/characters/standSprite.png",
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
    endingKey: "ending_no_discharge",
  },
  endingTruth: {
    chapter: "Ending",
    title: "The Honest Scar",
    characterName: "Patient 09",
    characterImage: "assets/characters/standSprite.png",
    art: String.raw`
      MEMORY RESTORED
      PAIN: CONFIRMED
      SELF: UNSTABLE
    `,
    text: "You keep the painful memory. It does not free you, but it becomes yours again. The ward goes silent because it can no longer tell the story for you.",
    choices: [],
    ending: true,
    endingKey: "ending_honest_scar",
  },
  endingQuiet: {
    chapter: "Ending",
    title: "Soft White Room",
    characterName: "Dr. Vale",
    characterImage: "assets/characters/standSprite.png",
    art: String.raw`
       sleep schedule normal
       affect stable
       memory compliant
    `,
    text: "You accept the gentle memory. Morning arrives clean and false. Somewhere under your tongue, the real name keeps trying to bleed through.",
    choices: [],
    ending: true,
    endingKey: "ending_soft_white_room",
  },
  endingDouble: {
    chapter: "Ending",
    title: "The Symptom Remains",
    characterName: "The Double",
    characterImage: "assets/characters/standSprite.png",
    art: String.raw`
      SUBJECT RELEASED
      SYMPTOM CONTAINED
      DO NOT ENTER 6B
    `,
    text: "The double walks out wearing your life. You stay in the ward, listening through the walls, learning how to sound like everyone who gets lost here.",
    choices: [],
    ending: true,
    endingKey: "ending_symptom_remains",
  },
  endingEscape: {
    chapter: "Ending",
    title: "Recovered",
    characterName: "Patient 09",
    characterImage: "assets/characters/standSprite.png",
    art: String.raw`
      DISCHARGE APPROVED
      FOLLOW-UP REQUIRED
      DO NOT ANSWER TAPES
    `,
    text: "You leave the ward before dawn. At home, every mirror is turned to the wall, but each one still knows where you are standing.",
    choices: [],
    ending: true,
    endingKey: "ending_recovered",
  },
};

const defaultItems = [
  { id: "strap", name: "Restraint Strap", desc: "Coarse leather with worn metal buckles from chair 09.", usable: false },
  { id: "draught", name: "Nerve Draught", desc: "A dark glass vial labeled 'Sedative 09'. Consume to restore +1 Nerve.", usable: true, count: 1 },
  { id: "file", name: "Confidential Dossier", desc: "Dr. Vale's confidential notes regarding Patient 09.", usable: false, acquiredAt: "file" },
  { id: "tape", name: "Tape 09 Fragment", desc: "A magnetic tape spool containing recorded confessions.", usable: false, acquiredAt: "recorder" },
];

const state = {
  currentScene: "start",
  power: 3,
  trust: 1,
  clue: 0,
  insanity: 0,
  intel: 1,
  history: [],
  characterX: 42,
  characterY: 76,
  currentSprite: "standSprite.png",
  walkFrame: 0,
  audioEnabled: localStorage.getItem("ward_audio_enabled") !== "false",
  inventory: [...defaultItems],
  unlockedEndings: JSON.parse(localStorage.getItem("ward_unlocked_endings") || "[]"),
};

// DOM Elements
const chapterLabel = document.querySelector("#chapterLabel");
const sceneTitle = document.querySelector("#sceneTitle");
const sceneArt = document.querySelector("#sceneArt");
const characterSprite = document.querySelector("#characterSprite");
const pixelPlaceholder = document.querySelector("#pixelPlaceholder");
const characterName = document.querySelector("#characterName");
const characterStage = document.querySelector(".character-stage");
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

// Buttons & Modals DOM
const btnItems = document.querySelector("#btnItems");
const btnPosition = document.querySelector("#btnPosition");
const btnBooklet = document.querySelector("#btnBooklet");
const btnHints = document.querySelector("#btnHints");
const btnShop = document.querySelector("#btnShop");
const btnExit = document.querySelector("#btnExit");
const btnSavestate = document.querySelector("#btnSavestate");
const btnGallery = document.querySelector("#btnGallery");
const btnMore = document.querySelector("#btnMore");
const btnAudioToggle = document.querySelector("#btnAudioToggle");

const gameModal = document.querySelector("#gameModal");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");
const modalCloseBtn = document.querySelector("#modalCloseBtn");
const toastNotification = document.querySelector("#toastNotification");

let activeModalTrigger = null;

// Sound Engine
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playClickSound() {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) { }
}

function playFootstepSound() {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(110, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.07);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.07);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.07);
  } catch (e) { }
}

function playDoorSound() {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.22);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  } catch (e) { }
}

function playStatSound(isPositive) {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    const startFreq = isPositive ? 320 : 480;
    const endFreq = isPositive ? 640 : 180;
    osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.18);
  } catch (e) { }
}

// Toast Notifications
let toastTimeout = null;
function showToast(message) {
  toastNotification.textContent = message;
  toastNotification.classList.remove("is-hidden");
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastNotification.classList.add("is-hidden");
  }, 3200);
}

// Render Core
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

  // Insanity visual effect
  if (state.insanity >= 2) {
    sceneTitle.classList.add("insanity-glitch");
  } else {
    sceneTitle.classList.remove("insanity-glitch");
  }

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
    // Unlock ending record
    if (scene.endingKey && !state.unlockedEndings.includes(scene.endingKey)) {
      state.unlockedEndings.push(scene.endingKey);
      localStorage.setItem("ward_unlocked_endings", JSON.stringify(state.unlockedEndings));
      showToast(`🏆 Ending Unlocked: ${scene.title}`);
    }

    const endingButton = document.createElement("button");
    endingButton.className = "choice-button";
    endingButton.type = "button";
    endingButton.innerHTML = "<strong>Begin again</strong><span>Return to session one.</span>";
    endingButton.addEventListener("click", () => {
      playClickSound();
      resetGame();
    });
    choices.append(endingButton);
    saveAutoState();
    return;
  }

  scene.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.innerHTML = `<strong>[${index + 1}] ${choice.label}</strong><span>${choice.detail}</span>`;
    button.addEventListener("click", () => {
      playClickSound();
      choosePath(choice);
    });
    choices.append(button);
  });

  saveAutoState();
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
    characterSprite.src = `assets/characters/${state.currentSprite}`;
    characterSprite.alt = scene.characterName || "Character portrait";
    characterSprite.classList.remove("is-hidden");
    pixelPlaceholder.classList.add("is-hidden");
    characterStage.style.left = `${state.characterX}%`;
    characterStage.style.top = `${state.characterY}px`;
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
  checkSceneItemDiscovery(choice.next);
  renderScene();
}

function checkSceneItemDiscovery(sceneKey) {
  if (sceneKey === "file" && !state.inventory.some((i) => i.id === "dossier")) {
    state.inventory.push({
      id: "dossier",
      name: "Confidential Dossier",
      desc: "Dr. Vale's confidential medical notes regarding Patient 09.",
      usable: false,
    });
    showToast("📋 Discovered Key Item: Confidential Dossier");
  } else if (sceneKey === "nursery" && !state.inventory.some((i) => i.id === "nametag")) {
    state.inventory.push({
      id: "nametag",
      name: "Old Name Tag",
      desc: "A faded plastic nursery tag bearing your original name.",
      usable: false,
    });
    showToast("🏷️ Discovered Key Item: Old Name Tag");
  } else if (sceneKey === "mirror" && !state.inventory.some((i) => i.id === "shard")) {
    state.inventory.push({
      id: "shard",
      name: "Mirror Shard",
      desc: "A sharp sliver of reflective silver glass from the observation mirror.",
      usable: false,
    });
    showToast("🪞 Discovered Key Item: Mirror Shard");
  }
}

function applyEffects(effects = {}) {
  let changes = [];

  if (effects.power) {
    state.power = Math.max(0, state.power + effects.power);
    changes.push(`${effects.power > 0 ? "+" : ""}${effects.power} Nerve`);
    playStatSound(effects.power > 0);
  }
  if (effects.trust) {
    state.trust = Math.max(0, state.trust + effects.trust);
    changes.push(`${effects.trust > 0 ? "+" : ""}${effects.trust} Doubt`);
  }
  if (effects.clue) {
    state.clue = Math.max(0, state.clue + effects.clue);
    changes.push(`${effects.clue > 0 ? "+" : ""}${effects.clue} Fragment`);
  }
  if (effects.insanity) {
    state.insanity = Math.max(0, state.insanity + effects.insanity);
    changes.push(`${effects.insanity > 0 ? "+" : ""}${effects.insanity} Madness`);
    if (effects.insanity > 0) playStatSound(false);
  }
  if (effects.intel) {
    state.intel = Math.max(0, state.intel + effects.intel);
    changes.push(`${effects.intel > 0 ? "+" : ""}${effects.intel} Wit`);
    if (effects.intel > 0) playStatSound(true);
  }

  if (changes.length > 0) {
    showToast(`Effect: ${changes.join(", ")}`);
  }
}

function resetGame() {
  state.currentScene = "start";
  state.power = 3;
  state.trust = 1;
  state.clue = 0;
  state.insanity = 0;
  state.intel = 1;
  state.history = [];
  state.characterX = 42;
  state.characterY = 76;
  state.currentSprite = "standSprite.png";
  state.walkFrame = 0;
  state.inventory = JSON.parse(JSON.stringify(defaultItems));
  renderScene();
  showToast("Session restarted.");
}

function saveAutoState() {
  const saveData = {
    currentScene: state.currentScene,
    power: state.power,
    trust: state.trust,
    clue: state.clue,
    insanity: state.insanity,
    intel: state.intel,
    history: state.history,
    characterX: state.characterX,
    characterY: state.characterY,
    inventory: state.inventory,
    timestamp: new Date().toLocaleTimeString(),
  };
  localStorage.setItem("ward_autosave", JSON.stringify(saveData));
}

// Modal Engine
function openModal(titleText, bodyHTML, triggerElement = null) {
  activeModalTrigger = triggerElement || document.activeElement;
  modalTitle.textContent = titleText;
  modalBody.innerHTML = bodyHTML;
  gameModal.classList.remove("is-hidden");
  modalCloseBtn.focus();
}

function closeModal() {
  gameModal.classList.add("is-hidden");
  if (activeModalTrigger && typeof activeModalTrigger.focus === "function") {
    activeModalTrigger.focus();
  }
}

modalCloseBtn.addEventListener("click", () => {
  playClickSound();
  closeModal();
});

gameModal.addEventListener("click", (e) => {
  if (e.target === gameModal) {
    playClickSound();
    closeModal();
  }
});

// Toolbar Item Modals
btnItems.addEventListener("click", () => {
  playClickSound();
  renderItemsModal();
});

function renderItemsModal() {
  const activeScene = scenes[state.currentScene];
  let itemsHTML = `<div class="modal-grid">`;

  // Dynamic inventory items based on progression
  let visibleItems = [...state.inventory];

  visibleItems.forEach((item) => {
    let canUse = item.usable && item.count > 0;
    itemsHTML += `
      <div class="modal-item-card">
        <div class="modal-item-info">
          <strong>${item.name} ${item.count ? `(x${item.count})` : ""}</strong>
          <p>${item.desc}</p>
        </div>
        ${item.usable
        ? `<button class="modal-action-btn" onclick="useItem('${item.id}')" ${!canUse ? "disabled" : ""}>Use Item</button>`
        : `<span style="font-size:0.75rem; color:#666;">Key Item</span>`
      }
      </div>
    `;
  });

  itemsHTML += `</div>`;
  openModal("Inventory & Record Fragments", itemsHTML, btnItems);
}

window.useItem = function (itemId) {
  playClickSound();
  const item = state.inventory.find((i) => i.id === itemId);
  if (item && item.id === "draught" && item.count > 0) {
    item.count--;
    state.power += 1;
    powerValue.textContent = state.power;
    playStatSound(true);
    showToast("🧪 Consumed Nerve Draught (+1 Nerve)");
    renderItemsModal();
  }
};

btnPosition.addEventListener("click", () => {
  playClickSound();
  const scene = scenes[state.currentScene];
  const posHTML = `
    <div style="text-align: center;">
      <p><strong>CURRENT ELEVATION:</strong> Floor 6B, Chamber ${Object.keys(scenes).indexOf(state.currentScene) + 1}</p>
      <div style="padding:16px; background:#000; border:1px solid #333; margin:14px 0; font-family:monospace; color:#49a36f; white-space:pre; line-height:1.2;">
   [ WARD 6B DIAGRAM ]
   ┌───────────────────────┐
   │ [6B-01] Start Chamber │ -> ${state.currentScene === "start" ? "◄ YOU ARE HERE" : "Passed"}
   │ [6B-02] Locked Hall    │ -> ${state.currentScene === "hall" || state.currentScene === "recorder" ? "◄ YOU ARE HERE" : "Visited"}
   │ [6B-03] Observation   │ -> ${["mirror", "nursery", "file", "ink"].includes(state.currentScene) ? "◄ YOU ARE HERE" : "Visited"}
   │ [6B-04] Treatment B   │ -> ${["stairwell", "basement", "double"].includes(state.currentScene) ? "◄ YOU ARE HERE" : "Locked"}
   └───────────────────────┘
      </div>
      <p style="color:#aaa; font-size:0.85rem;">Stage Coordinates: X=${Math.round(state.characterX)}%, Y=${Math.round(state.characterY)}px</p>
    </div>
  `;
  openModal("Ward Map & Navigation", posHTML, btnPosition);
});

btnBooklet.addEventListener("click", () => {
  playClickSound();
  const bookletHTML = `
    <div>
      <h3 style="color:#ff8d8b; margin-top:0;">PATIENT DOSSIER: SUBJECT 09</h3>
      <p><strong>Admitted:</strong> October 14, 2004</p>
      <p><strong>Condition:</strong> Memory duplication, nocturnal fugue, voice mirroring.</p>
      <hr style="border-color:#333; margin:12px 0;">
      <h4 style="color:#e5bd67;">MECHANICS GUIDE:</h4>
      <ul>
        <li><strong>Nerve (Health):</strong> Your psychological resilience. Reaching 0 alters final narrative choices.</li>
        <li><strong>Doubt (Vision):</strong> Measures your skepticism towards the ward's tricks. High doubt reveals alternate truths.</li>
        <li><strong>Madness (Insanity):</strong> Accumulates through traumatic choices. Causes reality distortions.</li>
        <li><strong>Wit (Intel):</strong> Your comprehension of Dr. Vale's records and treatment secrets.</li>
      </ul>
    </div>
  `;
  openModal("Observation Booklet & Rules", bookletHTML, btnBooklet);
});

btnHints.addEventListener("click", () => {
  playClickSound();
  let hintMsg = "Look closely at the choice details before deciding. Every action costs nerve or gains insight.";
  if (state.power <= 1) {
    hintMsg = "⚠️ Your Nerve is critically low (1)! Check your Items to see if you can consume a Nerve Draught, or choose options that avoid physical struggle.";
  } else if (state.clue === 0) {
    hintMsg = "🔍 You have not found any Fragments yet. Look for choices involving files, mirrors, or old name tags.";
  } else if (state.insanity >= 2) {
    hintMsg = "👁️ Your Madness is rising. Some memories you encounter may be illusions planted by the ward.";
  }

  const hintHTML = `
    <div style="padding:14px; background:#1c1314; border:1px solid #7a2225; color:#ffcdd2; border-radius:4px;">
      <p style="margin:0; font-size:0.95rem;"><strong>PSYCHIC HINT:</strong></p>
      <p style="margin:8px 0 0; line-height:1.5;">${hintMsg}</p>
    </div>
  `;
  openModal("Psychological Hint", hintHTML, btnHints);
});

btnShop.addEventListener("click", () => {
  playClickSound();
  renderShopModal();
});

function renderShopModal() {
  const shopHTML = `
    <div>
      <p style="color:#aaa;">Trade your accumulated mental attributes for survival resources in Ward 6B.</p>
      <div class="modal-grid" style="margin-top:14px;">
        <div class="modal-item-card">
          <div class="modal-item-info">
            <strong>Soothe Nerve (+1 Nerve)</strong>
            <p>Exchange 1 Wit to steady your nerves and regain composure.</p>
          </div>
          <button class="modal-action-btn" onclick="tradeShop('nerve')" ${state.intel < 1 ? "disabled" : ""}>Trade (1 Wit)</button>
        </div>
        <div class="modal-item-card">
          <div class="modal-item-info">
            <strong>Clear Doubt (-1 Doubt)</strong>
            <p>Exchange 1 Clue Fragment to regain mental certainty.</p>
          </div>
          <button class="modal-action-btn" onclick="tradeShop('doubt')" ${state.clue < 1 || state.trust <= 0 ? "disabled" : ""}>Trade (1 Fragment)</button>
        </div>
        <div class="modal-item-card">
          <div class="modal-item-info">
            <strong>Channel Insight (+1 Wit)</strong>
            <p>Convert 1 point of Madness into sharp analytical Wit.</p>
          </div>
          <button class="modal-action-btn" onclick="tradeShop('wit')" ${state.insanity < 1 ? "disabled" : ""}>Trade (1 Madness)</button>
        </div>
      </div>
    </div>
  `;
  openModal("Psychological Exchange (Shop)", shopHTML, btnShop);
}

window.tradeShop = function (type) {
  playClickSound();
  if (type === "nerve" && state.intel >= 1) {
    state.intel -= 1;
    state.power += 1;
    showToast("Trade complete: +1 Nerve, -1 Wit");
  } else if (type === "doubt" && state.clue >= 1 && state.trust > 0) {
    state.clue -= 1;
    state.trust -= 1;
    showToast("Trade complete: -1 Doubt, -1 Fragment");
  } else if (type === "wit" && state.insanity >= 1) {
    state.insanity -= 1;
    state.intel += 1;
    showToast("Trade complete: +1 Wit, -1 Madness");
  }
  playStatSound(true);
  renderScene();
  renderShopModal();
};

btnExit.addEventListener("click", () => {
  playClickSound();
  const exitHTML = `
    <div style="text-align:center;">
      <p>Are you sure you want to end this observation session?</p>
      <div style="display:flex; gap:12px; justify-content:center; margin-top:20px;">
        <button class="modal-action-btn" onclick="resetGame(); closeModal();">Restart Session</button>
        <button class="modal-action-btn" style="background:#333; border-color:#555;" onclick="closeModal();">Cancel</button>
      </div>
    </div>
  `;
  openModal("Confirm Exit", exitHTML, btnExit);
});

btnSavestate.addEventListener("click", () => {
  playClickSound();
  renderSavestateModal();
});

function renderSavestateModal() {
  let slotsHTML = `<div><p style="color:#aaa;">Save your current progress state or load a previous checkpoint.</p>`;

  for (let i = 1; i <= 3; i++) {
    const slotKey = `ward_saveslot_${i}`;
    const rawData = localStorage.getItem(slotKey);
    const data = rawData ? JSON.parse(rawData) : null;

    slotsHTML += `
      <div class="save-slot">
        <div>
          <span class="save-slot-title">SLOT 0${i}</span>
          <div class="save-slot-details">
            ${data ? `Scene: ${data.currentScene} | Nerve: ${data.power} | Time: ${data.timestamp}` : "Empty Slot"}
          </div>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="modal-action-btn" onclick="saveToSlot(${i})">Save</button>
          <button class="modal-action-btn" style="background:#224; border-color:#448;" onclick="loadFromSlot(${i})" ${!data ? "disabled" : ""}>Load</button>
        </div>
      </div>
    `;
  }

  slotsHTML += `</div>`;
  openModal("Savestate Checkpoints", slotsHTML, btnSavestate);
}

window.saveToSlot = function (slot) {
  playClickSound();
  const saveData = {
    currentScene: state.currentScene,
    power: state.power,
    trust: state.trust,
    clue: state.clue,
    insanity: state.insanity,
    intel: state.intel,
    history: state.history,
    characterX: state.characterX,
    characterY: state.characterY,
    inventory: state.inventory,
    timestamp: new Date().toLocaleTimeString(),
  };
  localStorage.setItem(`ward_saveslot_${slot}`, JSON.stringify(saveData));
  showToast(`💾 Saved to Slot 0${slot}`);
  renderSavestateModal();
};

window.loadFromSlot = function (slot) {
  playClickSound();
  const rawData = localStorage.getItem(`ward_saveslot_${slot}`);
  if (rawData) {
    const data = JSON.parse(rawData);
    state.currentScene = data.currentScene;
    state.power = data.power;
    state.trust = data.trust;
    state.clue = data.clue;
    state.insanity = data.insanity;
    state.intel = data.intel;
    state.history = data.history || [];
    state.characterX = data.characterX || 42;
    state.characterY = data.characterY || 76;
    if (data.inventory) state.inventory = data.inventory;
    renderScene();
    showToast(`📂 Loaded state from Slot 0${slot}`);
    closeModal();
  }
};

btnGallery.addEventListener("click", () => {
  playClickSound();
  const endingTitles = {
    ending_no_discharge: "No Discharge",
    ending_honest_scar: "The Honest Scar",
    ending_soft_white_room: "Soft White Room",
    ending_symptom_remains: "The Symptom Remains",
    ending_recovered: "Recovered",
  };

  let galleryHTML = `
    <div>
      <p style="color:#aaa;">Discovered Endings (${state.unlockedEndings.length}/5 Unlocked):</p>
      <div class="modal-grid" style="margin-top:12px;">
  `;

  Object.entries(endingTitles).forEach(([key, title]) => {
    const isUnlocked = state.unlockedEndings.includes(key);
    galleryHTML += `
      <div class="modal-item-card">
        <div class="modal-item-info">
          <strong style="color: ${isUnlocked ? "#ff8d8b" : "#666"}">${title}</strong>
          <p>${isUnlocked ? "Unlocked & archived." : "Locked memory path."}</p>
        </div>
        <span style="font-weight:bold; color:${isUnlocked ? "#49a36f" : "#444"};">${isUnlocked ? "✓ UNLOCKED" : "🔒 LOCKED"}</span>
      </div>
    `;
  });

  galleryHTML += `</div></div>`;
  openModal("Ending Gallery & Archives", galleryHTML, btnGallery);
});

btnMore.addEventListener("click", () => {
  playClickSound();
  const moreHTML = `
    <div>
      <h3 style="color:#ff8d8b; margin-top:0;">SYSTEM SETTINGS</h3>
      <div style="display:flex; flex-direction:column; gap:12px;">
        <button class="modal-action-btn" onclick="toggleAudioState()">Toggle Web Audio: ${state.audioEnabled ? "ENABLED" : "MUTED"}</button>
        <button class="modal-action-btn" style="background:#522;" onclick="clearAllData()">Clear All Saved Data</button>
      </div>
    </div>
  `;
  openModal("More Options & Settings", moreHTML, btnMore);
});

btnAudioToggle.textContent = `🔊 Audio: ${state.audioEnabled ? "ON" : "OFF"}`;
btnAudioToggle.addEventListener("click", toggleAudioState);

function toggleAudioState() {
  state.audioEnabled = !state.audioEnabled;
  localStorage.setItem("ward_audio_enabled", state.audioEnabled);
  btnAudioToggle.textContent = `🔊 Audio: ${state.audioEnabled ? "ON" : "OFF"}`;
  showToast(`Audio ${state.audioEnabled ? "Enabled" : "Muted"}`);
  playClickSound();
  if (!gameModal.classList.contains("is-hidden")) {
    closeModal();
  }
}

window.toggleAudioState = toggleAudioState;

window.clearAllData = function () {
  if (confirm("Are you sure you want to clear all saves and gallery unlocks?")) {
    localStorage.clear();
    state.unlockedEndings = [];
    resetGame();
    showToast("All saved data cleared.");
    closeModal();
  }
};

// Event Listeners
resetButton.addEventListener("click", () => {
  playClickSound();
  resetGame();
});

doorButton.addEventListener("click", () => {
  playDoorSound();
  activatePrimaryAction();
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

// Keyboard Input System
const pressedKeys = {};

document.addEventListener("keydown", (event) => {
  const modalOpen = !gameModal.classList.contains("is-hidden");
  const focusedButton = event.target instanceof HTMLElement && event.target.closest("button");
  const isTyping = event.target && (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA");

  if (isTyping) return;

  pressedKeys[event.key] = true;

  if (event.key === "Escape" && modalOpen) {
    closeModal();
    return;
  }

  if (!modalOpen) {
    // Quick choices 1 & 2
    if (event.key === "1") {
      const scene = scenes[state.currentScene];
      if (scene.choices[0]) {
        playClickSound();
        choosePath(scene.choices[0]);
      }
    } else if (event.key === "2") {
      const scene = scenes[state.currentScene];
      if (scene.choices[1]) {
        playClickSound();
        choosePath(scene.choices[1]);
      }
    }

    // Modal Shortcuts
    if (event.key.toLowerCase() === "i") {
      btnItems.click();
    } else if (event.key.toLowerCase() === "p") {
      btnPosition.click();
    } else if (event.key.toLowerCase() === "b") {
      btnBooklet.click();
    } else if (event.key === "?" || event.key.toLowerCase() === "h") {
      btnHints.click();
    } else if (event.key === "$") {
      btnShop.click();
    } else if (event.key.toLowerCase() === "g") {
      btnGallery.click();
    } else if (event.key.toLowerCase() === "m") {
      btnMore.click();
    }

    if (event.key === "Enter" && !focusedButton) {
      event.preventDefault();
      playDoorSound();
      activatePrimaryAction();
    }
  }
});

document.addEventListener("keyup", (event) => {
  pressedKeys[event.key] = false;
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
    if (event.key === "ArrowLeft") {
      state.currentSprite = "sideLeftSprite.png";
    } else if (event.key === "ArrowRight") {
      state.currentSprite = "sideRightSprite.png";
    } else {
      state.currentSprite = "standSprite.png";
    }
    characterSprite.src = `assets/characters/${state.currentSprite}`;
  }
});

// Character Smooth Movement Loop
function startCharacterLoop() {
  let lastWalkTime = 0;

  function loop(now) {
    const moveSpeed = 1.4;
    const scene = scenes[state.currentScene];
    const modalOpen = !gameModal.classList.contains("is-hidden");
    const activeElement = document.activeElement;
    const isTyping = activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA");

    if (scene.characterImage && !modalOpen && !isTyping) {
      let moved = false;
      let newDir = null;

      if (pressedKeys["ArrowLeft"]) {
        state.characterX = Math.max(8, state.characterX - moveSpeed);
        newDir = "left";
        moved = true;
      } else if (pressedKeys["ArrowRight"]) {
        state.characterX = Math.min(82, state.characterX + moveSpeed);
        newDir = "right";
        moved = true;
      }

      if (pressedKeys["ArrowUp"]) {
        state.characterY = Math.max(40, state.characterY - moveSpeed);
        if (!newDir) newDir = "up";
        moved = true;
      } else if (pressedKeys["ArrowDown"]) {
        state.characterY = Math.min(180, state.characterY + moveSpeed);
        if (!newDir) newDir = "down";
        moved = true;
      }

      if (moved) {
        if (now - lastWalkTime > 180) {
          state.walkFrame = (state.walkFrame + 1) % 2;
          lastWalkTime = now;
          playFootstepSound();
        }

        if (newDir === "left") {
          state.currentSprite = state.walkFrame === 0 ? "sideSpriteWalkL.png" : "sideLeftSprite.png";
        } else if (newDir === "right") {
          state.currentSprite = state.walkFrame === 0 ? "sideSpriteWalkR.png" : "sideRightSprite.png";
        } else if (newDir === "up") {
          state.currentSprite = "sideLeftSprite.png";
        } else if (newDir === "down") {
          state.currentSprite = "standSprite.png";
        }

        characterSprite.src = `assets/characters/${state.currentSprite}`;
        characterStage.style.left = `${state.characterX}%`;
        characterStage.style.top = `${state.characterY}px`;
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

startCharacterLoop();

// Try loading existing autosave if available
const autoDataRaw = localStorage.getItem("ward_autosave");
if (autoDataRaw) {
  try {
    const autoData = JSON.parse(autoDataRaw);
    if (autoData && scenes[autoData.currentScene]) {
      state.currentScene = autoData.currentScene;
      state.power = autoData.power ?? 3;
      state.trust = autoData.trust ?? 1;
      state.clue = autoData.clue ?? 0;
      state.insanity = autoData.insanity ?? 0;
      state.intel = autoData.intel ?? 1;
      state.history = autoData.history || [];
      if (autoData.inventory) state.inventory = autoData.inventory;
    }
  } catch (e) { }
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

// Real-time HUD Clock
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  timeDisplay.textContent = `${displayHours}:${minutes} ${ampm}`;
}

updateTime();
setInterval(updateTime, 10000);
