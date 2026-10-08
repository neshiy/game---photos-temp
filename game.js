/**
 * Purple Aesthetics Dino Game
 * Complete game loop, audio synthesizer, and interactive multi-page flow.
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
      osc.frequency.setValueAtTime(659.25, now); // E5
      osc.frequency.setValueAtTime(880.00, now + 0.08); // A5
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
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
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
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, High C
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
    initGame();
  } else {
    stopGame();
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

// Page 3: Back to Menu Buttons
const btnBackMenuP3 = document.getElementById('btn-back-to-menu-p3');
btnBackMenuP3.addEventListener('click', () => {
  sound.playClick();
  showPage(1);
});

const btnGameMenu = document.getElementById('btn-game-menu');
btnGameMenu.addEventListener('click', () => {
  sound.playClick();
  showPage(1);
});

// ==========================================
// 4. Page 3 Dino Game Engine
// ==========================================

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const currentScoreEl = document.getElementById('current-score');
const highScoreEl = document.getElementById('high-score');
const gameOverModal = document.getElementById('game-over-modal');
const finalScoreEl = document.getElementById('final-score');
const finalBestEl = document.getElementById('final-best');
const btnRestart = document.getElementById('btn-restart');
const mobileJumpBtn = document.getElementById('mobile-jump');

// Load Dino and Box Image Assets
const dinoImg = new Image();
dinoImg.src = 'assets/dino.png';

const boxImg = new Image();
boxImg.src = 'assets/box.png';

let highScore = parseInt(localStorage.getItem('purple_dino_highscore') || '0', 10);
highScoreEl.textContent = String(highScore).padStart(5, '0');

let animationFrameId = null;
let isPlaying = false;
let isGameOver = false;

// Game State Variables
const groundY = 320;
let score = 0;
let distance = 0;
let speed = 6.0;
let lastScoreBeep = 0;

// Dino Entity
const dino = {
  x: 75,
  y: groundY - 65,
  width: 58,
  height: 65,
  vy: 0,
  jumpStrength: -13.6,
  gravity: 0.65,
  isGrounded: true,
  runFrame: 0,
  stepTimer: 0,
  
  jump() {
    if (this.isGrounded && !isGameOver) {
      this.vy = this.jumpStrength;
      this.isGrounded = false;
      sound.playJump();
      createDustPuff(this.x + 15, groundY);
    }
  },

  update() {
    // Apply gravity
    this.vy += this.gravity;
    this.y += this.vy;

    // Check ground collision
    if (this.y >= groundY - this.height) {
      this.y = groundY - this.height;
      this.vy = 0;
      this.isGrounded = true;
    }

    // Step cycle animation
    this.stepTimer++;
    if (this.stepTimer > 8) {
      this.stepTimer = 0;
      this.runFrame = (this.runFrame + 1) % 2;
      if (this.isGrounded && Math.random() < 0.4) {
        createDustPuff(this.x + 5, groundY);
      }
    }
  },

  draw() {
    ctx.save();
    
    // Running bobbing offset
    let drawY = this.y;
    if (this.isGrounded) {
      drawY += (this.runFrame === 0 ? 0 : 2);
    }

    if (dinoImg.complete && dinoImg.naturalWidth > 0) {
      ctx.drawImage(dinoImg, this.x, drawY, this.width, this.height);
    } else {
      // Fallback pixel dino placeholder
      ctx.fillStyle = '#c084fc';
      ctx.fillRect(this.x, drawY, this.width, this.height);
    }

    ctx.restore();
  }
};

// Obstacles Array
let obstacles = [];
let nextObstacleDistance = 0;

function createObstacle() {
  const boxWidth = 48;
  const boxHeight = 52;
  obstacles.push({
    x: canvas.width + 20,
    y: groundY - boxHeight,
    width: boxWidth,
    height: boxHeight,
    passed: false
  });
  
  // Random spacing between obstacles (fair and jumpable)
  const minGap = 220 + (speed * 8);
  const maxGap = 360 + (speed * 16);
  nextObstacleDistance = minGap + Math.random() * (maxGap - minGap);
}

// Particle Effects
let particles = [];

function createDustPuff(x, y) {
  for (let i = 0; i < 3; i++) {
    particles.push({
      x: x + (Math.random() * 8 - 4),
      y: y - Math.random() * 4,
      vx: -(speed * 0.4) + (Math.random() * 2 - 1),
      vy: -(Math.random() * 1.5 + 0.5),
      size: Math.random() * 4 + 2,
      alpha: 0.8,
      color: '#d8b4fe'
    });
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.04;
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }
}

function drawParticles() {
  particles.forEach(p => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
    ctx.restore();
  });
}

// Background Decor (floating hearts and stars)
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
    if (s.x < -10) s.x = canvas.width + 10;
    ctx.fillStyle = s.color;
    ctx.fillRect(s.x, s.y, s.size, s.size);
  });
}

// Ground pattern drawing
let groundOffset = 0;
function drawGround() {
  groundOffset = (groundOffset + speed) % 24;
  
  // Main Ground Line
  ctx.strokeStyle = '#c084fc';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(canvas.width, groundY);
  ctx.stroke();

  // Subtle decorative purple ground dots
  ctx.fillStyle = '#e9d5ff';
  for (let x = -groundOffset; x < canvas.width; x += 24) {
    ctx.fillRect(x, groundY + 8, 8, 2);
    ctx.fillRect(x + 12, groundY + 16, 4, 2);
  }
}

// Tight Bounding Box Collision Check
function checkCollision(dinoObj, boxObj) {
  // Dino inner hitbox padding
  const dinoPaddingX = 10;
  const dinoPaddingY = 6;
  const dLeft = dinoObj.x + dinoPaddingX;
  const dRight = dinoObj.x + dinoObj.width - dinoPaddingX;
  const dTop = dinoObj.y + dinoPaddingY;
  const dBottom = dinoObj.y + dinoObj.height;

  // Box inner hitbox padding
  const boxPaddingX = 6;
  const boxPaddingY = 4;
  const bLeft = boxObj.x + boxPaddingX;
  const bRight = boxObj.x + boxObj.width - boxPaddingX;
  const bTop = boxObj.y + boxPaddingY;
  const bBottom = boxObj.y + boxObj.height;

  return !(
    dRight < bLeft ||
    dLeft > bRight ||
    dBottom < bTop ||
    dTop > bBottom
  );
}

// Game Loop
let lastTime = 0;

function gameLoop(timestamp) {
  if (!isPlaying) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!isGameOver) {
    // Increase distance and score
    distance += speed;
    score = Math.floor(distance / 10);
    currentScoreEl.textContent = String(score).padStart(5, '0');

    // Chime every 100 points
    if (score > 0 && Math.floor(score / 100) > lastScoreBeep) {
      lastScoreBeep = Math.floor(score / 100);
      sound.playScore();
    }

    // Gradual fair speed increase
    speed = Math.min(13.5, 6.0 + (score / 400));

    // Spawn obstacles
    nextObstacleDistance -= speed;
    if (nextObstacleDistance <= 0) {
      createObstacle();
    }

    // Update Dino
    dino.update();

    // Update Obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      const obs = obstacles[i];
      obs.x -= speed;

      // Check collision
      if (checkCollision(dino, obs)) {
        triggerGameOver();
        break;
      }

      // Remove off-screen obstacles
      if (obs.x + obs.width < -30) {
        obstacles.splice(i, 1);
      }
    }

    // Update Particles
    updateParticles();
  }

  // Draw Elements
  updateAndDrawDecor();
  drawGround();
  drawParticles();

  // Draw Obstacles
  obstacles.forEach(obs => {
    if (boxImg.complete && boxImg.naturalWidth > 0) {
      ctx.drawImage(boxImg, obs.x, obs.y, obs.width, obs.height);
    } else {
      // Fallback box
      ctx.fillStyle = '#4ade80';
      ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    }
  });

  // Draw Dino
  dino.draw();

  animationFrameId = requestAnimationFrame(gameLoop);
}

function triggerGameOver() {
  isGameOver = true;
  sound.playHit();

  if (score > highScore) {
    highScore = score;
    localStorage.setItem('purple_dino_highscore', String(highScore));
    highScoreEl.textContent = String(highScore).padStart(5, '0');
  }

  finalScoreEl.textContent = score;
  finalBestEl.textContent = highScore;
  gameOverModal.classList.add('active');
}

function initGame() {
  stopGame();
  
  score = 0;
  distance = 0;
  speed = 6.0;
  lastScoreBeep = 0;
  obstacles = [];
  particles = [];
  nextObstacleDistance = 160;
  
  dino.y = groundY - dino.height;
  dino.vy = 0;
  dino.isGrounded = true;
  
  isGameOver = false;
  isPlaying = true;
  
  currentScoreEl.textContent = "00000";
  gameOverModal.classList.remove('active');

  // Spawn first obstacle comfortably ahead
  createObstacle();

  animationFrameId = requestAnimationFrame(gameLoop);
}

function stopGame() {
  isPlaying = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

// Restart Handler
btnRestart.addEventListener('click', () => {
  sound.playClick();
  initGame();
});

// Controls (Keyboard & Pointer)
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.key === ' ' || e.code === 'ArrowUp' || e.key === 'ArrowUp') {
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
      if (isGameOver) {
        initGame();
      } else {
        dino.jump();
      }
    }
  }
});

// Canvas Click to Jump / Restart
canvas.addEventListener('pointerdown', (e) => {
  if (currentPage === 3) {
    if (isGameOver) {
      initGame();
    } else {
      dino.jump();
    }
  }
});

// Mobile Jump Button
mobileJumpBtn.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  if (currentPage === 3) {
    if (isGameOver) {
      initGame();
    } else {
      dino.jump();
    }
  }
});
