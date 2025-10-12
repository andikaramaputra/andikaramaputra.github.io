// to.js
(() => {
  "use strict";

  // Ganti URL ini dengan URL Google Script Anda jika perlu
  const ENDPOINT = "https://script.google.com/macros/s/AKfycbxRMhRWVbHmoqeh1PcIIzOxCEBrko4mv7kYKggUan9cM-Lcpjr1FLXN3Y22XgMtBptV/exec";

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (!form) {
      // Jika element form tidak ditemukan, hentikan (mencegah error di halaman lain)
      return;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Ambil nilai (trim untuk kebersihan)
      const data = {
        name: (form.name?.value || "").trim(),
        email: (form.email?.value || "").trim(),
        message: (form.message?.value || "").trim(),
      };

      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        // coba parse JSON, kalau gagal buat fallback berdasarkan status HTTP
        let result;
        try {
          result = await res.json();
        } catch (jsonErr) {
          result = { result: res.ok ? "success" : "error" };
        }

        if (result && result.result === "success") {
          showToast("✅ Message sent successfully!", "success");
          form.reset();
        } else {
          showToast("⚠️ Failed to send message. Please try again.", "error");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        showToast("❌ Connection error. Please check your internet.", "error");
      }
    });
  });

  // Toast helper — aman jika elemen toast tidak ada (akan fallback ke alert)
  function showToast(message, type) {
    const toast = document.getElementById("toast");
    if (!toast) {
      // fallback minimal supaya user tetap tahu
      alert(message);
      return;
    }

    // isi teks
    toast.textContent = message;

    // reset class lalu tambahkan kelas sesuai tipe
    toast.className = "toast-message";
    if (type === "success") toast.classList.add("toast-success");
    else if (type === "error") toast.classList.add("toast-error");

    // tampilkan dengan animasi (CSS harus men-support .show)
    toast.classList.add("show");

    // clear timeout sebelumnya jika ada, lalu set timeout baru
    if (window.__toastTimeout) clearTimeout(window.__toastTimeout);
    window.__toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }
})();
