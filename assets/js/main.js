// init AOS
AOS.init({
  duration: 700,
  once: true,
});

// Smooth scroll for nav links
document.querySelectorAll('a.nav-link[href^="#"], a.btn[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Simple contact form frontend handler (demo)
// const form = document.getElementById("contactForm");
// if (form) {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // Basic validation demo
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();
//     if (!name || !email || !message) {
//       alert("Harap lengkapi semua field.");
//       return;
//     }
//     // For now show a friendly modal/alert (hook to backend or email service later)
//     alert("Terima kasih, pesanmu sudah tercatat. (Demo) — implementasikan backend untuk mengirim email.");
//     form.reset();
//   });
// }

// Offset scroll to account for fixed navbar height
const navbarHeight = document.querySelector(".navbar").offsetHeight;

document.querySelectorAll('a.nav-link[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - navbarHeight + 10; // jarak +10px agar lega
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  });
});
