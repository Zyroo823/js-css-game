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
  { id: "dossier", name: "Confidential Dossier", desc: "Dr. Vale's clinical notes on memory duplication.", usable: false },
  { id: "tape", name: "Tape 09 Reel", desc: "Magnetic audio spool containing Patient 09's intake testimony.", usable: false },
];

const state = {
  currentScene: "start",
  previousScene: "start",
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
  userInteracted: false,
  previousInsanity: 0,
  previousPower: 3,
  inventory: [...defaultItems],
  unlockedEndings: JSON.parse(localStorage.getItem("ward_unlocked_endings") || "[]"),
  discoveredHotspots: JSON.parse(localStorage.getItem("ward_hotspots") || "[]"),
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
const storyConsole = document.querySelector(".story-console");
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
const playfieldArea = document.querySelector("#playfieldArea");
const flashlightOverlay = document.querySelector("#flashlightOverlay");
const insanitySpook = document.querySelector("#insanitySpook");

// Hotspot DOM Elements
const hotspotWindow1 = document.querySelector("#hotspotWindow1");
const hotspotWindow2 = document.querySelector("#hotspotWindow2");
const hotspotScratch = document.querySelector("#hotspotScratch");
const hotspotFloor = document.querySelector("#hotspotFloor");
const hotspotPatient = document.querySelector("#hotspotPatient");

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

// ==========================================
// 1. PROCEDURAL WEB AUDIO HORROR ENGINE
// ==========================================
let audioCtx = null;
let droneGain = null;
let droneOsc1 = null;
let droneOsc2 = null;
let staticNode = null;
let staticGain = null;
let heartbeatInterval = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function initProceduralAudio() {
  if (!state.audioEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  // 1. Low Horror Drone
  if (!droneGain) {
    try {
      droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.06, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(120, ctx.currentTime);

      droneOsc1 = ctx.createOscillator();
      droneOsc1.type = "sawtooth";
      droneOsc1.frequency.setValueAtTime(43.65, ctx.currentTime); // F1

      droneOsc2 = ctx.createOscillator();
      droneOsc2.type = "sine";
      droneOsc2.frequency.setValueAtTime(46.25, ctx.currentTime); // Slight dissonance beat

      droneOsc1.connect(filter);
      droneOsc2.connect(filter);
      filter.connect(droneGain);
      droneGain.connect(ctx.destination);

      droneOsc1.start();
      droneOsc2.start();
    } catch (e) {
      console.log("Drone init:", e);
    }
  }

  // 2. Analog Tape Static / Insanity Hiss
  if (!staticGain) {
    try {
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = "bandpass";
      bandpass.frequency.setValueAtTime(1000, ctx.currentTime);
      bandpass.Q.setValueAtTime(1.5, ctx.currentTime);

      staticGain = ctx.createGain();
      updateSanityStaticLevel();

      whiteNoise.connect(bandpass);
      bandpass.connect(staticGain);
      staticGain.connect(ctx.destination);
      whiteNoise.start();
    } catch (e) {
      console.log("Static init:", e);
    }
  }

  updateHeartbeatRate();
}

function updateSanityStaticLevel() {
  if (!staticGain || !audioCtx) return;
  const targetGain = state.insanity * 0.025;
  staticGain.gain.setTargetAtTime(targetGain, audioCtx.currentTime, 0.5);
}

function playHeartbeatThump() {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    // Dual beat: lub-dub
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(55, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);

    // Second faint thump
    setTimeout(() => {
      if (!state.audioEnabled || !audioCtx) return;
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(50, audioCtx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(28, audioCtx.currentTime + 0.1);

      gain2.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start();
      osc2.stop(audioCtx.currentTime + 0.1);
    }, 140);
  } catch (e) {}
}

function updateHeartbeatRate() {
  if (heartbeatInterval) clearInterval(heartbeatInterval);
  if (!state.audioEnabled) return;

  // Rate accelerates as nerve drops
  let bpmInterval = 1600; // 3 nerve: calm 38 bpm
  if (state.power === 2) bpmInterval = 1100;
  if (state.power === 1) bpmInterval = 650; // 92 bpm panic
  if (state.power <= 0) bpmInterval = 420; // 142 bpm terror

  heartbeatInterval = setInterval(playHeartbeatThump, bpmInterval);
}

function playDissonantStab() {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const freqs = [220, 233.08, 311.13, 440]; // Dissonant cluster
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = idx % 2 === 0 ? "sawtooth" : "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.8, ctx.currentTime + 0.6);

      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    });
  } catch (e) {}
}

function playTypewriterTick() {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1400 + Math.random() * 400, ctx.currentTime);
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.015);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.015);
  } catch (e) {}
}

function playClickSound() {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(750, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch (e) {}
}

function playFootstepSound() {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(110, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.07);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.07);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.07);
  } catch (e) {}
}

function playDoorSound() {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(48, ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {}
}

function playStatSound(isPositive) {
  if (!state.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
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
  } catch (e) {}
}

// Fallback soundtrack
let mainMusicAudio = null;
let dangerSoundAudio = null;
let mainMusicWasPlaying = false;
let dangerSoundCooldown = false;

function playMainMusic() {
  if (!state.audioEnabled || !state.userInteracted) return;
  initProceduralAudio();
  try {
    if (!mainMusicAudio) {
      mainMusicAudio = new Audio("assets/sounds/mainSound.wav");
      mainMusicAudio.loop = true;
      mainMusicAudio.volume = 0.25;
    }
    mainMusicAudio.play().catch(() => {});
  } catch (e) {}
}

function pauseMainMusic() {
  if (mainMusicAudio && !mainMusicAudio.paused) {
    mainMusicWasPlaying = true;
    mainMusicAudio.pause();
  } else {
    mainMusicWasPlaying = false;
  }
}

function resumeMainMusic() {
  if (mainMusicAudio && mainMusicWasPlaying && state.audioEnabled && state.userInteracted) {
    mainMusicAudio.play().catch(() => {});
    mainMusicWasPlaying = false;
  }
}

function playDangerSound() {
  if (!state.audioEnabled) return;
  if (!state.userInteracted) return;
  if (dangerSoundCooldown) return;
  // Don't play if already playing
  if (dangerSoundAudio && !dangerSoundAudio.paused) return;

  dangerSoundCooldown = true;

  // Pause main music when danger sound plays
  pauseMainMusic();

  if (dangerSoundAudio) {
    dangerSoundAudio.pause();
    dangerSoundAudio.currentTime = 0;
  }

  dangerSoundAudio = new Audio("assets/sounds/DangerNotifSound.wav");
  dangerSoundAudio.volume = 0.5;

  dangerSoundAudio.addEventListener('ended', function() {
    // Resume main music when danger sound ends
    resumeMainMusic();
    dangerSoundCooldown = false;
  });

  dangerSoundAudio.play().catch(() => {
    dangerSoundCooldown = false;
  });
}

function stopAllAudio() {
  if (mainMusicAudio) mainMusicAudio.pause();
  if (dangerSoundAudio) {
    dangerSoundAudio.pause();
    dangerSoundAudio.currentTime = 0;
  }
  if (heartbeatInterval) clearInterval(heartbeatInterval);
  if (droneGain) droneGain.gain.setValueAtTime(0, audioCtx.currentTime);
  if (staticGain) staticGain.gain.setValueAtTime(0, audioCtx.currentTime);
}

// ==========================================
// 2. SANITY & HALLUCINATION ENGINE
// ==========================================
const hallucinationPhrases = [
  "[DON'T LOOK BEHIND YOU]",
  "[NOT YOUR REAL FACE]",
  "[DR VALE RECORDED YOUR DEATH]",
  "[SUBJECT 09 CEASED FUNCTION 2004]",
  "[THE DOOR DOES NOT LEAD OUT]",
  "[HE IS SMILING AT YOU]",
];

function triggerHallucination() {
  if (insanitySpook) {
    insanitySpook.classList.remove("active");
    void insanitySpook.offsetWidth; // Reflow
    insanitySpook.classList.add("active");
  }

  document.body.classList.add("screen-tremor");
  setTimeout(() => {
    document.body.classList.remove("screen-tremor");
  }, 400);

  playDissonantStab();

  // Momentary phrase glitch in story text
  if (storyText && typewriterCurrentFullText) {
    const randomPhrase = hallucinationPhrases[Math.floor(Math.random() * hallucinationPhrases.length)];
    const words = typewriterCurrentFullText.split(" ");
    const glitchIdx = Math.floor(Math.random() * Math.max(1, words.length - 2));
    words[glitchIdx] = `<span style="color:#ff3b47; font-weight:bold; text-shadow:0 0 8px #ff0055;">${randomPhrase}</span>`;
    storyText.innerHTML = words.join(" ");

    setTimeout(() => {
      if (storyText) storyText.textContent = typewriterCurrentFullText;
    }, 1800);
  }
}

// ==========================================
// 3. TYPEWRITER TEXT REVEAL ENGINE
// ==========================================
let typewriterTimer = null;
let typewriterCurrentFullText = "";
let isTypingActive = false;

function renderStoryTypewriter(fullText) {
  if (typewriterTimer) clearInterval(typewriterTimer);
  typewriterCurrentFullText = fullText;
  storyText.textContent = "";
  storyText.classList.add("story-typing");
  isTypingActive = true;

  let charIndex = 0;
  const speed = 18; // ms per char

  typewriterTimer = setInterval(() => {
    if (charIndex < fullText.length) {
      storyText.textContent += fullText.charAt(charIndex);
      if (charIndex % 3 === 0) playTypewriterTick();
      charIndex++;
    } else {
      completeTypewriter();
    }
  }, speed);
}

function completeTypewriter() {
  if (typewriterTimer) clearInterval(typewriterTimer);
  storyText.textContent = typewriterCurrentFullText;
  storyText.classList.remove("story-typing");
  isTypingActive = false;
}

storyConsole.addEventListener("click", () => {
  if (isTypingActive) {
    completeTypewriter();
  }
});

// ==========================================
// 4. FLASHLIGHT & PLAYFIELD HOTSPOTS
// ==========================================
if (playfieldArea) {
  playfieldArea.addEventListener("mousemove", (e) => {
    const rect = playfieldArea.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    playfieldArea.style.setProperty("--flash-x", `${x}%`);
    playfieldArea.style.setProperty("--flash-y", `${y}%`);
  });

  playfieldArea.addEventListener("touchmove", (e) => {
    if (e.touches[0]) {
      const rect = playfieldArea.getBoundingClientRect();
      const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
      const y = ((e.touches[0].clientY - rect.top) / rect.height) * 100;
      playfieldArea.style.setProperty("--flash-x", `${x}%`);
      playfieldArea.style.setProperty("--flash-y", `${y}%`);
    }
  });
}

function handleHotspotClick(hotspotId) {
  playClickSound();
  let title = "Inspection";
  let content = "";

  if (hotspotId === "window1") {
    title = "Observation Window [Bars]";
    content = `
      <p>Cold moonlight pours through the iron bars. Outside, the pine trees of the asylum grounds are frozen in heavy fog.</p>
      <p>You count 14 bars—one for each year you cannot seem to remember.</p>
    `;
    if (!state.discoveredHotspots.includes("window1")) {
      state.discoveredHotspots.push("window1");
      state.intel += 1;
      intelValue.textContent = state.intel;
      showToast("🔍 Discovered: Window Count (+1 Wit)");
      playStatSound(true);
    }
  } else if (hotspotId === "window2") {
    title = "Fogged Glass Pane";
    content = `
      <p>You wipe condensation off the chilled glass. On the exterior reflection, a silhouette wearing your exact hospital gown turns away into the corridor shadows.</p>
    `;
    if (!state.discoveredHotspots.includes("window2")) {
      state.discoveredHotspots.push("window2");
      state.trust += 1;
      state.clue += 1;
      trustValue.textContent = state.trust;
      clueValue.textContent = state.clue;
      showToast("🔍 Discovered: Fogged Reflection (+1 Doubt, +1 Fragment)");
      playStatSound(true);
    }
  } else if (hotspotId === "scratch") {
    title = "Wall Carvings [6B]";
    content = `
      <p>Nail scratches gouged deep into the plaster: <em>'DAY 489 - DR VALE RECORDED MY SLEEP'</em>.</p>
      <p>A cipher sequence is carved near the base: <strong>[CODE 6B-09]</strong>.</p>
    `;
    if (!state.discoveredHotspots.includes("scratch")) {
      state.discoveredHotspots.push("scratch");
      state.intel += 1;
      intelValue.textContent = state.intel;
      showToast("📋 Discovered: Scratched Room Code (+1 Wit)");
      playStatSound(true);
    }
  } else if (hotspotId === "floor") {
    title = "Stained Linoleum Floor";
    content = `
      <p>Dark oxidized stains are embedded between the tile seams. Underneath the loose corner of one tile, you feel a folded parchment slip.</p>
    `;
    if (!state.discoveredHotspots.includes("floor")) {
      state.discoveredHotspots.push("floor");
      state.clue += 1;
      clueValue.textContent = state.clue;
      showToast("📄 Discovered: Concealed Slip (+1 Fragment)");
      playStatSound(true);
    }
  } else if (hotspotId === "patient") {
    title = "Patient 09 [Self Examination]";
    content = `
      <p><strong>Heart Rate:</strong> ${state.power <= 1 ? "Erratic (High Distress)" : "Strained (Guarded)"}</p>
      <p><strong>Nerve Level:</strong> ${state.power} / 3 | <strong>Madness:</strong> ${state.insanity}</p>
      <p><em>"My fingers feel numb, but I must find the exit before the session tape finishes rewinding."</em></p>
    `;
  }

  localStorage.setItem("ward_hotspots", JSON.stringify(state.discoveredHotspots));
  openModal(title, content);
}

if (hotspotWindow1) hotspotWindow1.addEventListener("click", () => handleHotspotClick("window1"));
if (hotspotWindow2) hotspotWindow2.addEventListener("click", () => handleHotspotClick("window2"));
if (hotspotScratch) hotspotScratch.addEventListener("click", () => handleHotspotClick("scratch"));
if (hotspotFloor) hotspotFloor.addEventListener("click", () => handleHotspotClick("floor"));
if (hotspotPatient) hotspotPatient.addEventListener("click", () => handleHotspotClick("patient"));

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

// ==========================================
// RENDER SCENE
// ==========================================
function renderScene() {
  const scene = scenes[state.currentScene];

  chapterLabel.textContent = scene.chapter;
  sceneTitle.textContent = scene.title;
  sceneArt.textContent = scene.art.trim();
  characterName.textContent = scene.characterName || "Patient 09";
  locationLabel.textContent = getLocationLabel(scene);
  sceneCounter.textContent = String(Object.keys(scenes).indexOf(state.currentScene) + 1).padStart(2, "0");
  renderCharacter(scene);

  const fullText = getSceneText(scene);
  renderStoryTypewriter(fullText);

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

  updateSanityStaticLevel();
  updateHeartbeatRate();

  historyList.innerHTML = state.history
    .map((item) => `<li>${item}</li>`)
    .join("");

  choices.innerHTML = "";
  updateDoorPrompt(scene);

  if (scene.ending) {
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
  if (scene.chapter === "Ending") return "Discharge corridor";
  if (scene.chapter === "Final Session") return "Lower ward treatment room";
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
  state.previousScene = state.currentScene;
  state.currentScene = choice.next;
  checkSceneItemDiscovery(choice.next);

  const criticalScenes = ["basement", "double", "stairwell"];
  if (criticalScenes.includes(state.currentScene) && !criticalScenes.includes(state.previousScene)) {
    triggerHallucination();
    playDangerSound();
  }

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
    if (state.previousPower > 1 && state.power <= 1 && effects.power < 0) {
      triggerHallucination();
      playDangerSound();
    }
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
    if (effects.insanity > 0) {
      playStatSound(false);
      if (state.insanity >= 2) {
        triggerHallucination();
        playDangerSound();
      }
    }
  }
  if (effects.intel) {
    state.intel = Math.max(0, state.intel + effects.intel);
    changes.push(`${effects.intel > 0 ? "+" : ""}${effects.intel} Wit`);
    if (effects.intel > 0) playStatSound(true);
  }

  if (changes.length > 0) {
    showToast(`Effect: ${changes.join(", ")}`);
  }

  state.previousPower = state.power;
  state.previousInsanity = state.insanity;
}

function resetGame() {
  state.currentScene = "start";
  state.previousScene = "start";
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
  state.previousInsanity = 0;
  state.previousPower = 3;

  stopAllAudio();
  dangerSoundCooldown = false;
  mainMusicWasPlaying = false;
  if (state.audioEnabled && state.userInteracted) {
    playMainMusic();
  }

  renderScene();
  showToast("Session restarted.");
}

function saveAutoState() {
  const saveData = {
    currentScene: state.currentScene,
    previousScene: state.previousScene,
    power: state.power,
    trust: state.trust,
    clue: state.clue,
    insanity: state.insanity,
    intel: state.intel,
    history: state.history,
    characterX: state.characterX,
    characterY: state.characterY,
    inventory: state.inventory,
    previousInsanity: state.previousInsanity,
    previousPower: state.previousPower,
    timestamp: new Date().toLocaleTimeString(),
  };
  localStorage.setItem("ward_autosave", JSON.stringify(saveData));
}

// ==========================================
// 5. CLASSIFIED EVIDENCE BOOKLET & ARCHIVE
// ==========================================
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

// Case Binder Modal
btnBooklet.addEventListener("click", () => {
  playClickSound();
  renderBookletModal("dossier");
});

function renderBookletModal(activeTab = "dossier") {
  const bookletHTML = `
    <div>
      <div class="binder-tabs">
        <button class="binder-tab-btn ${activeTab === "dossier" ? "active" : ""}" onclick="switchBinderTab('dossier')">1. Case Dossier</button>
        <button class="binder-tab-btn ${activeTab === "tapes" ? "active" : ""}" onclick="switchBinderTab('tapes')">2. Audio Logs</button>
        <button class="binder-tab-btn ${activeTab === "mechanics" ? "active" : ""}" onclick="switchBinderTab('mechanics')">3. Ward Rules</button>
      </div>

      <div class="binder-panel">
        ${activeTab === "dossier" ? renderDossierTab() : ""}
        ${activeTab === "tapes" ? renderTapesTab() : ""}
        ${activeTab === "mechanics" ? renderMechanicsTab() : ""}
      </div>
    </div>
  `;
  openModal("Classified Case Binder: Ward 6B", bookletHTML, btnBooklet);
}

window.switchBinderTab = function (tab) {
  playClickSound();
  renderBookletModal(tab);
};

function renderDossierTab() {
  return `
    <div>
      <p style="color:#ffa4a8; margin:0 0 6px;"><strong>SUBJECT 09 PSYCHIATRIC RECORD</strong></p>
      <p style="font-size:0.84rem; color:#aaa; margin:0 0 12px;">Dr. Sterling Vale, Chief of Observation — St. Agatha Rest Home</p>
      
      <div style="background:#090c0f; border:1px solid #232c38; padding:12px; border-radius:4px; font-size:0.85rem; line-height:1.55;">
        <p><strong>Admitted:</strong> October 14, 2004</p>
        <p><strong>Primary Symptoms:</strong> Spontaneous memory replication, sleepwalking into mirrors, inability to distinguish authentic childhood memories from planted clinical prompts.</p>
        <p><strong>Session 09 Note:</strong> <em>"The subject's nerve is deteriorating. When we attempt to remove the planted memory, the authentic memory attempts to replicate it. Both voices sound identical on playback."</em></p>
      </div>
    </div>
  `;
}

function renderTapesTab() {
  return `
    <div>
      <p style="color:#ffa4a8; margin:0 0 8px;"><strong>REEL-TO-REEL EVIDENCE ARCHIVE</strong></p>
      
      <div class="tape-player-widget">
        <div class="tape-info">
          <strong>Tape 01: Initial Intake (03:17 AM)</strong>
          <small>"State your name for the record." — "I have two names now."</small>
        </div>
        <button class="modal-action-btn" onclick="playTapePreview(1)">▶ Play Audio</button>
      </div>

      <div class="tape-player-widget">
        <div class="tape-info">
          <strong>Tape 04: The Mirror Session</strong>
          <small>"Look at the glass, Patient 09. Who is smiling first?"</small>
        </div>
        <button class="modal-action-btn" onclick="playTapePreview(4)">▶ Play Audio</button>
      </div>

      <div class="tape-player-widget">
        <div class="tape-info">
          <strong>Tape 09: Extraction Failure</strong>
          <small>"The straps are open... Dr. Vale, where did you go?"</small>
        </div>
        <button class="modal-action-btn" onclick="playTapePreview(9)">▶ Play Audio</button>
      </div>
    </div>
  `;
}

window.playTapePreview = function (tapeNum) {
  playClickSound();
  playDissonantStab();
  showToast(`📼 Playing Reel Log 0${tapeNum}...`);
};

function renderMechanicsTab() {
  return `
    <div>
      <h4 style="color:#e5bd67; margin-top:0;">TELEMETRY METRICS GUIDE</h4>
      <ul style="padding-left: 20px; line-height: 1.6; font-size: 0.86rem;">
        <li><strong style="color:#ff6b72;">Nerve (Health):</strong> Your psychological resilience against panic. Drops trigger rapid heartbeats and narrative delirium.</li>
        <li><strong style="color:#5ce3b3;">Doubt (Vision):</strong> Skepticism toward asylum illusions. High doubt unlocks concealed truths in endings.</li>
        <li><strong style="color:#f770c6;">Madness (Insanity):</strong> Accumulated through traumatic encounters. High madness induces reality glitches and static.</li>
        <li><strong style="color:#f3d47d;">Wit (Intel):</strong> Comprehension of Dr. Vale's ciphers and ward navigation.</li>
      </ul>
    </div>
  `;
}

// Items Modal
btnItems.addEventListener("click", () => {
  playClickSound();
  renderItemsModal();
});

function renderItemsModal() {
  let itemsHTML = `<div class="modal-grid">`;
  state.inventory.forEach((item) => {
    let canUse = item.usable && item.count > 0;
    itemsHTML += `
      <div class="modal-item-card">
        <div class="modal-item-info">
          <strong>${item.name} ${item.count ? `(x${item.count})` : ""}</strong>
          <p>${item.desc}</p>
        </div>
        ${
          item.usable
            ? `<button class="modal-action-btn" onclick="useItem('${item.id}')" ${!canUse ? "disabled" : ""}>Use Item</button>`
            : `<span style="font-size:0.75rem; color:#777;">Key Item</span>`
        }
      </div>
    `;
  });
  itemsHTML += `</div>`;
  openModal("Inventory & Evidence Items", itemsHTML, btnItems);
}

window.useItem = function (itemId) {
  playClickSound();
  const item = state.inventory.find((i) => i.id === itemId);
  if (item && item.id === "draught" && item.count > 0) {
    item.count--;
    state.power += 1;
    powerValue.textContent = state.power;
    playStatSound(true);
    updateHeartbeatRate();
    showToast("🧪 Consumed Nerve Draught (+1 Nerve)");
    renderItemsModal();
  }
};

btnPosition.addEventListener("click", () => {
  playClickSound();
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
      <p style="color:#aaa; font-size:0.85rem;">Coordinates: X=${Math.round(state.characterX)}%, Y=${Math.round(state.characterY)}px</p>
    </div>
  `;
  openModal("Ward Map & Navigation", posHTML, btnPosition);
});

btnHints.addEventListener("click", () => {
  playClickSound();
  let hintMsg = "Examine the playfield closely with your flashlight beam. Click on windows, scratch marks, or the floor to uncover hidden fragments.";
  if (state.power <= 1) {
    hintMsg = "⚠️ Your Nerve is critically low (1)! Check your Items to see if you can consume a Nerve Draught, or choose options that avoid physical struggle.";
  } else if (state.clue === 0) {
    hintMsg = "🔍 You have not found any Fragments yet. Click on the barred windows and scratched walls in the playfield.";
  } else if (state.insanity >= 2) {
    hintMsg = "👁️ Your Madness is rising. Screen tremors indicate proximity to the final treatment chambers.";
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
    previousScene: state.previousScene,
    power: state.power,
    trust: state.trust,
    clue: state.clue,
    insanity: state.insanity,
    intel: state.intel,
    history: state.history,
    characterX: state.characterX,
    characterY: state.characterY,
    inventory: state.inventory,
    previousInsanity: state.previousInsanity,
    previousPower: state.previousPower,
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
    state.previousScene = data.previousScene || data.currentScene;
    state.power = data.power;
    state.trust = data.trust;
    state.clue = data.clue;
    state.insanity = data.insanity;
    state.intel = data.intel;
    state.history = data.history || [];
    state.characterX = data.characterX || 42;
    state.characterY = data.characterY || 76;
    state.previousInsanity = data.insanity;
    state.previousPower = data.power;
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

  state.userInteracted = true;

  if (state.audioEnabled) {
    playMainMusic();
  } else {
    stopAllAudio();
    // Reset danger sound state
    dangerSoundCooldown = false;
    mainMusicWasPlaying = false;
  }

  if (!gameModal.classList.contains("is-hidden")) {
    closeModal();
  }
}

window.toggleAudioState = toggleAudioState;

window.clearAllData = function () {
  if (confirm("Are you sure you want to clear all saves and gallery unlocks?")) {
    localStorage.clear();
    state.unlockedEndings = [];
    state.discoveredHotspots = [];
    resetGame();
    showToast("All saved data cleared.");
    closeModal();
  }
};

// First interaction listener for Web Audio API
function handleFirstInteraction() {
  if (!state.userInteracted) {
    state.userInteracted = true;
    if (state.audioEnabled) {
      playMainMusic();
    }
  }
}

document.addEventListener("click", handleFirstInteraction, { once: true });
document.addEventListener("keydown", handleFirstInteraction, { once: true });

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

// Keyboard System
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

    if (event.key.toLowerCase() === "i") btnItems.click();
    else if (event.key.toLowerCase() === "p") btnPosition.click();
    else if (event.key.toLowerCase() === "b") btnBooklet.click();
    else if (event.key === "?" || event.key.toLowerCase() === "h") btnHints.click();
    else if (event.key === "$") btnShop.click();
    else if (event.key.toLowerCase() === "g") btnGallery.click();
    else if (event.key.toLowerCase() === "m") btnMore.click();

    if (event.key === "Enter" && !focusedButton) {
      event.preventDefault();
      if (isTypingActive) {
        completeTypewriter();
      } else {
        playDoorSound();
        activatePrimaryAction();
      }
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

// Character loop
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

// Load autosave
const autoDataRaw = localStorage.getItem("ward_autosave");
if (autoDataRaw) {
  try {
    const autoData = JSON.parse(autoDataRaw);
    if (autoData && scenes[autoData.currentScene]) {
      state.currentScene = autoData.currentScene;
      state.previousScene = autoData.previousScene || autoData.currentScene;
      state.power = autoData.power ?? 3;
      state.trust = autoData.trust ?? 1;
      state.clue = autoData.clue ?? 0;
      state.insanity = autoData.insanity ?? 0;
      state.intel = autoData.intel ?? 1;
      state.history = autoData.history || [];
      state.previousInsanity = state.insanity;
      state.previousPower = state.power;
      if (autoData.inventory) state.inventory = autoData.inventory;
    }
  } catch (e) {}
}

renderScene();

// Real-time clock & FPS
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

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  timeDisplay.textContent = `${displayHours}:${minutes} ${ampm}`;
}
updateTime();
setInterval(updateTime, 10000);
