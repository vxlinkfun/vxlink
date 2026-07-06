const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const toTop = document.getElementById("toTop");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealItems = document.querySelectorAll(".card, .step, .dashboard, .price-card, .cta-box");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
    }
  });
}, { threshold: 0.14 });

revealItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(18px)";
  item.style.transition = "opacity .55s ease, transform .55s ease";
  observer.observe(item);
});

const style = document.createElement("style");
style.innerHTML = `.revealed{opacity:1!important;transform:translateY(0)!important}`;
document.head.appendChild(style);
