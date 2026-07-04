const cards = document.querySelectorAll(".btn-main, .btn-link, .sabores");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if(entry.isIntersecting){
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 70);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.classList.add("hidden");
  observer.observe(card);
});

const style = document.createElement("style");
style.textContent = `
  .hidden{
    opacity:0;
    transform:translateY(18px);
    transition:opacity .55s ease, transform .55s ease;
  }

  .show{
    opacity:1;
    transform:translateY(0);
  }
`;
document.head.appendChild(style);
