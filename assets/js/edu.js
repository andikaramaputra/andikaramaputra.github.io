/* === Scroll Timeline Progress === */
window.addEventListener("scroll", () => {
  const section = document.querySelector("#education");
  const line = document.querySelector(".timeline-progress");

  if (!section || !line) return;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY + window.innerHeight / 2;
  const progress = Math.min(Math.max((scrollY - sectionTop) / sectionHeight, 0), 1);

  line.style.height = `${progress * sectionHeight}px`;
});
