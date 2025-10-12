/* === Typing animation === */
const roles = ["Computer Technician 💻", "Tech Enthusiast 🚀", "Front-End Web Developer 🌎", "IT Supervisor 👨‍💻", "Creative Problem Solver ✨"];
let i = 0,
  j = 0,
  current = "",
  isDeleting = false;

function typeEffect() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;

  if (!isDeleting && j < roles[i].length) {
    current += roles[i][j++];
    typingEl.textContent = current;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && j > 0) {
    current = current.slice(0, --j);
    typingEl.textContent = current;
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting && j === roles[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
      setTimeout(typeEffect, 300);
    }
  }
}
typeEffect();

/* === Floating particle lights === */
const canvas = document.getElementById("heroCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let w,
    h,
    particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.radius = Math.random() * 2;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.alpha = 0.3 + Math.random() * 0.4;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(249,168,38,${this.alpha})`;
      ctx.fill();
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > w) this.speedX *= -1;
      if (this.y < 0 || this.y > h) this.speedY *= -1;
    }
  }

  for (let i = 0; i < 60; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}
