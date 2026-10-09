/**
 * Purple Aesthetics Dino & Boss Battle Game
 * Interactive multi-page experience with Web Audio API synthesizer.
 */

// ==========================================
// 1. Retro Web Audio Synthesizer
// ==========================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playClick() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {}
  }

  playJump() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(620, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (e) {}
  }

  playScore() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now);
      osc.frequency.setValueAtTime(880.00, now + 0.08);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  playHit() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }

  playBoring() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.linearRampToValueAtTime(260, now + 0.15);
      osc.frequency.linearRampToValueAtTime(180, now + 0.35);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {}
  }

  playFanfare() {
    if (!this.enabled || !this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + idx * 0.08;
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.1, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.14);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.14);
      });
    } catch (e) {}
  }

  // Hollow Purple Bomb Sound (Energy blast)
  playPurpleBomb() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(750, now + 0.18);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.28);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {}
  }

  // Fireball Whoosh Sound
  playFireball() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.22);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {}
  }

  // Boss Damage Impact
  playBossHit() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) {}
  }

  // Victory Fanfare
  playVictory() {
    if (!this.enabled || !this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + idx * 0.12;
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.12, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.25);
      });
    } catch (e) {}
  }

  // Cyan Color Bomb Sound (High-energy plasma blast)
  playCyanBomb() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(1480, now + 0.16);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {}
  }

  // Line of Bombs Attack Sound (Heavy descending drop)
  playBombLine() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(360, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.25);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  // Page 6: Nobara's Nails Sound (Metallic clink & dart)
  playNail() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1760, now);
      osc.frequency.exponentialRampToValueAtTime(740, now + 0.12);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  // Page 6: Yuji's Black Bomb Sound (Heavy impact rumble)
  playBlackBomb() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.3);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {}
  }

  // Page 6: Megumi's Divine Dogs Sound (Leap & slash roar)
  playDogs() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.linearRampToValueAtTime(580, now + 0.12);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.28);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {}
  }

  // Page 6: Curse Shadow Sound (Eerie swoosh)
  playCurseShadow() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.35);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  // Page 6: Curse Fire Sound
  playCurseFire() {
    this.playFireball();
  }

  // Page 6: Curse Red Bomb Sound
  playCurseBomb() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(190, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.32);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.32);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);
    } catch (e) {}
  }

  // Page 6: Curse Hit Grunt
  playCurseHit() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.18);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch (e) {}
  }
}

const sound = new SoundFX();

// ==========================================
// 2. Page Navigation Controller
// ==========================================
let currentPage = 1;

function showPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  const target = document.getElementById(`page-${pageNumber}`);
  if (target) {
    target.classList.add('active');
    currentPage = pageNumber;
  }

  if (pageNumber === 3) {
    stopBattleGame();
    stopP5Game();
    if (typeof stopP6Game === 'function') stopP6Game();
    initDinoGame();
  } else if (pageNumber === 4) {
    stopDinoGame();
    stopP5Game();
    if (typeof stopP6Game === 'function') stopP6Game();
    initBattleGame();
  } else if (pageNumber === 5) {
    stopDinoGame();
    stopBattleGame();
    if (typeof stopP6Game === 'function') stopP6Game();
    initP5Game();
  } else if (pageNumber === 6) {
    stopDinoGame();
    stopBattleGame();
    stopP5Game();
    initP6Game();
  } else {
    stopDinoGame();
    stopBattleGame();
    stopP5Game();
    if (typeof stopP6Game === 'function') stopP6Game();
  }
}

// Audio Toggle Button Setup
const audioToggleBtn = document.getElementById('audio-toggle-btn');
const audioIcon = document.getElementById('audio-icon');
const audioText = document.getElementById('audio-text');

audioToggleBtn.addEventListener('click', () => {
  sound.init();
  const isOn = sound.toggle();
  audioIcon.textContent = isOn ? '🔊' : '🔇';
  audioText.textContent = isOn ? 'SOUND ON' : 'MUTED';
  audioToggleBtn.style.opacity = isOn ? '1' : '0.7';
  if (isOn) sound.playClick();
});

// User Interaction to init AudioContext
window.addEventListener('pointerdown', () => sound.init(), { once: true });
window.addEventListener('keydown', () => sound.init(), { once: true });

// ==========================================
// 3. Page 1 & 2 Event Handlers
// ==========================================

// Page 1: Start Button
const btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', () => {
  sound.init();
  sound.playClick();
  showPage(2);
});

// Close button on Page 1 (cute wiggle)
const btnCloseP1 = document.getElementById('btn-close-p1');
btnCloseP1.addEventListener('click', () => {
  sound.playClick();
  const win = document.querySelector('#page-1 .pixel-window');
  win.style.animation = 'none';
  win.offsetHeight; // trigger reflow
  win.style.animation = 'shakeDrop 0.3s ease';
});

// Page 2: YES & NO Buttons
const btnPlayYes = document.getElementById('btn-play-yes');
const btnPlayNo = document.getElementById('btn-play-no');
const modalBoring = document.getElementById('modal-boring');
const btnCloseBoring = document.getElementById('btn-close-boring');
const btnFinePlay = document.getElementById('btn-fine-play');
const btnBackMenu = document.getElementById('btn-back-menu');
const btnCloseP2 = document.getElementById('btn-close-p2');

btnPlayYes.addEventListener('click', () => {
  sound.playFanfare();
  showPage(3);
});

btnPlayNo.addEventListener('click', () => {
  sound.playBoring();
  modalBoring.classList.add('active');
});

btnCloseBoring.addEventListener('click', () => {
  sound.playClick();
  modalBoring.classList.remove('active');
});

btnFinePlay.addEventListener('click', () => {
  sound.playFanfare();
  modalBoring.classList.remove('active');
  showPage(3);
});

btnBackMenu.addEventListener('click', () => {
  sound.playClick();
  modalBoring.classList.remove('active');
  showPage(1);
});

btnCloseP2.addEventListener('click', () => {
  sound.playClick();
  showPage(1);
});

// Page 3, 4 & 5 Header Buttons
document.getElementById('btn-back-to-menu-p3').addEventListener('click', () => {
  sound.playClick();
  showPage(1);
});

const btnSkipToP4 = document.getElementById('btn-skip-to-p4');
if (btnSkipToP4) {
  btnSkipToP4.addEventListener('click', () => {
    sound.playFanfare();
    showPage(4);
  });
}

document.getElementById('btn-back-to-menu-p4').addEventListener('click', () => {
  sound.playClick();
  showPage(1);
});

const btnSkipToP5 = document.getElementById('btn-skip-to-p5');
if (btnSkipToP5) {
  btnSkipToP5.addEventListener('click', () => {
    sound.playFanfare();
    showPage(5);
  });
}

const btnBackToP4 = document.getElementById('btn-back-to-p4');
if (btnBackToP4) {
  btnBackToP4.addEventListener('click', () => {
    sound.playClick();
    showPage(4);
  });
}

// Helper: Render Hearts
function renderHearts(containerId, currentLives, maxLives = 3) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < maxLives; i++) {
    const img = document.createElement('img');
    img.src = 'assets/heart.png';
    img.alt = 'Heart';
    img.className = 'heart-life-icon' + (i >= currentLives ? ' lost' : '');
    container.appendChild(img);
  }
}

// ==========================================
// 4. Page 3 Dino Game Engine (With 3 Lives)
// ==========================================

const dinoCanvas = document.getElementById('game-canvas');
const dinoCtx = dinoCanvas.getContext('2d');

const currentScoreEl = document.getElementById('current-score');
const highScoreEl = document.getElementById('high-score');
const dinoGameOverModal = document.getElementById('game-over-modal');
const btnDinoRetry = document.getElementById('btn-dino-retry');
const btnDinoNext = document.getElementById('btn-dino-next');
const mobileJumpBtn = document.getElementById('mobile-jump');

// Load Dino and Box Image Assets
const dinoImg = new Image();
dinoImg.src = 'assets/dino.png';

const boxImg = new Image();
boxImg.src = 'assets/box.png';

let highScore = parseInt(localStorage.getItem('purple_dino_highscore') || '0', 10);
highScoreEl.textContent = String(highScore).padStart(5, '0');

let dinoAnimId = null;
let isDinoPlaying = false;
let isDinoOver = false;

const groundY = 320;
let dinoScore = 0;
let dinoDistance = 0;
let dinoSpeed = 3.5; // Lowered, relaxed starting speed
let lastScoreBeep = 0;
let dinoLives = 3;
let dinoInvulnerableTimer = 0;

// Dino Entity
const dino = {
  baseX: 75,
  x: 75,
  y: groundY - 65,
  width: 58,
  height: 65,
  vy: 0,
  jumpStrength: -12.2, // Higher, floatier jump
  gravity: 0.38,       // Longer hangtime so dino travels farther
  isGrounded: true,
  runFrame: 0,
  stepTimer: 0,
  
  jump() {
    if (this.isGrounded && !isDinoOver) {
      this.vy = this.jumpStrength;
      this.isGrounded = false;
      sound.playJump();
      createDinoDust(this.x + 15, groundY);
    }
  },

  update() {
    this.vy += this.gravity;
    this.y += this.vy;

    // Leap forward in air, return to baseX when grounded
    if (!this.isGrounded) {
      this.x = Math.min(this.baseX + 55, this.x + 1.4);
    } else {
      if (this.x > this.baseX) {
        this.x = Math.max(this.baseX, this.x - 1.2);
      }
    }

    if (this.y >= groundY - this.height) {
      this.y = groundY - this.height;
      this.vy = 0;
      this.isGrounded = true;
    }

    this.stepTimer++;
    if (this.stepTimer > 8) {
      this.stepTimer = 0;
      this.runFrame = (this.runFrame + 1) % 2;
      if (this.isGrounded && Math.random() < 0.4) {
        createDinoDust(this.x + 5, groundY);
      }
    }
  },

  draw() {
    dinoCtx.save();
    
    // Flashing when invulnerable
    if (dinoInvulnerableTimer > 0 && Math.floor(dinoInvulnerableTimer / 5) % 2 === 0) {
      dinoCtx.globalAlpha = 0.35;
    }

    let drawY = this.y;
    if (this.isGrounded) {
      drawY += (this.runFrame === 0 ? 0 : 2);
    }

    if (dinoImg.complete && dinoImg.naturalWidth > 0) {
      dinoCtx.drawImage(dinoImg, this.x, drawY, this.width, this.height);
    } else {
      dinoCtx.fillStyle = '#c084fc';
      dinoCtx.fillRect(this.x, drawY, this.width, this.height);
    }

    dinoCtx.restore();
  }
};

let obstacles = [];
let nextObstacleDistance = 0;

function createDinoObstacle() {
  const boxWidth = 48;
  const boxHeight = 52;
  obstacles.push({
    x: dinoCanvas.width + 20,
    y: groundY - boxHeight,
    width: boxWidth,
    height: boxHeight
  });
  
  const minGap = 350 + (dinoSpeed * 12);
  const maxGap = 520 + (dinoSpeed * 24);
  nextObstacleDistance = minGap + Math.random() * (maxGap - minGap);
}

let dinoParticles = [];

function createDinoDust(x, y) {
  for (let i = 0; i < 3; i++) {
    dinoParticles.push({
      x: x + (Math.random() * 8 - 4),
      y: y - Math.random() * 4,
      vx: -(dinoSpeed * 0.4) + (Math.random() * 2 - 1),
      vy: -(Math.random() * 1.5 + 0.5),
      size: Math.random() * 4 + 2,
      alpha: 0.8,
      color: '#d8b4fe'
    });
  }
}

function updateDinoParticles() {
  for (let i = dinoParticles.length - 1; i >= 0; i--) {
    const p = dinoParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.04;
    if (p.alpha <= 0) {
      dinoParticles.splice(i, 1);
    }
  }
}

function drawDinoParticles() {
  dinoParticles.forEach(p => {
    dinoCtx.save();
    dinoCtx.globalAlpha = Math.max(0, p.alpha);
    dinoCtx.fillStyle = p.color;
    dinoCtx.fillRect(p.x, p.y, p.size, p.size);
    dinoCtx.restore();
  });
}

// Decorative floating stars
let decorStars = [];
for (let i = 0; i < 12; i++) {
  decorStars.push({
    x: Math.random() * 840,
    y: 80 + Math.random() * 160,
    speed: 0.5 + Math.random() * 0.8,
    size: 2 + Math.floor(Math.random() * 3),
    color: Math.random() > 0.5 ? '#f3e8ff' : '#e9d5ff'
  });
}

function updateAndDrawDecor() {
  decorStars.forEach(s => {
    s.x -= s.speed;
    if (s.x < -10) s.x = dinoCanvas.width + 10;
    dinoCtx.fillStyle = s.color;
    dinoCtx.fillRect(s.x, s.y, s.size, s.size);
  });
}

let groundOffset = 0;
function drawDinoGround() {
  groundOffset = (groundOffset + dinoSpeed) % 24;
  
  dinoCtx.strokeStyle = '#c084fc';
  dinoCtx.lineWidth = 4;
  dinoCtx.beginPath();
  dinoCtx.moveTo(0, groundY);
  dinoCtx.lineTo(dinoCanvas.width, groundY);
  dinoCtx.stroke();

  dinoCtx.fillStyle = '#e9d5ff';
  for (let x = -groundOffset; x < dinoCanvas.width; x += 24) {
    dinoCtx.fillRect(x, groundY + 8, 8, 2);
    dinoCtx.fillRect(x + 12, groundY + 16, 4, 2);
  }
}

function checkDinoCollision(dinoObj, boxObj) {
  const dLeft = dinoObj.x + 10;
  const dRight = dinoObj.x + dinoObj.width - 10;
  const dTop = dinoObj.y + 6;
  const dBottom = dinoObj.y + dinoObj.height;

  const bLeft = boxObj.x + 6;
  const bRight = boxObj.x + boxObj.width - 6;
  const bTop = boxObj.y + 4;
  const bBottom = boxObj.y + boxObj.height;

  return !(
    dRight < bLeft ||
    dLeft > bRight ||
    dBottom < bTop ||
    dTop > bBottom
  );
}

function dinoGameLoop() {
  if (!isDinoPlaying) return;

  dinoCtx.clearRect(0, 0, dinoCanvas.width, dinoCanvas.height);

  if (!isDinoOver) {
    dinoDistance += dinoSpeed;
    dinoScore = Math.floor(dinoDistance / 10);
    currentScoreEl.textContent = String(dinoScore).padStart(5, '0');

    if (dinoScore > 0 && Math.floor(dinoScore / 100) > lastScoreBeep) {
      lastScoreBeep = Math.floor(dinoScore / 100);
      sound.playScore();
    }

    dinoSpeed = Math.min(6.2, 3.5 + (dinoScore / 1000));

    nextObstacleDistance -= dinoSpeed;
    if (nextObstacleDistance <= 0) {
      createDinoObstacle();
    }

    dino.update();

    if (dinoInvulnerableTimer > 0) {
      dinoInvulnerableTimer--;
    }

    // Update Obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      const obs = obstacles[i];
      obs.x -= dinoSpeed;

      // Check collision
      if (checkDinoCollision(dino, obs)) {
        if (dinoInvulnerableTimer <= 0) {
          dinoLives--;
          renderHearts('dino-lives', dinoLives, 3);
          sound.playHit();
          
          if (dinoLives <= 0) {
            triggerDinoGameOver();
            break;
          } else {
            // Invulnerability frame & remove obstacle
            dinoInvulnerableTimer = 75; // ~1.25s
            obstacles.splice(i, 1);
            continue;
          }
        }
      }

      if (obs.x + obs.width < -30) {
        obstacles.splice(i, 1);
      }
    }

    updateDinoParticles();
  }

  // Draw Elements
  updateAndDrawDecor();
  drawDinoGround();
  drawDinoParticles();

  // Draw Obstacles
  obstacles.forEach(obs => {
    if (boxImg.complete && boxImg.naturalWidth > 0) {
      dinoCtx.drawImage(boxImg, obs.x, obs.y, obs.width, obs.height);
    } else {
      dinoCtx.fillStyle = '#4ade80';
      dinoCtx.fillRect(obs.x, obs.y, obs.width, obs.height);
    }
  });

  // Draw Dino
  dino.draw();

  dinoAnimId = requestAnimationFrame(dinoGameLoop);
}

function triggerDinoGameOver() {
  isDinoOver = true;
  sound.playHit();

  if (dinoScore > highScore) {
    highScore = dinoScore;
    localStorage.setItem('purple_dino_highscore', String(highScore));
    highScoreEl.textContent = String(highScore).padStart(5, '0');
  }

  // Show "oh no u failed" prompt
  dinoGameOverModal.classList.add('active');
}

function initDinoGame() {
  stopDinoGame();
  
  dinoLives = 3;
  renderHearts('dino-lives', dinoLives, 3);

  dinoScore = 0;
  dinoDistance = 0;
  dinoSpeed = 3.5;
  lastScoreBeep = 0;
  obstacles = [];
  dinoParticles = [];
  nextObstacleDistance = 260;
  dinoInvulnerableTimer = 0;
  
  dino.x = dino.baseX;
  dino.y = groundY - dino.height;
  dino.vy = 0;
  dino.isGrounded = true;
  
  isDinoOver = false;
  isDinoPlaying = true;
  
  currentScoreEl.textContent = "00000";
  dinoGameOverModal.classList.remove('active');

  createDinoObstacle();
  dinoAnimId = requestAnimationFrame(dinoGameLoop);
}

function stopDinoGame() {
  isDinoPlaying = false;
  if (dinoAnimId) {
    cancelAnimationFrame(dinoAnimId);
    dinoAnimId = null;
  }
}

// Retry button on failure prompt
btnDinoRetry.addEventListener('click', () => {
  sound.playClick();
  initDinoGame();
});

// Next experience button directs to Page 4
btnDinoNext.addEventListener('click', () => {
  sound.playFanfare();
  dinoGameOverModal.classList.remove('active');
  showPage(4);
});

// Mobile Jump Button
mobileJumpBtn.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  if (currentPage === 3) {
    if (isDinoOver) {
      initDinoGame();
    } else {
      dino.jump();
    }
  }
});

// Canvas Click for Dino Jump
dinoCanvas.addEventListener('pointerdown', () => {
  if (currentPage === 3) {
    if (isDinoOver) {
      initDinoGame();
    } else {
      dino.jump();
    }
  }
});


// ==========================================
// 5. Page 4 Boss Battle Engine (Gojo vs Sukuna)
// ==========================================

const battleCanvas = document.getElementById('battle-canvas');
const battleCtx = battleCanvas.getContext('2d');

const bossHpFill = document.getElementById('boss-hp-fill');
const bossHpText = document.getElementById('boss-hp-text');
const battleWinModal = document.getElementById('battle-win-modal');
const battleLoseModal = document.getElementById('battle-lose-modal');
const btnWinReplay = document.getElementById('btn-win-replay');
const btnWinMenu = document.getElementById('btn-win-menu');
const btnBattleRetry = document.getElementById('btn-battle-retry');
const btnBattleMenu = document.getElementById('btn-battle-menu');

// Load Battle Image Assets
const playerImg = new Image();
playerImg.src = 'assets/player.png';

const bossImg = new Image();
bossImg.src = 'assets/boss.png';

const fireImg = new Image();
fireImg.src = 'assets/fire.png';

let battleAnimId = null;
let isBattlePlaying = false;
let isBattleOver = false;

// Battle Entities & Variables
let playerLives = 3;
let playerInvulnTimer = 0;
let bossHp = 100;
let bossMaxHp = 100;
let bossHitTimer = 0;
let battleTime = 0;

const player = {
  x: 90,
  y: 170,
  width: 64,
  height: 96,
  speed: 5.5,
  cooldown: 0,
  
  update(keys) {
    if (keys.ArrowUp || keys.KeyW) this.y -= this.speed;
    if (keys.ArrowDown || keys.KeyS) this.y += this.speed;
    if (keys.ArrowLeft || keys.KeyA) this.x -= this.speed;
    if (keys.ArrowRight || keys.KeyD) this.x += this.speed;

    // Bounds checking (stay on left side)
    this.x = Math.max(25, Math.min(380, this.x));
    this.y = Math.max(20, Math.min(battleCanvas.height - this.height - 15, this.y));

    if (this.cooldown > 0) this.cooldown--;
  },

  draw() {
    battleCtx.save();
    if (playerInvulnTimer > 0 && Math.floor(playerInvulnTimer / 5) % 2 === 0) {
      battleCtx.globalAlpha = 0.35;
    }

    if (playerImg.complete && playerImg.naturalWidth > 0) {
      battleCtx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    } else {
      battleCtx.fillStyle = '#60a5fa';
      battleCtx.fillRect(this.x, this.y, this.width, this.height);
    }
    battleCtx.restore();
  }
};

const boss = {
  x: 700,
  y: 160,
  width: 65,
  height: 98,
  baseY: 160,
  
  update() {
    // Slower, smooth floating
    this.y = this.baseY + Math.sin(battleTime * 0.025) * 60;
    if (bossHitTimer > 0) bossHitTimer--;
  },

  draw() {
    battleCtx.save();
    if (bossHitTimer > 0) {
      battleCtx.filter = 'brightness(2) drop-shadow(0 0 10px #ec4899)';
    }

    if (bossImg.complete && bossImg.naturalWidth > 0) {
      battleCtx.drawImage(bossImg, this.x, this.y, this.width, this.height);
    } else {
      battleCtx.fillStyle = '#f87171';
      battleCtx.fillRect(this.x, this.y, this.width, this.height);
    }
    battleCtx.restore();
  }
};

// Purple Bomb Projectiles (Player)
let purpleBombs = [];

function firePurpleBomb() {
  if (player.cooldown > 0 || isBattleOver) return;
  player.cooldown = 16; // cooldown ~ 260ms
  sound.playPurpleBomb();

  purpleBombs.push({
    x: player.x + player.width - 5,
    y: player.y + 36,
    radius: 14,
    speed: 13,
    pulse: 0
  });

  // Muzzle particles
  for (let i = 0; i < 6; i++) {
    battleParticles.push({
      x: player.x + player.width,
      y: player.y + 36,
      vx: (Math.random() * 2 - 1) * 2,
      vy: (Math.random() * 2 - 1) * 2,
      size: Math.random() * 4 + 2,
      color: '#c084fc',
      alpha: 1,
      decay: 0.06
    });
  }
}

// Fireballs (Boss) - Lowered, relaxed speeds
let fireballs = [];
let nextFireTimer = 60;

function spawnFireball() {
  const pattern = Math.random();
  sound.playFireball();

  if (pattern < 0.5) {
    // Single aimed fireball towards player's Y (lowered speed)
    const dy = (player.y + player.height / 2) - (boss.y + boss.height / 2);
    const vy = Math.max(-1.8, Math.min(1.8, dy * 0.009));
    fireballs.push({
      x: boss.x - 20,
      y: boss.y + 25,
      width: 42,
      height: 48,
      vx: -3.8,
      vy: vy
    });
  } else if (pattern < 0.8) {
    // 3-way spread fireballs (lowered speed)
    [-1.4, 0, 1.4].forEach(angleVy => {
      fireballs.push({
        x: boss.x - 20,
        y: boss.y + 25,
        width: 38,
        height: 44,
        vx: -3.2,
        vy: angleVy
      });
    });
  } else {
    // Straight fireball (lowered speed)
    fireballs.push({
      x: boss.x - 20,
      y: boss.y + 25,
      width: 44,
      height: 50,
      vx: -4.5,
      vy: 0
    });
  }

  // Generous delay between boss attacks (approx 1.8 to 2.5s)
  nextFireTimer = 95 + Math.floor(Math.random() * 50);
}

// Battle Particles
let battleParticles = [];

function createPurpleExplosion(x, y) {
  for (let i = 0; i < 20; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = Math.random() * 6 + 2;
    battleParticles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      size: Math.random() * 5 + 3,
      color: Math.random() > 0.5 ? '#d8b4fe' : '#f472b6',
      alpha: 1,
      decay: 0.035
    });
  }
}

function updateBattleParticles() {
  for (let i = battleParticles.length - 1; i >= 0; i--) {
    const p = battleParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= p.decay;
    if (p.alpha <= 0) {
      battleParticles.splice(i, 1);
    }
  }
}

function drawBattleParticles() {
  battleParticles.forEach(p => {
    battleCtx.save();
    battleCtx.globalAlpha = Math.max(0, p.alpha);
    battleCtx.fillStyle = p.color;
    battleCtx.fillRect(p.x, p.y, p.size, p.size);
    battleCtx.restore();
  });
}

// Active Keys Tracker
const activeKeys = {};

window.addEventListener('keydown', (e) => {
  activeKeys[e.code] = true;
  activeKeys[e.key] = true;

  if (e.code === 'Space' || e.key === ' ') {
    e.preventDefault();
    if (currentPage === 1) {
      btnStart.click();
    } else if (currentPage === 2) {
      if (modalBoring.classList.contains('active')) {
        btnFinePlay.click();
      } else {
        btnPlayYes.click();
      }
    } else if (currentPage === 3) {
      if (isDinoOver) {
        initDinoGame();
      } else {
        dino.jump();
      }
    } else if (currentPage === 4) {
      if (isBattleOver) {
        initBattleGame();
      } else {
        firePurpleBomb();
      }
    } else if (currentPage === 5) {
      if (isP5Over) {
        initP5Game();
      } else {
        fireCyanBomb();
      }
    } else if (currentPage === 6) {
      if (isP6Over) {
        initP6Game();
      } else {
        fireActiveCharacterAttack();
      }
    }
  } else if ((e.code === 'ArrowUp' || e.key === 'ArrowUp') && currentPage === 3) {
    e.preventDefault();
    if (!isDinoOver) dino.jump();
  } else if ((e.code === 'ArrowUp' || e.key === 'ArrowUp' || e.code === 'KeyW') && currentPage === 5) {
    if (!isP5Over && typeof p5Player !== 'undefined') p5Player.jump();
  } else if (currentPage === 6 && !isP6Over) {
    if (e.code === 'Digit1' || e.key === '1') selectP6Character('nobara');
    if (e.code === 'Digit2' || e.key === '2') selectP6Character('yuji');
    if (e.code === 'Digit3' || e.key === '3') selectP6Character('megumi');
  }
});

window.addEventListener('keyup', (e) => {
  activeKeys[e.code] = false;
  activeKeys[e.key] = false;
});

// Battle Canvas Click to Fire
battleCanvas.addEventListener('pointerdown', (e) => {
  if (currentPage === 4 && !isBattleOver) {
    firePurpleBomb();
  }
});

// Mobile Controls for Battle
const mobileBombBtn = document.getElementById('mobile-bomb');
mobileBombBtn.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  if (currentPage === 4) {
    firePurpleBomb();
  }
});

// Virtual D-pad Handlers
const dpadMap = {
  'dpad-up': 'ArrowUp',
  'dpad-down': 'ArrowDown',
  'dpad-left': 'ArrowLeft',
  'dpad-right': 'ArrowRight'
};

Object.entries(dpadMap).forEach(([btnId, keyName]) => {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  const press = (e) => {
    e.preventDefault();
    activeKeys[keyName] = true;
  };
  const release = (e) => {
    e.preventDefault();
    activeKeys[keyName] = false;
  };

  btn.addEventListener('pointerdown', press);
  btn.addEventListener('pointerup', release);
  btn.addEventListener('pointercancel', release);
  btn.addEventListener('pointerleave', release);
});

// Battle Game Loop
function battleGameLoop() {
  if (!isBattlePlaying) return;

  battleTime++;
  battleCtx.clearRect(0, 0, battleCanvas.width, battleCanvas.height);

  if (!isBattleOver) {
    player.update(activeKeys);
    boss.update();

    if (playerInvulnTimer > 0) {
      playerInvulnTimer--;
    }

    // Fireball Spawner
    nextFireTimer--;
    if (nextFireTimer <= 0) {
      spawnFireball();
    }

    // Update Purple Bombs
    for (let i = purpleBombs.length - 1; i >= 0; i--) {
      const b = purpleBombs[i];
      b.x += b.speed;
      b.pulse += 0.2;

      // Trail particle
      if (Math.random() < 0.6) {
        battleParticles.push({
          x: b.x - 6,
          y: b.y + (Math.random() * 8 - 4),
          vx: -(Math.random() * 2),
          vy: Math.random() * 2 - 1,
          size: Math.random() * 3 + 2,
          color: '#a855f7',
          alpha: 0.8,
          decay: 0.05
        });
      }

      // Check collision with Boss
      if (
        b.x + b.radius >= boss.x + 8 &&
        b.x - b.radius <= boss.x + boss.width - 8 &&
        b.y >= boss.y &&
        b.y <= boss.y + boss.height
      ) {
        // Hit Boss! Exactly 10 hits (tries) to defeat
        bossHp = Math.max(0, bossHp - 10);
        bossHitTimer = 10;
        sound.playBossHit();
        createPurpleExplosion(b.x, b.y);

        // Update Boss HP bar
        const hpPct = Math.round((bossHp / bossMaxHp) * 100);
        const hitsLeft = Math.ceil(bossHp / 10);
        bossHpFill.style.width = `${hpPct}%`;
        bossHpText.textContent = `${hpPct}% (${hitsLeft}/10 HITS)`;

        purpleBombs.splice(i, 1);

        if (bossHp <= 0) {
          triggerBattleVictory();
          break;
        }
        continue;
      }

      // Remove offscreen bombs
      if (b.x > battleCanvas.width + 30) {
        purpleBombs.splice(i, 1);
      }
    }

    // Update Fireballs
    for (let i = fireballs.length - 1; i >= 0; i--) {
      const fb = fireballs[i];
      fb.x += fb.vx;
      fb.y += fb.vy;

      // Flame trail particles
      if (Math.random() < 0.4) {
        battleParticles.push({
          x: fb.x + fb.width - 4,
          y: fb.y + fb.height / 2 + (Math.random() * 6 - 3),
          vx: Math.random() * 2,
          vy: Math.random() * 2 - 1,
          size: Math.random() * 4 + 2,
          color: Math.random() > 0.5 ? '#f97316' : '#ef4444',
          alpha: 0.8,
          decay: 0.06
        });
      }

      // Check collision with Player
      const pLeft = player.x + 10;
      const pRight = player.x + player.width - 10;
      const pTop = player.y + 10;
      const pBottom = player.y + player.height - 5;

      const fLeft = fb.x + 6;
      const fRight = fb.x + fb.width - 6;
      const fTop = fb.y + 6;
      const fBottom = fb.y + fb.height - 6;

      if (
        !(pRight < fLeft || pLeft > fRight || pBottom < fTop || pTop > fBottom)
      ) {
        if (playerInvulnTimer <= 0) {
          playerLives--;
          renderHearts('battle-player-lives', playerLives, 3);
          sound.playHit();
          fireballs.splice(i, 1);

          if (playerLives <= 0) {
            triggerBattleDefeat();
            break;
          } else {
            playerInvulnTimer = 75; // ~1.25s
            continue;
          }
        }
      }

      if (fb.x + fb.width < -30) {
        fireballs.splice(i, 1);
      }
    }

    updateBattleParticles();
  }

  // Draw Battle Particles
  drawBattleParticles();

  // Draw Purple Bombs
  purpleBombs.forEach(b => {
    battleCtx.save();
    // Outer glow
    battleCtx.shadowColor = '#d946ef';
    battleCtx.shadowBlur = 18;

    // Glowing Purple Orb
    const gradient = battleCtx.createRadialGradient(b.x, b.y, 2, b.x, b.y, b.radius);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.4, '#c084fc');
    gradient.addColorStop(0.8, '#a855f7');
    gradient.addColorStop(1, '#701a75');

    battleCtx.fillStyle = gradient;
    battleCtx.beginPath();
    battleCtx.arc(b.x, b.y, b.radius + Math.sin(b.pulse) * 2, 0, Math.PI * 2);
    battleCtx.fill();
    battleCtx.restore();
  });

  // Draw Fireballs
  fireballs.forEach(fb => {
    battleCtx.save();
    battleCtx.shadowColor = '#f97316';
    battleCtx.shadowBlur = 12;

    if (fireImg.complete && fireImg.naturalWidth > 0) {
      battleCtx.drawImage(fireImg, fb.x, fb.y, fb.width, fb.height);
    } else {
      battleCtx.fillStyle = '#ef4444';
      battleCtx.fillRect(fb.x, fb.y, fb.width, fb.height);
    }
    battleCtx.restore();
  });

  // Draw Characters
  player.draw();
  boss.draw();

  battleAnimId = requestAnimationFrame(battleGameLoop);
}

function triggerBattleVictory() {
  isBattleOver = true;
  sound.playVictory();
  createPurpleExplosion(boss.x + boss.width / 2, boss.y + boss.height / 2);
  battleWinModal.classList.add('active');
}

function triggerBattleDefeat() {
  isBattleOver = true;
  sound.playHit();
  battleLoseModal.classList.add('active');
}

function initBattleGame() {
  stopBattleGame();

  playerLives = 3;
  renderHearts('battle-player-lives', playerLives, 3);

  bossHp = 100;
  bossHpFill.style.width = '100%';
  bossHpText.textContent = '100% (10/10 HITS)';

  player.x = 90;
  player.y = 170;
  player.cooldown = 0;
  playerInvulnTimer = 0;

  boss.x = 690;
  boss.baseY = 160;
  bossHitTimer = 0;

  purpleBombs = [];
  fireballs = [];
  battleParticles = [];
  nextFireTimer = 40;
  battleTime = 0;

  isBattleOver = false;
  isBattlePlaying = true;

  battleWinModal.classList.remove('active');
  battleLoseModal.classList.remove('active');

  battleAnimId = requestAnimationFrame(battleGameLoop);
}

function stopBattleGame() {
  isBattlePlaying = false;
  if (battleAnimId) {
    cancelAnimationFrame(battleAnimId);
    battleAnimId = null;
  }
}

// Victory & Defeat Button Handlers for Page 4
const btnWinNext = document.getElementById('btn-win-next');
if (btnWinNext) {
  btnWinNext.addEventListener('click', () => {
    sound.playFanfare();
    battleWinModal.classList.remove('active');
    showPage(5);
  });
}

btnWinReplay.addEventListener('click', () => {
  sound.playClick();
  initBattleGame();
});

btnWinMenu.addEventListener('click', () => {
  sound.playClick();
  showPage(1);
});

btnBattleRetry.addEventListener('click', () => {
  sound.playClick();
  initBattleGame();
});

btnBattleMenu.addEventListener('click', () => {
  sound.playClick();
  showPage(1);
});

// ==========================================
// 6. Page 5 Rooftop Chase Engine (Yuji vs Mahito)
// ==========================================

const p5Canvas = document.getElementById('p5-canvas');
const p5Ctx = p5Canvas.getContext('2d');

const p5BossHpFill = document.getElementById('p5-boss-hp-fill');
const p5BossHpText = document.getElementById('p5-boss-hp-text');
const p5WinModal = document.getElementById('p5-win-modal');
const p5LoseModal = document.getElementById('p5-lose-modal');
const btnP5WinReplay = document.getElementById('btn-p5-win-replay');
const btnP5WinMenu = document.getElementById('btn-p5-win-menu');
const btnP5LoseRetry = document.getElementById('btn-p5-lose-retry');
const btnP5LoseMenu = document.getElementById('btn-p5-lose-menu');
const btnBackToMenuP5 = document.getElementById('btn-back-to-menu-p5');

// Sprites for Page 5
const p5PlayerImg = new Image();
p5PlayerImg.src = 'assets/p5_player.png';

const p5BossImg = new Image();
p5BossImg.src = 'assets/p5_boss.png';

let p5AnimId = null;
let isP5Playing = false;
let isP5Over = false;

// Buildings Layout across canvas (840 x 440)
const buildings = [
  { x: 15,  width: 145, y: 250, height: 190 },
  { x: 180, width: 140, y: 190, height: 250 },
  { x: 340, width: 150, y: 270, height: 170 },
  { x: 510, width: 140, y: 195, height: 245 },
  { x: 675, width: 150, y: 255, height: 185 }
];

const streetY = 415;

// Yuji (Player)
let p5PlayerLives = 3;
let p5PlayerInvulnTimer = 0;

const p5Player = {
  x: 45,
  y: 175,
  width: 58,
  height: 75,
  vx: 0,
  vy: 0,
  speed: 6.0,
  isGrounded: true,
  cooldown: 0,

  jump() {
    if (this.isGrounded && !isP5Over) {
      this.vy = -13.2;
      this.isGrounded = false;
      sound.playJump();
    }
  },

  update(keys) {
    // Horizontal movement
    if (keys.ArrowLeft || keys.KeyA) {
      this.vx = -this.speed;
    } else if (keys.ArrowRight || keys.KeyD) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }

    if ((keys.ArrowUp || keys.KeyW) && this.isGrounded) {
      this.jump();
    }

    this.x += this.vx;
    this.vy += 0.65; // gravity
    this.y += this.vy;

    // Boundary limits
    this.x = Math.max(10, Math.min(p5Canvas.width - this.width - 10, this.x));

    // Platform collisions
    this.isGrounded = false;
    for (const b of buildings) {
      if (
        this.x + this.width * 0.7 > b.x &&
        this.x + this.width * 0.3 < b.x + b.width
      ) {
        // Landing on rooftop from above
        if (this.y + this.height >= b.y && this.y + this.height <= b.y + 18 && this.vy >= 0) {
          this.y = b.y - this.height;
          this.vy = 0;
          this.isGrounded = true;
          break;
        }
      }
    }

    // Street ground safety
    if (!this.isGrounded && this.y + this.height >= streetY) {
      this.y = streetY - this.height;
      this.vy = 0;
      this.isGrounded = true;
    }

    if (this.cooldown > 0) this.cooldown--;
  },

  draw() {
    p5Ctx.save();
    if (p5PlayerInvulnTimer > 0 && Math.floor(p5PlayerInvulnTimer / 5) % 2 === 0) {
      p5Ctx.globalAlpha = 0.35;
    }

    if (p5PlayerImg.complete && p5PlayerImg.naturalWidth > 0) {
      p5Ctx.drawImage(p5PlayerImg, this.x, this.y, this.width, this.height);
    } else {
      p5Ctx.fillStyle = '#06b6d4';
      p5Ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    p5Ctx.restore();
  }
};

// Mahito (Boss) Running and Jumping across buildings
let p5BossHp = 100;
let p5BossMaxHp = 100;
let p5BossHitTimer = 0;

const p5Boss = {
  x: 720,
  y: 180,
  width: 50,
  height: 72,
  vx: -2.6, // Lowered, relaxed speed
  vy: 0,
  isGrounded: true,
  currentBuildingIdx: 4,
  targetBuildingIdx: 3,
  direction: -1, // -1: moving left, 1: moving right
  jumpCooldown: 20,

  update() {
    this.vy += 0.55; // gentle gravity
    this.x += this.vx;
    this.y += this.vy;

    // Check building platforms
    this.isGrounded = false;
    for (let i = 0; i < buildings.length; i++) {
      const b = buildings[i];
      if (
        this.x + this.width * 0.7 > b.x &&
        this.x + this.width * 0.3 < b.x + b.width
      ) {
        if (this.y + this.height >= b.y && this.y + this.height <= b.y + 20 && this.vy >= 0) {
          this.y = b.y - this.height;
          this.vy = 0;
          this.isGrounded = true;
          this.currentBuildingIdx = i;
          break;
        }
      }
    }

    // Street ground safety
    if (!this.isGrounded && this.y + this.height >= streetY) {
      this.y = streetY - this.height;
      this.vy = 0;
      this.isGrounded = true;
    }

    // Running & Jumping AI (relaxed speeds)
    if (this.isGrounded) {
      const currB = buildings[this.currentBuildingIdx];
      // Near building edge -> LEAP to next building!
      if (this.direction === -1 && this.x <= currB.x + 15) {
        // Jump left
        if (this.currentBuildingIdx > 0) {
          this.vy = -10.0;
          this.vx = -3.2;
          this.isGrounded = false;
        } else {
          // Reached left end, turn around
          this.direction = 1;
          this.vx = 2.6;
        }
      } else if (this.direction === 1 && this.x + this.width >= currB.x + currB.width - 15) {
        // Jump right
        if (this.currentBuildingIdx < buildings.length - 1) {
          this.vy = -10.0;
          this.vx = 3.2;
          this.isGrounded = false;
        } else {
          // Reached right end, turn around
          this.direction = -1;
          this.vx = -2.6;
        }
      }
    }

    // Wall bounce
    if (this.x <= 15) {
      this.x = 15;
      this.direction = 1;
      this.vx = 2.6;
    } else if (this.x + this.width >= p5Canvas.width - 15) {
      this.x = p5Canvas.width - this.width - 15;
      this.direction = -1;
      this.vx = -2.6;
    }

    if (p5BossHitTimer > 0) p5BossHitTimer--;
  },

  draw() {
    p5Ctx.save();
    if (p5BossHitTimer > 0) {
      p5Ctx.filter = 'brightness(2) drop-shadow(0 0 12px #22d3ee)';
    }

    if (p5BossImg.complete && p5BossImg.naturalWidth > 0) {
      // Draw facing movement direction
      if (this.direction === 1) {
        p5Ctx.translate(this.x + this.width, this.y);
        p5Ctx.scale(-1, 1);
        p5Ctx.drawImage(p5BossImg, 0, 0, this.width, this.height);
      } else {
        p5Ctx.drawImage(p5BossImg, this.x, this.y, this.width, this.height);
      }
    } else {
      p5Ctx.fillStyle = '#a855f7';
      p5Ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    p5Ctx.restore();
  }
};

// Cyan Color Bombs (Yuji Projectiles)
let cyanBombs = [];

function fireCyanBomb() {
  if (p5Player.cooldown > 0 || isP5Over) return;
  p5Player.cooldown = 15; // fast plasma cadence
  sound.playCyanBomb();

  // Calculate direction towards Mahito
  const dx = (p5Boss.x + p5Boss.width / 2) - (p5Player.x + p5Player.width / 2);
  const dy = (p5Boss.y + p5Boss.height / 2) - (p5Player.y + p5Player.height / 2);
  const dist = Math.hypot(dx, dy) || 1;
  const speed = 13.5;

  cyanBombs.push({
    x: p5Player.x + p5Player.width / 2,
    y: p5Player.y + p5Player.height * 0.4,
    vx: (dx / dist) * speed,
    vy: (dy / dist) * speed,
    radius: 12,
    pulse: 0
  });

  // Muzzle cyan sparks
  for (let i = 0; i < 8; i++) {
    p5Particles.push({
      x: p5Player.x + p5Player.width / 2,
      y: p5Player.y + p5Player.height * 0.4,
      vx: (Math.random() * 3 - 1.5) * 2,
      vy: (Math.random() * 3 - 1.5) * 2,
      size: Math.random() * 4 + 2,
      color: '#67e8f9',
      alpha: 1,
      decay: 0.05
    });
  }
}

// Line of Bombs Attack (Mahito)
let soulBombs = [];
let nextBombLineTimer = 160;

function spawnLineOfBombs() {
  sound.playBombLine();

  // Send a line of 3 to 4 bombs in rapid succession/spread (slower projectile speed)
  const count = 4;
  for (let i = 0; i < count; i++) {
    const angle = Math.PI * 0.75 + (i * 0.22); // arcing downwards towards player
    const speed = 3.2 + (i * 0.4);

    soulBombs.push({
      x: p5Boss.x + (p5Boss.direction === -1 ? -5 : p5Boss.width + 5),
      y: p5Boss.y + 20,
      vx: (p5Boss.direction === -1 ? -1 : 1) * Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: 13,
      pulse: 0
    });
  }

  // Generous delay between attacks (3 to 4 seconds)
  nextBombLineTimer = 180 + Math.floor(Math.random() * 60);
}

// Particle System for Page 5
let p5Particles = [];

function createCyanExplosion(x, y) {
  for (let i = 0; i < 22; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = Math.random() * 6 + 2;
    p5Particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      size: Math.random() * 5 + 3,
      color: Math.random() > 0.5 ? '#22d3ee' : '#a5f3fc',
      alpha: 1,
      decay: 0.035
    });
  }
}

function createSoulBombExplosion(x, y) {
  for (let i = 0; i < 16; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = Math.random() * 5 + 1.5;
    p5Particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      size: Math.random() * 4 + 2,
      color: Math.random() > 0.5 ? '#a855f7' : '#581c87',
      alpha: 1,
      decay: 0.04
    });
  }
}

function updateP5Particles() {
  for (let i = p5Particles.length - 1; i >= 0; i--) {
    const p = p5Particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= p.decay;
    if (p.alpha <= 0) {
      p5Particles.splice(i, 1);
    }
  }
}

function drawP5Particles() {
  p5Particles.forEach(p => {
    p5Ctx.save();
    p5Ctx.globalAlpha = Math.max(0, p.alpha);
    p5Ctx.fillStyle = p.color;
    p5Ctx.fillRect(p.x, p.y, p.size, p.size);
    p5Ctx.restore();
  });
}

// Draw Skyline & Rooftops
function drawBuildings() {
  // Street baseline
  p5Ctx.fillStyle = '#0f0826';
  p5Ctx.fillRect(0, streetY, p5Canvas.width, p5Canvas.height - streetY);
  p5Ctx.strokeStyle = '#22d3ee';
  p5Ctx.lineWidth = 2;
  p5Ctx.beginPath();
  p5Ctx.moveTo(0, streetY);
  p5Ctx.lineTo(p5Canvas.width, streetY);
  p5Ctx.stroke();

  // Buildings
  buildings.forEach((b, idx) => {
    // Building body
    p5Ctx.fillStyle = '#181028';
    p5Ctx.fillRect(b.x, b.y, b.width, b.height);

    // Rooftop neon ledge
    p5Ctx.fillStyle = '#22d3ee';
    p5Ctx.fillRect(b.x, b.y, b.width, 6);

    p5Ctx.strokeStyle = '#7c3aed';
    p5Ctx.lineWidth = 3;
    p5Ctx.strokeRect(b.x, b.y, b.width, b.height);

    // Glowing pixel windows
    for (let wy = b.y + 20; wy < b.y + b.height - 20; wy += 28) {
      for (let wx = b.x + 16; wx < b.x + b.width - 20; wx += 24) {
        const isCyan = (wx + wy) % 3 === 0;
        p5Ctx.fillStyle = isCyan ? 'rgba(34, 211, 238, 0.75)' : 'rgba(253, 224, 71, 0.7)';
        p5Ctx.fillRect(wx, wy, 12, 16);
      }
    }
  });
}

// Page 5 Game Loop
function p5GameLoop() {
  if (!isP5Playing) return;

  p5Ctx.clearRect(0, 0, p5Canvas.width, p5Canvas.height);

  // Draw background structures
  drawBuildings();

  if (!isP5Over) {
    p5Player.update(activeKeys);
    p5Boss.update();

    if (p5PlayerInvulnTimer > 0) {
      p5PlayerInvulnTimer--;
    }

    // Spawner for Mahito's Line of Bombs
    nextBombLineTimer--;
    if (nextBombLineTimer <= 0) {
      spawnLineOfBombs();
    }

    // Update Cyan Bombs
    for (let i = cyanBombs.length - 1; i >= 0; i--) {
      const cb = cyanBombs[i];
      cb.x += cb.vx;
      cb.y += cb.vy;
      cb.pulse += 0.2;

      // Spark trail
      if (Math.random() < 0.6) {
        p5Particles.push({
          x: cb.x - cb.vx * 0.4,
          y: cb.y - cb.vy * 0.4,
          vx: (Math.random() * 2 - 1),
          vy: (Math.random() * 2 - 1),
          size: Math.random() * 3 + 2,
          color: '#22d3ee',
          alpha: 0.8,
          decay: 0.05
        });
      }

      // Check collision with Mahito
      if (
        cb.x + cb.radius >= p5Boss.x + 6 &&
        cb.x - cb.radius <= p5Boss.x + p5Boss.width - 6 &&
        cb.y >= p5Boss.y &&
        cb.y <= p5Boss.y + p5Boss.height
      ) {
        // Destroyed / Damaged Mahito!
        p5BossHp = Math.max(0, p5BossHp - 10);
        p5BossHitTimer = 10;
        sound.playBossHit();
        createCyanExplosion(cb.x, cb.y);

        const hpPct = Math.round((p5BossHp / p5BossMaxHp) * 100);
        p5BossHpFill.style.width = `${hpPct}%`;
        p5BossHpText.textContent = `${hpPct}%`;

        cyanBombs.splice(i, 1);

        if (p5BossHp <= 0) {
          triggerP5Victory();
          break;
        }
        continue;
      }

      // Remove off-canvas bombs
      if (
        cb.x < -30 || cb.x > p5Canvas.width + 30 ||
        cb.y < -30 || cb.y > p5Canvas.height + 30
      ) {
        cyanBombs.splice(i, 1);
      }
    }

    // Update Soul Bombs (Line of bombs from Mahito)
    for (let i = soulBombs.length - 1; i >= 0; i--) {
      const sb = soulBombs[i];
      sb.x += sb.vx;
      sb.y += sb.vy;
      sb.vy += 0.15; // gentle drop arc
      sb.pulse += 0.15;

      // Dark trail
      if (Math.random() < 0.4) {
        p5Particles.push({
          x: sb.x,
          y: sb.y,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1,
          size: Math.random() * 4 + 2,
          color: '#7e22ce',
          alpha: 0.8,
          decay: 0.06
        });
      }

      // Check collision with Yuji
      const pLeft = p5Player.x + 10;
      const pRight = p5Player.x + p5Player.width - 10;
      const pTop = p5Player.y + 10;
      const pBottom = p5Player.y + p5Player.height - 5;

      if (
        sb.x + sb.radius >= pLeft &&
        sb.x - sb.radius <= pRight &&
        sb.y + sb.radius >= pTop &&
        sb.y - sb.radius <= pBottom
      ) {
        if (p5PlayerInvulnTimer <= 0) {
          p5PlayerLives--;
          renderHearts('p5-player-lives', p5PlayerLives, 3);
          sound.playHit();
          createSoulBombExplosion(sb.x, sb.y);
          soulBombs.splice(i, 1);

          if (p5PlayerLives <= 0) {
            triggerP5Defeat();
            break;
          } else {
            p5PlayerInvulnTimer = 75;
            continue;
          }
        }
      }

      // Check ground/building collision for explosion
      if (sb.y >= streetY) {
        createSoulBombExplosion(sb.x, sb.y);
        soulBombs.splice(i, 1);
        continue;
      }

      if (sb.x < -40 || sb.x > p5Canvas.width + 40 || sb.y > p5Canvas.height + 40) {
        soulBombs.splice(i, 1);
      }
    }

    updateP5Particles();
  }

  // Draw Particles
  drawP5Particles();

  // Draw Cyan Bombs
  cyanBombs.forEach(cb => {
    p5Ctx.save();
    p5Ctx.shadowColor = '#22d3ee';
    p5Ctx.shadowBlur = 18;

    const grad = p5Ctx.createRadialGradient(cb.x, cb.y, 2, cb.x, cb.y, cb.radius);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.4, '#a5f3fc');
    grad.addColorStop(0.8, '#06b6d4');
    grad.addColorStop(1, '#0e7490');

    p5Ctx.fillStyle = grad;
    p5Ctx.beginPath();
    p5Ctx.arc(cb.x, cb.y, cb.radius + Math.sin(cb.pulse) * 2, 0, Math.PI * 2);
    p5Ctx.fill();
    p5Ctx.restore();
  });

  // Draw Soul Bombs (Line of bombs)
  soulBombs.forEach(sb => {
    p5Ctx.save();
    p5Ctx.shadowColor = '#a855f7';
    p5Ctx.shadowBlur = 14;

    const grad = p5Ctx.createRadialGradient(sb.x, sb.y, 2, sb.x, sb.y, sb.radius);
    grad.addColorStop(0, '#f5d0fe');
    grad.addColorStop(0.4, '#c084fc');
    grad.addColorStop(0.8, '#581c87');
    grad.addColorStop(1, '#2e1065');

    p5Ctx.fillStyle = grad;
    p5Ctx.beginPath();
    p5Ctx.arc(sb.x, sb.y, sb.radius, 0, Math.PI * 2);
    p5Ctx.fill();
    p5Ctx.restore();
  });

  // Draw Characters
  p5Player.draw();
  p5Boss.draw();

  p5AnimId = requestAnimationFrame(p5GameLoop);
}

function triggerP5Victory() {
  isP5Over = true;
  sound.playVictory();
  createCyanExplosion(p5Boss.x + p5Boss.width / 2, p5Boss.y + p5Boss.height / 2);
  p5WinModal.classList.add('active');
}

function triggerP5Defeat() {
  isP5Over = true;
  sound.playHit();
  p5LoseModal.classList.add('active');
}

function initP5Game() {
  stopP5Game();

  p5PlayerLives = 3;
  renderHearts('p5-player-lives', p5PlayerLives, 3);

  p5BossHp = 100;
  p5BossHpFill.style.width = '100%';
  p5BossHpText.textContent = '100%';

  p5Player.x = 45;
  p5Player.y = 175;
  p5Player.vx = 0;
  p5Player.vy = 0;
  p5Player.cooldown = 0;
  p5PlayerInvulnTimer = 0;

  p5Boss.x = 720;
  p5Boss.y = 180;
  p5Boss.vx = -2.6;
  p5Boss.vy = 0;
  p5Boss.currentBuildingIdx = 4;
  p5Boss.direction = -1;
  p5BossHitTimer = 0;

  cyanBombs = [];
  soulBombs = [];
  p5Particles = [];
  nextBombLineTimer = 160;

  isP5Over = false;
  isP5Playing = true;

  p5WinModal.classList.remove('active');
  p5LoseModal.classList.remove('active');

  p5AnimId = requestAnimationFrame(p5GameLoop);
}

function stopP5Game() {
  isP5Playing = false;
  if (p5AnimId) {
    cancelAnimationFrame(p5AnimId);
    p5AnimId = null;
  }
}

// Page 5 Pointer & Mobile Events
p5Canvas.addEventListener('pointerdown', () => {
  if (currentPage === 5 && !isP5Over) {
    fireCyanBomb();
  }
});

const p5MobileBombBtn = document.getElementById('p5-mobile-bomb');
if (p5MobileBombBtn) {
  p5MobileBombBtn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    if (currentPage === 5 && !isP5Over) {
      fireCyanBomb();
    }
  });
}

// Mobile Virtual D-pad for Page 5
const p5DpadMap = {
  'p5-dpad-up': 'ArrowUp',
  'p5-dpad-down': 'ArrowDown',
  'p5-dpad-left': 'ArrowLeft',
  'p5-dpad-right': 'ArrowRight'
};

Object.entries(p5DpadMap).forEach(([btnId, keyName]) => {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  const press = (e) => {
    e.preventDefault();
    activeKeys[keyName] = true;
    if (keyName === 'ArrowUp' && currentPage === 5 && !isP5Over) {
      p5Player.jump();
    }
  };
  const release = (e) => {
    e.preventDefault();
    activeKeys[keyName] = false;
  };

  btn.addEventListener('pointerdown', press);
  btn.addEventListener('pointerup', release);
  btn.addEventListener('pointercancel', release);
  btn.addEventListener('pointerleave', release);
});

// Page 5 Modal Buttons
btnP5WinReplay.addEventListener('click', () => {
  sound.playClick();
  initP5Game();
});

btnP5WinMenu.addEventListener('click', () => {
  sound.playClick();
  showPage(1);
});

btnP5LoseRetry.addEventListener('click', () => {
  sound.playClick();
  initP5Game();
});

btnP5LoseMenu.addEventListener('click', () => {
  sound.playClick();
  showPage(1);
});

btnBackToMenuP5.addEventListener('click', () => {
  sound.playClick();
  showPage(1);
});


// ==========================================
// 7. Page 6: Jujutsu Trio vs Special Grade Curse Engine
// ==========================================

const p6Canvas = document.getElementById('p6-canvas');
const p6Ctx = p6Canvas.getContext('2d');

const p6BossHpFill = document.getElementById('p6-boss-hp-fill');
const p6BossHpText = document.getElementById('p6-boss-hp-text');

const p6WinModal = document.getElementById('p6-win-modal');
const p6LoseModal = document.getElementById('p6-lose-modal');
const p6SelectModal = document.getElementById('p6-select-modal');
const p6SelectTitle = document.getElementById('p6-select-title');
const p6SelectSubtitle = document.getElementById('p6-select-subtitle');

// Load Page 6 Sprites
const p6NobaraImg = new Image();
p6NobaraImg.src = 'assets/p6_nobara.png';

const p6YujiImg = new Image();
p6YujiImg.src = 'assets/p6_yuji.png';

const p6MegumiImg = new Image();
p6MegumiImg.src = 'assets/p6_megumi.png';

const p6CurseImg = new Image();
p6CurseImg.src = 'assets/p6_curse.png';

const p6GroundY = 385;

// Sorcerers Roster
const p6Characters = {
  nobara: {
    id: 'nobara',
    name: 'NOBARA',
    power: 'nails',
    powerLabel: 'Straw Doll Nails',
    lives: 3,
    maxLives: 3,
    width: 60,
    height: 88,
    speed: 6.2,
    jumpPower: -13.2,
    img: p6NobaraImg,
    color: '#f472b6',
    cooldownMax: 16,
    icon: '📌'
  },
  yuji: {
    id: 'yuji',
    name: 'YUJI',
    power: 'black_bombs',
    powerLabel: 'Black Bombs',
    lives: 3,
    maxLives: 3,
    width: 62,
    height: 86,
    speed: 6.5,
    jumpPower: -13.8,
    img: p6YujiImg,
    color: '#fb7185',
    cooldownMax: 26,
    icon: '💥'
  },
  megumi: {
    id: 'megumi',
    name: 'MEGUMI',
    power: 'divine_dogs',
    powerLabel: 'Twin Divine Dogs',
    lives: 3,
    maxLives: 3,
    width: 60,
    height: 86,
    speed: 5.8,
    jumpPower: -12.8,
    img: p6MegumiImg,
    color: '#a78bfa',
    cooldownMax: 38,
    icon: '🐺'
  }
};

let activeP6CharId = 'nobara';
let p6PlayerInvulnTimer = 0;
let isP6Over = false;
let isP6Playing = false;
let p6AnimId = null;
let p6Time = 0;

// Player Entity
const p6Player = {
  x: 80,
  y: 180,
  vx: 0,
  vy: 0,
  cooldown: 0,
  facing: 1,

  update(keys) {
    const charData = p6Characters[activeP6CharId];

    // Horizontal movement (Left / Right)
    if (keys.ArrowLeft || keys.KeyA) {
      this.vx = -charData.speed;
      this.facing = -1;
    } else if (keys.ArrowRight || keys.KeyD) {
      this.vx = charData.speed;
      this.facing = 1;
    } else {
      this.vx = 0;
    }

    // Vertical movement (Up / Down freely changing altitude and position)
    if (keys.ArrowUp || keys.KeyW) {
      this.vy = -charData.speed;
    } else if (keys.ArrowDown || keys.KeyS) {
      this.vy = charData.speed;
    } else {
      this.vy = 0;
    }

    this.x += this.vx;
    this.y += this.vy;

    // Boundaries in arena (freely navigate 2D space on player's side)
    this.x = Math.max(20, Math.min(380, this.x));
    this.y = Math.max(25, Math.min(p6Canvas.height - charData.height - 20, this.y));

    if (this.cooldown > 0) this.cooldown--;
  },

  draw() {
    const charData = p6Characters[activeP6CharId];

    // Subtle breathing / floating motion (selected character moving up and down like changing position)
    const floatY = Math.sin(p6Time * 0.07) * 7;
    const currentDrawY = this.y + floatY;

    p6Ctx.save();

    // Dynamic ground shadow that scales with altitude
    const heightFromGround = Math.max(0, p6GroundY - (currentDrawY + charData.height));
    const shadowScale = Math.max(0.35, 1 - heightFromGround / 320);
    p6Ctx.fillStyle = `rgba(0, 0, 0, ${0.4 * shadowScale})`;
    p6Ctx.beginPath();
    p6Ctx.ellipse(this.x + charData.width / 2, p6GroundY - 2, 24 * shadowScale, 7 * shadowScale, 0, 0, Math.PI * 2);
    p6Ctx.fill();

    // Invulnerability blink
    if (p6PlayerInvulnTimer > 0 && Math.floor(p6PlayerInvulnTimer / 5) % 2 === 0) {
      p6Ctx.globalAlpha = 0.35;
    }

    if (charData.img.complete && charData.img.naturalWidth > 0) {
      p6Ctx.drawImage(charData.img, this.x, currentDrawY, charData.width, charData.height);
    } else {
      p6Ctx.fillStyle = charData.color;
      p6Ctx.fillRect(this.x, currentDrawY, charData.width, charData.height);
    }

    p6Ctx.restore();
  }
};

// Curse Boss Entity (Pic 4 Gengar)
const p6Boss = {
  x: 640,
  y: 170,
  baseY: 170,
  width: 90,
  height: 90,
  hp: 180,
  maxHp: 180,
  hitTimer: 0,
  floatAngle: 0,
  teleportTimer: 180,
  targetY: 170,

  update() {
    this.floatAngle += 0.035;
    this.y = this.baseY + Math.sin(this.floatAngle) * 55;

    // Periodic hover shift / teleport
    this.teleportTimer--;
    if (this.teleportTimer <= 0) {
      this.teleportTimer = 160 + Math.floor(Math.random() * 80);
      const spotsY = [120, 180, 250];
      const spotsX = [590, 660, 710];
      createP6CurseTeleportParticles(this.x + this.width / 2, this.y + this.height / 2);
      this.baseY = spotsY[Math.floor(Math.random() * spotsY.length)];
      this.x = spotsX[Math.floor(Math.random() * spotsX.length)];
      createP6CurseTeleportParticles(this.x + this.width / 2, this.y + this.height / 2);
    }

    if (this.hitTimer > 0) this.hitTimer--;
  },

  draw() {
    p6Ctx.save();

    // Ambient floating shadow beneath
    p6Ctx.fillStyle = 'rgba(40, 10, 60, 0.45)';
    p6Ctx.beginPath();
    p6Ctx.ellipse(this.x + this.width / 2, p6GroundY - 4, 34, 8, 0, 0, Math.PI * 2);
    p6Ctx.fill();

    // Dark cursed aura
    p6Ctx.shadowColor = '#9333ea';
    p6Ctx.shadowBlur = 22;

    if (this.hitTimer > 0) {
      p6Ctx.filter = 'brightness(2.2) drop-shadow(0 0 16px #ec4899)';
    }

    if (p6CurseImg.complete && p6CurseImg.naturalWidth > 0) {
      p6Ctx.drawImage(p6CurseImg, this.x, this.y, this.width, this.height);
    } else {
      p6Ctx.fillStyle = '#6b21a8';
      p6Ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    p6Ctx.restore();
  }
};

// Player Projectiles & Summons
let p6Nails = [];
let p6BlackBombs = [];
let p6DivineDogs = [];

// Curse Projectiles ("shadows, fire, and red bombs")
let p6CurseProjectiles = [];
let nextCurseAttackTimer = 60;
let curseAttackPattern = 0;

// Particle System
let p6Particles = [];

function createP6Poof(x, y, color) {
  for (let i = 0; i < 14; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = Math.random() * 4 + 1.5;
    p6Particles.push({
      x,
      y,
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      size: Math.random() * 4 + 2,
      color: color || '#ec4899',
      alpha: 1,
      decay: 0.04
    });
  }
}

function createP6CurseTeleportParticles(x, y) {
  for (let i = 0; i < 20; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = Math.random() * 5 + 1;
    p6Particles.push({
      x,
      y,
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      size: Math.random() * 5 + 2,
      color: Math.random() > 0.5 ? '#581c87' : '#9333ea',
      alpha: 0.9,
      decay: 0.03
    });
  }
}

function createP6CurseHitParticles(x, y) {
  for (let i = 0; i < 18; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = Math.random() * 6 + 2;
    p6Particles.push({
      x,
      y,
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      size: Math.random() * 4 + 2,
      color: Math.random() > 0.5 ? '#f43f5e' : '#ec4899',
      alpha: 1,
      decay: 0.035
    });
  }
}

function updateP6Particles() {
  for (let i = p6Particles.length - 1; i >= 0; i--) {
    const p = p6Particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= p.decay;
    if (p.alpha <= 0) {
      p6Particles.splice(i, 1);
    }
  }
}

function drawP6Particles() {
  p6Particles.forEach(p => {
    p6Ctx.save();
    p6Ctx.globalAlpha = Math.max(0, p.alpha);
    p6Ctx.fillStyle = p.color;
    p6Ctx.fillRect(p.x, p.y, p.size, p.size);
    p6Ctx.restore();
  });
}

// Attack Execution for Active Character
function fireActiveCharacterAttack() {
  if (p6Player.cooldown > 0 || isP6Over) return;

  const charData = p6Characters[activeP6CharId];
  if (charData.lives <= 0) return;

  p6Player.cooldown = charData.cooldownMax;

  if (activeP6CharId === 'nobara') {
    // Nobara: Fast Straw Doll Nails (2 nails in tight spread)
    sound.playNail();
    [-4, 10].forEach(offsetY => {
      p6Nails.push({
        x: p6Player.x + charData.width,
        y: p6Player.y + 35 + offsetY,
        vx: 15.5,
        vy: (offsetY / 10) * 0.4,
        length: 22,
        damage: 9
      });
    });
    createP6Poof(p6Player.x + charData.width, p6Player.y + 35, '#f472b6');
  } else if (activeP6CharId === 'yuji') {
    // Yuji: Heavy Black Flash Cursed Bomb
    sound.playBlackBomb();
    p6BlackBombs.push({
      x: p6Player.x + charData.width,
      y: p6Player.y + 36,
      vx: 12.0,
      vy: -0.6,
      radius: 14,
      damage: 18,
      pulse: 0
    });
    createP6Poof(p6Player.x + charData.width, p6Player.y + 36, '#dc2626');
  } else if (activeP6CharId === 'megumi') {
    // Megumi: Twin Divine Dogs (White Dog leaps mid-air, Black Dog sprints low)
    sound.playDogs();
    p6DivineDogs.push({
      type: 'white',
      x: p6Player.x + 10,
      y: p6Player.y + 10,
      vx: 11.2,
      vy: -1.8,
      width: 48,
      height: 32,
      damage: 12,
      trailTimer: 0
    });
    p6DivineDogs.push({
      type: 'black',
      x: p6Player.x - 15,
      y: p6GroundY - 36,
      vx: 12.8,
      vy: 0,
      width: 48,
      height: 32,
      damage: 12,
      trailTimer: 0
    });
    createP6Poof(p6Player.x + 20, p6GroundY - 20, '#a78bfa');
  }
}

// Spawner for Curse's 3 Menacing Attacks ("shadows, fire, and red bombs")
function spawnCurseAttack() {
  curseAttackPattern = (curseAttackPattern + 1) % 3;

  if (curseAttackPattern === 0) {
    // 1. SHADOWS ATTACK: Crawling & homing shadow tendrils/orbs
    sound.playCurseShadow();
    for (let i = 0; i < 3; i++) {
      const spreadY = (i - 1) * 45;
      p6CurseProjectiles.push({
        type: 'shadow',
        x: p6Boss.x - 10,
        y: p6Boss.y + 30 + spreadY,
        vx: -5.0 - (i * 0.4),
        vy: (Math.random() * 1.2 - 0.6),
        radius: 13,
        damage: 1
      });
    }
    nextCurseAttackTimer = 75 + Math.floor(Math.random() * 30);
  } else if (curseAttackPattern === 1) {
    // 2. FIRE ATTACK: Fan of 3 cursed flame bursts
    sound.playCurseFire();
    [-1.6, 0, 1.6].forEach(vy => {
      p6CurseProjectiles.push({
        type: 'fire',
        x: p6Boss.x - 15,
        y: p6Boss.y + 35,
        vx: -4.8,
        vy: vy,
        width: 38,
        height: 28,
        damage: 1
      });
    });
    nextCurseAttackTimer = 85 + Math.floor(Math.random() * 35);
  } else {
    // 3. RED BOMBS ATTACK: 2 bouncing explosive red cursed orbs
    sound.playCurseBomb();
    [-2.2, -0.8].forEach(vy => {
      p6CurseProjectiles.push({
        type: 'red_bomb',
        x: p6Boss.x - 10,
        y: p6Boss.y + 20,
        vx: -4.2 - Math.random(),
        vy: vy,
        radius: 15,
        bounces: 1,
        damage: 1
      });
    });
    nextCurseAttackTimer = 95 + Math.floor(Math.random() * 40);
  }
}

// Character Selection & Switching Mechanics
function selectP6Character(charId) {
  const targetChar = p6Characters[charId];
  if (!targetChar || targetChar.lives <= 0) return;

  activeP6CharId = charId;
  p6SelectModal.classList.remove('active');

  // Update header badges
  document.querySelectorAll('.p6-char-badge').forEach(badge => {
    if (badge.dataset.char === charId) {
      badge.classList.add('active');
    } else {
      badge.classList.remove('active');
    }
  });

  // Update mobile attack button label & icon
  const atkIcon = document.getElementById('p6-attack-icon');
  const atkLabel = document.getElementById('p6-attack-label');
  if (atkIcon) atkIcon.textContent = targetChar.icon;
  if (atkLabel) atkLabel.textContent = targetChar.powerLabel.toUpperCase();

  createP6Poof(p6Player.x + 25, p6Player.y + 30, targetChar.color);
  sound.playClick();
}

function renderP6HUD() {
  // Update header badges hearts and fallen status
  Object.values(p6Characters).forEach(char => {
    const heartsContainer = document.getElementById(`p6-hearts-${char.id}`);
    const badge = document.getElementById(`p6-badge-${char.id}`);
    const rosterBtn = document.getElementById(`btn-select-${char.id}`);
    const rosterLives = document.getElementById(`roster-lives-${char.id}`);

    if (heartsContainer) {
      heartsContainer.innerHTML = '';
      for (let i = 0; i < char.maxLives; i++) {
        const img = document.createElement('img');
        img.src = 'assets/heart.png';
        img.alt = 'Life';
        img.className = 'heart-life-icon' + (i >= char.lives ? ' lost' : '');
        heartsContainer.appendChild(img);
      }
    }

    if (badge) {
      if (char.lives <= 0) {
        badge.classList.add('fallen');
      } else {
        badge.classList.remove('fallen');
      }
    }

    if (rosterBtn) {
      rosterBtn.disabled = char.lives <= 0;
      if (char.lives <= 0) {
        rosterBtn.classList.add('fallen');
      } else {
        rosterBtn.classList.remove('fallen');
      }
    }

    if (rosterLives) {
      rosterLives.innerHTML = char.lives > 0
        ? '❤️'.repeat(char.lives) + '🖤'.repeat(char.maxLives - char.lives)
        : '<span style="color:#ef4444;font-weight:bold;">FALLEN 💀</span>';
    }
  });

  // Boss HP
  const hpPct = Math.max(0, Math.round((p6Boss.hp / p6Boss.maxHp) * 100));
  p6BossHpFill.style.width = `${hpPct}%`;
  p6BossHpText.textContent = `${hpPct}%`;
}

function handleP6PlayerDamage() {
  if (p6PlayerInvulnTimer > 0) return;

  const charData = p6Characters[activeP6CharId];
  charData.lives--;
  sound.playHit();
  renderP6HUD();

  if (charData.lives <= 0) {
    // Current character has fallen!
    sound.playHit();
    createP6Poof(p6Player.x + 30, p6Player.y + 40, '#ef4444');

    // Check if ALL characters are defeated
    const remaining = Object.values(p6Characters).filter(c => c.lives > 0);
    if (remaining.length === 0) {
      triggerP6SquadDefeat();
    } else {
      // Prompt user to select another character
      p6SelectTitle.textContent = `✦ ${charData.name} HAS FALLEN! ✦`;
      p6SelectSubtitle.textContent = 'Select your next fighter to continue the battle against the curse!';
      p6SelectModal.classList.add('active');
    }
  } else {
    p6PlayerInvulnTimer = 75; // ~1.25s invulnerability
  }
}

function triggerP6Victory() {
  isP6Over = true;
  sound.playVictory();
  createP6CurseHitParticles(p6Boss.x + p6Boss.width / 2, p6Boss.y + p6Boss.height / 2);
  p6WinModal.classList.add('active');
}

function triggerP6SquadDefeat() {
  isP6Over = true;
  sound.playHit();
  p6LoseModal.classList.add('active');
}

// Page 6 Main Loop
function p6GameLoop() {
  if (!isP6Playing) return;

  p6Time++;
  p6Ctx.clearRect(0, 0, p6Canvas.width, p6Canvas.height);

  if (!isP6Over && !p6SelectModal.classList.contains('active')) {
    p6Player.update(activeKeys);
    p6Boss.update();

    if (p6PlayerInvulnTimer > 0) p6PlayerInvulnTimer--;

    // Curse Attack Spawner
    nextCurseAttackTimer--;
    if (nextCurseAttackTimer <= 0) {
      spawnCurseAttack();
    }

    // 1. Update Nobara's Nails
    for (let i = p6Nails.length - 1; i >= 0; i--) {
      const nail = p6Nails[i];
      nail.x += nail.vx;
      nail.y += nail.vy;

      // Check hit with Curse
      if (
        nail.x + nail.length >= p6Boss.x + 8 &&
        nail.x <= p6Boss.x + p6Boss.width - 8 &&
        nail.y >= p6Boss.y + 8 &&
        nail.y <= p6Boss.y + p6Boss.height - 8
      ) {
        p6Boss.hp = Math.max(0, p6Boss.hp - nail.damage);
        p6Boss.hitTimer = 10;
        sound.playCurseHit();
        createP6CurseHitParticles(nail.x, nail.y);
        renderP6HUD();
        p6Nails.splice(i, 1);

        if (p6Boss.hp <= 0) {
          triggerP6Victory();
          break;
        }
        continue;
      }

      if (nail.x > p6Canvas.width + 40) p6Nails.splice(i, 1);
    }

    // 2. Update Yuji's Black Bombs
    for (let i = p6BlackBombs.length - 1; i >= 0; i--) {
      const bb = p6BlackBombs[i];
      bb.x += bb.vx;
      bb.y += bb.vy;
      bb.pulse += 0.2;

      // Dark spark trail
      if (Math.random() < 0.4) {
        p6Particles.push({
          x: bb.x - 6,
          y: bb.y + (Math.random() * 8 - 4),
          vx: Math.random() * -2,
          vy: Math.random() * 2 - 1,
          size: Math.random() * 4 + 2,
          color: Math.random() > 0.5 ? '#111827' : '#dc2626',
          alpha: 0.9,
          decay: 0.05
        });
      }

      // Check hit with Curse
      if (
        bb.x + bb.radius >= p6Boss.x + 6 &&
        bb.x - bb.radius <= p6Boss.x + p6Boss.width - 6 &&
        bb.y >= p6Boss.y &&
        bb.y <= p6Boss.y + p6Boss.height
      ) {
        p6Boss.hp = Math.max(0, p6Boss.hp - bb.damage);
        p6Boss.hitTimer = 12;
        sound.playCurseHit();
        createP6CurseHitParticles(bb.x, bb.y);
        renderP6HUD();
        p6BlackBombs.splice(i, 1);

        if (p6Boss.hp <= 0) {
          triggerP6Victory();
          break;
        }
        continue;
      }

      if (bb.x > p6Canvas.width + 40) p6BlackBombs.splice(i, 1);
    }

    // 3. Update Megumi's Divine Dogs
    for (let i = p6DivineDogs.length - 1; i >= 0; i--) {
      const dog = p6DivineDogs[i];
      dog.x += dog.vx;
      dog.y += dog.vy;

      // Gravity / ground clamp for dogs
      if (dog.y >= p6GroundY - dog.height) {
        dog.y = p6GroundY - dog.height;
        dog.vy = 0;
      }

      // Check hit with Curse
      if (
        dog.x + dog.width >= p6Boss.x &&
        dog.x <= p6Boss.x + p6Boss.width &&
        dog.y + dog.height >= p6Boss.y &&
        dog.y <= p6Boss.y + p6Boss.height
      ) {
        p6Boss.hp = Math.max(0, p6Boss.hp - dog.damage);
        p6Boss.hitTimer = 12;
        sound.playCurseHit();
        createP6CurseHitParticles(dog.x + dog.width / 2, dog.y + dog.height / 2);
        renderP6HUD();
        p6DivineDogs.splice(i, 1);

        if (p6Boss.hp <= 0) {
          triggerP6Victory();
          break;
        }
        continue;
      }

      if (dog.x > p6Canvas.width + 60) p6DivineDogs.splice(i, 1);
    }

    // 4. Update Curse Projectiles ("shadows, fire, red bombs")
    for (let i = p6CurseProjectiles.length - 1; i >= 0; i--) {
      const cp = p6CurseProjectiles[i];
      cp.x += cp.vx;
      cp.y += cp.vy;

      if (cp.type === 'red_bomb') {
        cp.vy += 0.22; // gravity
        if (cp.y >= p6GroundY - cp.radius) {
          cp.y = p6GroundY - cp.radius;
          if (cp.bounces > 0) {
            cp.bounces--;
            cp.vy = -4.5;
            sound.playHit();
          }
        }
      }

      // Collision with Player
      const charData = p6Characters[activeP6CharId];
      const pLeft = p6Player.x + 12;
      const pRight = p6Player.x + charData.width - 12;
      const pTop = p6Player.y + 10;
      const pBottom = p6Player.y + charData.height;

      let hit = false;
      if (cp.type === 'shadow' || cp.type === 'red_bomb') {
        const radius = cp.radius || 12;
        if (
          cp.x + radius >= pLeft &&
          cp.x - radius <= pRight &&
          cp.y + radius >= pTop &&
          cp.y - radius <= pBottom
        ) {
          hit = true;
        }
      } else if (cp.type === 'fire') {
        if (
          !(pRight < cp.x || pLeft > cp.x + cp.width || pBottom < cp.y || pTop > cp.y + cp.height)
        ) {
          hit = true;
        }
      }

      if (hit) {
        p6CurseProjectiles.splice(i, 1);
        handleP6PlayerDamage();
        continue;
      }

      // Offscreen cleanup
      if (cp.x < -50 || cp.y > p6Canvas.height + 50) {
        p6CurseProjectiles.splice(i, 1);
      }
    }

    updateP6Particles();
  }

  // Draw Particles
  drawP6Particles();

  // Draw Nobara's Nails
  p6Nails.forEach(n => {
    p6Ctx.save();
    p6Ctx.shadowColor = '#ec4899';
    p6Ctx.shadowBlur = 10;

    // Metal Nail Body
    p6Ctx.strokeStyle = '#f1f5f9';
    p6Ctx.lineWidth = 3;
    p6Ctx.beginPath();
    p6Ctx.moveTo(n.x, n.y);
    p6Ctx.lineTo(n.x + n.length, n.y);
    p6Ctx.stroke();

    // Nail Head
    p6Ctx.fillStyle = '#f472b6';
    p6Ctx.fillRect(n.x - 2, n.y - 4, 3, 8);

    // Glowing tip spark
    p6Ctx.fillStyle = '#ffffff';
    p6Ctx.fillRect(n.x + n.length - 2, n.y - 2, 4, 4);

    p6Ctx.restore();
  });

  // Draw Yuji's Black Bombs
  p6BlackBombs.forEach(bb => {
    p6Ctx.save();
    p6Ctx.shadowColor = '#ef4444';
    p6Ctx.shadowBlur = 16;

    // Glowing Crimson Corona
    const grad = p6Ctx.createRadialGradient(bb.x, bb.y, 2, bb.x, bb.y, bb.radius);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.3, '#dc2626');
    grad.addColorStop(0.7, '#1f2937');
    grad.addColorStop(1, '#000000');

    p6Ctx.fillStyle = grad;
    p6Ctx.beginPath();
    p6Ctx.arc(bb.x, bb.y, bb.radius, 0, Math.PI * 2);
    p6Ctx.fill();

    // Electric arcs
    p6Ctx.strokeStyle = '#ef4444';
    p6Ctx.lineWidth = 2;
    p6Ctx.beginPath();
    p6Ctx.arc(bb.x, bb.y, bb.radius + 3, bb.pulse, bb.pulse + 1.2);
    p6Ctx.stroke();

    p6Ctx.restore();
  });

  // Draw Megumi's Divine Dogs (White & Black)
  p6DivineDogs.forEach(dog => {
    p6Ctx.save();
    const isWhite = dog.type === 'white';

    // Shadow aura
    p6Ctx.shadowColor = isWhite ? '#38bdf8' : '#6b21a8';
    p6Ctx.shadowBlur = 12;

    // Body
    p6Ctx.fillStyle = isWhite ? '#f8fafc' : '#0f172a';
    p6Ctx.fillRect(dog.x + 8, dog.y + 6, 28, 16);

    // Head
    p6Ctx.fillRect(dog.x + 28, dog.y, 16, 16);

    // Ears
    p6Ctx.fillRect(dog.x + 32, dog.y - 6, 6, 6);
    p6Ctx.fillRect(dog.x + 40, dog.y - 4, 5, 5);

    // Glowing Eyes
    p6Ctx.fillStyle = '#ef4444';
    p6Ctx.fillRect(dog.x + 38, dog.y + 4, 4, 3);

    // Red Head Symbol / Mark
    p6Ctx.fillStyle = '#ef4444';
    p6Ctx.fillRect(dog.x + 33, dog.y + 1, 4, 4);

    // Running Legs
    const legOffset = Math.sin(p6Time * 0.4) * 4;
    p6Ctx.fillStyle = isWhite ? '#e2e8f0' : '#020617';
    p6Ctx.fillRect(dog.x + 12 + legOffset, dog.y + 20, 5, 10);
    p6Ctx.fillRect(dog.x + 28 - legOffset, dog.y + 20, 5, 10);

    // Tail
    p6Ctx.fillRect(dog.x + 2, dog.y + 8, 8, 4);

    p6Ctx.restore();
  });

  // Draw Curse Projectiles
  p6CurseProjectiles.forEach(cp => {
    p6Ctx.save();
    if (cp.type === 'shadow') {
      // Swirling Dark Shadow Sphere
      p6Ctx.shadowColor = '#a855f7';
      p6Ctx.shadowBlur = 14;
      const grad = p6Ctx.createRadialGradient(cp.x, cp.y, 2, cp.x, cp.y, cp.radius);
      grad.addColorStop(0, '#c084fc');
      grad.addColorStop(0.5, '#581c87');
      grad.addColorStop(1, '#090014');
      p6Ctx.fillStyle = grad;
      p6Ctx.beginPath();
      p6Ctx.arc(cp.x, cp.y, cp.radius, 0, Math.PI * 2);
      p6Ctx.fill();
    } else if (cp.type === 'fire') {
      // Cursed Fireball
      p6Ctx.shadowColor = '#f97316';
      p6Ctx.shadowBlur = 12;
      p6Ctx.fillStyle = '#ea580c';
      p6Ctx.beginPath();
      p6Ctx.ellipse(cp.x + cp.width / 2, cp.y + cp.height / 2, cp.width / 2, cp.height / 2, 0, 0, Math.PI * 2);
      p6Ctx.fill();
      p6Ctx.fillStyle = '#fbbf24';
      p6Ctx.beginPath();
      p6Ctx.ellipse(cp.x + cp.width * 0.6, cp.y + cp.height / 2, cp.width / 4, cp.height / 4, 0, 0, Math.PI * 2);
      p6Ctx.fill();
    } else if (cp.type === 'red_bomb') {
      // Red Cursed Explosive Bomb
      p6Ctx.shadowColor = '#ef4444';
      p6Ctx.shadowBlur = 16;
      const grad = p6Ctx.createRadialGradient(cp.x, cp.y, 2, cp.x, cp.y, cp.radius);
      grad.addColorStop(0, '#fecaca');
      grad.addColorStop(0.4, '#ef4444');
      grad.addColorStop(0.8, '#991b1b');
      grad.addColorStop(1, '#450a0a');
      p6Ctx.fillStyle = grad;
      p6Ctx.beginPath();
      p6Ctx.arc(cp.x, cp.y, cp.radius, 0, Math.PI * 2);
      p6Ctx.fill();
    }
    p6Ctx.restore();
  });

  // Draw Entities
  p6Player.draw();
  p6Boss.draw();

  p6AnimId = requestAnimationFrame(p6GameLoop);
}

function initP6Game() {
  stopP6Game();

  // Reset Sorcerer Lives
  Object.values(p6Characters).forEach(char => {
    char.lives = char.maxLives;
  });

  activeP6CharId = 'nobara';
  p6PlayerInvulnTimer = 0;

  p6Boss.hp = p6Boss.maxHp;
  p6Boss.x = 640;
  p6Boss.baseY = 170;
  p6Boss.hitTimer = 0;

  p6Player.x = 80;
  p6Player.y = 180;
  p6Player.vx = 0;
  p6Player.vy = 0;
  p6Player.cooldown = 0;

  p6Nails = [];
  p6BlackBombs = [];
  p6DivineDogs = [];
  p6CurseProjectiles = [];
  p6Particles = [];
  nextCurseAttackTimer = 65;
  curseAttackPattern = 0;

  isP6Over = false;
  isP6Playing = true;

  p6WinModal.classList.remove('active');
  p6LoseModal.classList.remove('active');
  p6SelectModal.classList.remove('active');

  renderP6HUD();
  selectP6Character('nobara');

  p6AnimId = requestAnimationFrame(p6GameLoop);
}

function stopP6Game() {
  isP6Playing = false;
  if (p6AnimId) {
    cancelAnimationFrame(p6AnimId);
    p6AnimId = null;
  }
}

// Page 6 Event Handlers & Mobile Support
p6Canvas.addEventListener('pointerdown', () => {
  if (currentPage === 6 && !isP6Over && !p6SelectModal.classList.contains('active')) {
    fireActiveCharacterAttack();
  }
});

const p6MobileAttackBtn = document.getElementById('p6-mobile-attack');
if (p6MobileAttackBtn) {
  p6MobileAttackBtn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    if (currentPage === 6 && !isP6Over && !p6SelectModal.classList.contains('active')) {
      fireActiveCharacterAttack();
    }
  });
}

// Mobile Switch Buttons
['nobara', 'yuji', 'megumi'].forEach(charId => {
  const btn = document.getElementById(`p6-mobile-switch-${charId}`);
  if (btn) {
    btn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      selectP6Character(charId);
    });
  }

  // Header badges click to switch
  const badge = document.getElementById(`p6-badge-${charId}`);
  if (badge) {
    badge.addEventListener('click', () => {
      selectP6Character(charId);
    });
  }

  // Roster card click in modal
  const rosterBtn = document.getElementById(`btn-select-${charId}`);
  if (rosterBtn) {
    rosterBtn.addEventListener('click', () => {
      selectP6Character(charId);
    });
  }
});

// Mobile D-Pad for Page 6
const p6DpadMap = {
  'p6-dpad-up': 'ArrowUp',
  'p6-dpad-down': 'ArrowDown',
  'p6-dpad-left': 'ArrowLeft',
  'p6-dpad-right': 'ArrowRight'
};

Object.entries(p6DpadMap).forEach(([btnId, keyName]) => {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  const press = (e) => {
    e.preventDefault();
    activeKeys[keyName] = true;
  };
  const release = (e) => {
    e.preventDefault();
    activeKeys[keyName] = false;
  };

  btn.addEventListener('pointerdown', press);
  btn.addEventListener('pointerup', release);
  btn.addEventListener('pointercancel', release);
  btn.addEventListener('pointerleave', release);
});

// Page 5 Victory -> Join Next Experience (Page 6)
const btnP5WinNext = document.getElementById('btn-p5-win-next');
if (btnP5WinNext) {
  btnP5WinNext.addEventListener('click', () => {
    sound.playFanfare();
    p5WinModal.classList.remove('active');
    showPage(6);
  });
}

// Header Skip to Page 6
const btnSkipToP6 = document.getElementById('btn-skip-to-p6');
if (btnSkipToP6) {
  btnSkipToP6.addEventListener('click', () => {
    sound.playFanfare();
    showPage(6);
  });
}

// Page 6 Navigation Buttons
const btnBackToP5 = document.getElementById('btn-back-to-p5');
if (btnBackToP5) {
  btnBackToP5.addEventListener('click', () => {
    sound.playClick();
    showPage(5);
  });
}

const btnBackToMenuP6 = document.getElementById('btn-back-to-menu-p6');
if (btnBackToMenuP6) {
  btnBackToMenuP6.addEventListener('click', () => {
    sound.playClick();
    showPage(1);
  });
}

// Page 6 Victory & Defeat Modal Buttons
const btnP6WinReplay = document.getElementById('btn-p6-win-replay');
if (btnP6WinReplay) {
  btnP6WinReplay.addEventListener('click', () => {
    sound.playClick();
    initP6Game();
  });
}

const btnP6WinMenu = document.getElementById('btn-p6-win-menu');
if (btnP6WinMenu) {
  btnP6WinMenu.addEventListener('click', () => {
    sound.playClick();
    showPage(1);
  });
}

const btnP6LoseRetry = document.getElementById('btn-p6-lose-retry');
if (btnP6LoseRetry) {
  btnP6LoseRetry.addEventListener('click', () => {
    sound.playClick();
    initP6Game();
  });
}

const btnP6LoseMenu = document.getElementById('btn-p6-lose-menu');
if (btnP6LoseMenu) {
  btnP6LoseMenu.addEventListener('click', () => {
    sound.playClick();
    showPage(1);
  });
}
