document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((item) => observer.observe(item));
  } else {
    reveals.forEach((item) => item.classList.add("visible"));
  }

  const copyBtn = document.querySelector("[data-copy-ads]");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const text = "google.com, pub-9851155688771143, DIRECT, f08c47fec0942fa0";
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copied";
        setTimeout(() => {
          copyBtn.textContent = "Copy line";
        }, 1400);
      } catch (_error) {
        copyBtn.textContent = "Copy unavailable";
      }
    });
  }
});
