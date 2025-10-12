/* === Counter Animation === */
const counters = document.querySelectorAll(".counter");
const speed = 150;

const animateCounters = () => {
  counters.forEach((counter) => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(update, 25);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
};

window.addEventListener("scroll", () => {
  const trigger = document.querySelector("#about");
  if (trigger && window.scrollY + window.innerHeight > trigger.offsetTop + 100) {
    animateCounters();
  }
});
