// --- CONFIGURATION ---
const TEXTURE_URL = 'images/Texturelabs_Glass_135St.png';

const answers = [
  "IT IS\nCERTAIN", "DECIDEDLY\nSO", "WITHOUT\nA DOUBT",
  "YES\nDEFINITELY", "YOU MAY\nRELY ON IT", "AS I\nSEE IT, YES",
  "MOST\nLIKELY", "OUTLOOK\nGOOD", "YES", "SIGNS POINT\nTO YES",
  "REPLY HAZY\nTRY AGAIN", "ASK AGAIN\nLATER", "BETTER NOT\nTELL YOU",
  "CANNOT\nPREDICT", "CONCENTRATE\nAND ASK", "DON'T\nCOUNT ON IT",
  "MY REPLY\nIS NO", "MY SOURCES\nSAY NO", "OUTLOOK\nNOT SO GOOD",
  "VERY\nDOUBTFUL"
];

const shelf = document.getElementById('shelf');
const cubbyData = [
  { title: "Project 1", content: "Details about the first project...", color: "#ff5f5f" },
  { title: "Project 2", content: "Details about the second project...Nam et risus placerat, bibendum metus ac, dictum odio. Nullam non molestie ligula. Proin tincidunt tincidunt sem, nec tempor magna commodo a. Praesent quam massa, consectetur pharetra sapien a, imperdiet volutpat dui. Nam non libero tellus. Ut aliquam blandit mauris, vel dignissim ipsum posuere tristique. Donec sit amet massa non massa feugiat pharetra. Suspendisse vitae velit enim. Maecenas commodo urna lacus, in consequat sapien placerat vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis consequat justo, nec consectetur felis ornare a. Praesent ultricies urna eu pulvinar aliquam. Donec luctus ipsum augue. Sed non lacinia lorem, sed fringilla arcu. Quisque ac elementum neque, in ultricies dui. Nam et risus placerat, bibendum metus ac, dictum odio. Nullam non molestie ligula. Proin tincidunt tincidunt sem, nec tempor magna commodo a. Praesent quam massa, consectetur pharetra sapien a, imperdiet volutpat dui. Nam non libero tellus. Ut aliquam blandit mauris, vel dignissim ipsum posuere tristique. Donec sit amet massa non massa feugiat pharetra. Suspendisse vitae velit enim. Maecenas commodo urna lacus, in consequat sapien placerat vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis consequat justo, nec consectetur felis ornare a. Praesent ultricies urna eu pulvinar aliquam. Donec luctus ipsum augue. Sed non lacinia lorem, sed fringilla arcu. Quisque ac elementum neque, in ultricies dui. Nam et risus placerat, bibendum metus ac, dictum odio. Nullam non molestie ligula. Proin tincidunt tincidunt sem, nec tempor magna commodo a. Praesent quam massa, consectetur pharetra sapien a, imperdiet volutpat dui. Nam non libero tellus. Ut aliquam blandit mauris, vel dignissim ipsum posuere tristique. Donec sit amet massa non massa feugiat pharetra. Suspendisse vitae velit enim. Maecenas commodo urna lacus, in consequat sapien placerat vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis consequat justo, nec consectetur felis ornare a. Praesent ultricies urna eu pulvinar aliquam. Donec luctus ipsum augue. Sed non lacinia lorem, sed fringilla arcu. Quisque ac elementum neque, in ultricies dui. Nam et risus placerat, bibendum metus ac, dictum odio. Nullam non molestie ligula. Proin tincidunt tincidunt sem, nec tempor magna commodo a. Praesent quam massa, consectetur pharetra sapien a, imperdiet volutpat dui. Nam non libero tellus. Ut aliquam blandit mauris, vel dignissim ipsum posuere tristique. Donec sit amet massa non massa feugiat pharetra. Suspendisse vitae velit enim. Maecenas commodo urna lacus, in consequat sapien placerat vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis consequat justo, nec consectetur felis ornare a. Praesent ultricies urna eu pulvinar aliquam. Donec luctus ipsum augue. Sed non lacinia lorem, sed fringilla arcu. Quisque ac elementum neque, in ultricies dui. Nam et risus placerat, bibendum metus ac, dictum odio. Nullam non molestie ligula. Proin tincidunt tincidunt sem, nec tempor magna commodo a. Praesent quam massa, consectetur pharetra sapien a, imperdiet volutpat dui. Nam non libero tellus. Ut aliquam blandit mauris, vel dignissim ipsum posuere tristique. Donec sit amet massa non massa feugiat pharetra. Suspendisse vitae velit enim. Maecenas commodo urna lacus, in consequat sapien placerat vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis consequat justo, nec consectetur felis ornare a. Praesent ultricies urna eu pulvinar aliquam. Donec luctus ipsum augue. Sed non lacinia lorem, sed fringilla arcu. Quisque ac elementum neque, in ultricies dui. ", color: "#5fffaf" },
  // ... fill in for all 16
  { title: "Magic 8 Ball", content: "The future is cloudy.", color: "#000" }
];
for (let i = 0; i < 16; i++) {
  const cubby = document.createElement('button'); // Change from 'div' to 'button'
  cubby.className = 'cubby';
  cubby.setAttribute('aria-label', `View details for item ${i + 1}`);
  // Inside your for loop:
  cubby.dataset.index = i;

  // Base faces
  let contentHtml = `<div class="face back"></div><div class="face top"></div><div class="face bottom"></div><div class="face left"></div><div class="face right"></div><div class="face front"></div>`;

  if (i === 15) {
    // Inject the Magic 8 Ball into the last cubby
    cubby.innerHTML = contentHtml + `
      <div class="content" style="background:none; box-shadow:none;">
        <div class="magic-8-ball" id="eight-ball">
          <div class="ball-window" id="ball-answer">
            <span class="number-8">8</span>
          </div>
        </div>
      </div>`;
  } else {
    // Normal content for other cubbies
    cubby.innerHTML = contentHtml + `<div class="content">${i + 1}</div>`;
  }

  shelf.appendChild(cubby);
}

// Logic for clicking the 8 ball
const ball = document.getElementById('eight-ball');
const display = document.getElementById('ball-answer');

if (ball) {
  ball.addEventListener('click', () => {
    // Shake effect (CSS class could be added here)
    display.style.opacity = '0';

    setTimeout(() => {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      display.innerHTML = randomAnswer.replace('\n', '<br>');
      display.style.opacity = '1';
    }, 300);
  });
}

// -- 2. Canvas Setup --
const canvas = document.getElementById('erase-canvas');
const ctx = canvas.getContext('2d');
const textureImg = new Image();
textureImg.src = TEXTURE_URL;
textureImg.crossOrigin = "anonymous";

function initCtx() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 1. Draw the "Glass" Background
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 0.95;
  ctx.fillStyle = 'rgba(255,255, 255, 1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Draw the Texture Pattern
  if (textureImg.complete) {
    const pattern = ctx.createPattern(textureImg, 'repeat');
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.globalAlpha = 0.4;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  // 3. Draw the ERASEABLE TITLE
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = "black";
  const fontSize = Math.max(60, canvas.width * 0.17);
  const fontFamily = "'Rubik Spray Paint', sans-serif";
  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Draw the text in the center
  ctx.fillText("Reckless", canvas.width / 2, canvas.height / 2.8);
  ctx.fillText("Abandon", canvas.width / 2, canvas.height / 1.4);

  // 4. Set up the Eraser Mode
  // From here on, everything we draw "cuts holes" in what we just painted
  ctx.globalCompositeOperation = 'destination-out';
  ctx.globalAlpha = 1.0;
}


Promise.all([
  textureImg.decode(), // Ensures image is ready
  document.fonts.ready // Ensures all CSS fonts are ready
]).then(() => {
  initCtx();
});
window.addEventListener('resize', initCtx);

// -- 3. Optimized Erasing Logic --
// --- CONFIG FOR SPIKEY BRUSH ---
const CORE_SIZE = 80;      // Solid center
const MAX_SPIKE_LEN = 4;  // How far spikes can shoot out
const SPIKE_DENSITY = 50;   // Number of spikes per stamp (keep lower for "sharpness")

let lastPoint = null;

function erase(currX, currY) {
  if (!lastPoint) {
    lastPoint = { x: currX, y: currY };
    return;
  }

  const dist = Math.hypot(currX - lastPoint.x, currY - lastPoint.y);
  const angle = Math.atan2(currY - lastPoint.y, currX - lastPoint.x);

  ctx.globalCompositeOperation = 'destination-out';

  // --- 1. THE SOLID CORE ---
  ctx.globalAlpha = 1.0;
  ctx.lineWidth = CORE_SIZE;
  ctx.lineCap = 'round';

  ctx.beginPath();
  ctx.moveTo(lastPoint.x, lastPoint.y);
  ctx.lineTo(currX, currY);
  ctx.stroke();

  // --- 2. THE SPIKES ---
  // We only need to draw spikes every 5 pixels to keep them looking sharp/distinct
  for (let i = 0; i < dist; i += 5) {
    const x = lastPoint.x + (Math.cos(angle) * i);
    const y = lastPoint.y + (Math.sin(angle) * i);

    for (let j = 0; j < SPIKE_DENSITY; j++) {
      // Pick a random angle around the brush
      const theta = Math.random() * 2 * Math.PI;

      // Random spike length
      const spikeLen = Math.random() * MAX_SPIKE_LEN;

      // Start at the edge of the core
      const startX = x + (CORE_SIZE / 2) * Math.cos(theta);
      const startY = y + (CORE_SIZE / 2) * Math.sin(theta);

      // End at the outer spike tip
      const endX = x + (CORE_SIZE / 2 + spikeLen) * Math.cos(theta);
      const endY = y + (CORE_SIZE / 2 + spikeLen) * Math.sin(theta);

      ctx.globalAlpha = 1.0;
      ctx.lineWidth = Math.random() * 3; // Varying thickness for "sharpness"

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
  }

  lastPoint = { x: currX, y: currY };
}
// -- 4. Interaction Logic --
const scene = document.getElementById('scene');
let rotX = -15, rotY = 30, startX, startY, isMouseDown = false;

function rotateShelf(x, y) {
  rotY += (x - startX) * 0.4;
  rotX -= (y - startY) * 0.4;
  rotX = Math.max(-80, Math.min(80, rotX));
  scene.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  startX = x; startY = y;
}

// Throttling the move event can also help performance
let mouseX = 0, mouseY = 0;

canvas.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  requestAnimationFrame(() => {
    erase(mouseX, mouseY);
  });

  if (isMouseDown) rotateShelf(mouseX, mouseY);
});

function handleInteraction(index) {
  if (index === 15) {
    shakeEightBall();
  } else {
    openOverlay(index);
  }
}

document.querySelectorAll('.cubby').forEach((btn, i) => {
  btn.addEventListener('click', () => handleInteraction(i));
});

// 3. Mouse "Hit-Test" logic (as we discussed)
canvas.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.clientX;
  startY = e.clientY;
  lastPoint = { x: e.clientX, y: e.clientY };

  canvas.style.pointerEvents = 'none';
  const clickedElement = document.elementFromPoint(e.clientX, e.clientY);
  canvas.style.pointerEvents = 'auto';

  const cubby = clickedElement.closest('.cubby');
  if (cubby) {
    const index = parseInt(cubby.dataset.index);
    handleInteraction(index);
  }
});

let lastFocusedElement;

function openOverlay(index) {
  document.body.classList.add('modal-open'); // Lock background

  // 1. Remember where the user was before opening
  lastFocusedElement = document.activeElement;

  const data = cubbyData[index] || { title: "Empty", content: "Nothing here!" };
  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-body').innerText = data.content;

  const overlay = document.getElementById('overlay');
  overlay.classList.add('active');

  // 2. Move focus to the close button (or title) so screen readers start reading
  setTimeout(() => {
    document.getElementById('close-btn').focus();
  }, 100);
}

function closeOverlay() {
  document.body.classList.remove('modal-open'); // Unlock background

  document.getElementById('overlay').classList.remove('active');

  // 3. Send focus back to where it was (crucial for keyboard users!)
  if (lastFocusedElement) lastFocusedElement.focus();
}
// Ensure these listeners are active
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling
            closeOverlay();
        });
    }

    // Standard UX: Click the dark area to close
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeOverlay();
            }
        });
    }
});


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    const overlay = document.getElementById('overlay');
    if (overlay.classList.contains('active')) {
      closeOverlay();
    }
  }
});

window.addEventListener('mouseup', () => {
  isMouseDown = false;
  lastPoint = null;
});

// Touch Support
canvas.addEventListener('touchstart', (e) => {
  const t = e.touches[0];
  lastPoint = { x: t.clientX, y: t.clientY };
});

canvas.addEventListener('touchmove', (e) => {
  const t = e.touches[0];
  erase(t.clientX, t.clientY);
}, { passive: false });

canvas.addEventListener('touchend', () => lastPoint = null);

function shakeEightBall() {
  const ball = document.getElementById('eight-ball');
  const display = document.getElementById('ball-answer');
  if (!ball || !display) return;

  ball.style.transform = "scale(0.8) rotate(15deg)";
  display.style.opacity = '0';

  setTimeout(() => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    display.innerHTML = randomAnswer.replace('\n', '<br>');
    display.style.opacity = '1';
    ball.style.transform = "scale(1) rotate(0deg)";
  }, 300);
}