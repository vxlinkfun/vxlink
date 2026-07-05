const items = document.querySelectorAll(".btn-main, .btn-link, .featured, .details article");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if(entry.isIntersecting){
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 60);
    }
  });
}, { threshold: 0.15 });

items.forEach(item => {
  item.classList.add("hidden");
  observer.observe(item);
});

const style = document.createElement("style");
style.textContent = `
  .hidden{
    opacity:0;
    transform:translateY(16px);
    transition:opacity .5s ease, transform .5s ease;
  }

  .show{
    opacity:1;
    transform:translateY(0);
  }
`;
document.head.appendChild(style);
