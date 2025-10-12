/* === Circle skill animation === */
const circles = document.querySelectorAll(".circle-skill");
function animateSkills() {
  circles.forEach((circle) => {
    const percent = circle.getAttribute("data-percent");
    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= percent) clearInterval(interval);
      else {
        progress++;
        circle.style.background = `conic-gradient(var(--accent) ${progress * 3.6}deg, rgba(255,255,255,0.1) ${progress * 3.6}deg)`;
        circle.textContent = progress + "%";
      }
    }, 20);
  });
}

window.addEventListener("scroll", () => {
  const section = document.querySelector("#skills");
  if (section && window.scrollY + window.innerHeight > section.offsetTop + 150) {
    animateSkills();
  }
});
