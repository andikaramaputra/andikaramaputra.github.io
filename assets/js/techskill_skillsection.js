/* === Glow Pulse Animation === */
const techItems = document.querySelectorAll(".tech-item");
techItems.forEach((item, i) => {
  const percent = item.getAttribute("data-percent");
  item.style.setProperty("--glow-strength", percent / 100);
  setInterval(() => {
    item.style.boxShadow = `0 0 ${percent / 2}px rgba(249,168,38,${0.2 + Math.random() * 0.4})`;
  }, 800 + i * 150);
});
