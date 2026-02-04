// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    mobileNav.style.display = expanded ? "none" : "block";
    mobileNav.setAttribute("aria-hidden", String(expanded));
  });

  // Close menu on link click
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.style.display = "none";
      mobileNav.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close if clicked outside
  document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && !toggle.contains(e.target)) {
      mobileNav.style.display = "none";
      mobileNav.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();