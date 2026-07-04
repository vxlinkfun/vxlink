document.querySelectorAll("a[href^='http']").forEach((link) => {
  link.addEventListener("click", () => {
    link.style.transform = "scale(0.98)";
    setTimeout(() => {
      link.style.transform = "";
    }, 180);
  });
});

const cards = document.querySelectorAll(".link-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 80);
    }
  });
}, { threshold: 0.15 });

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(18px)";
  card.style.transition = "opacity .5s ease, transform .5s ease";
  observer.observe(card);
});

const style = document.createElement("style");
style.innerHTML = `
  .link-card.show{
    opacity:1 !important;
    transform:translateY(0) !important;
  }
`;
document.head.appendChild(style);
