// ===========================
// VXLink - Oi Closet
// script.js
// ===========================

// Animação de entrada
window.addEventListener("load", () => {

    document.querySelectorAll(".hero, .btn, .item").forEach((el, index) => {

        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";

        setTimeout(() => {
            el.style.transition = ".6s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 120);

    });

});

// Clique Premium
document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(.97)";

        setTimeout(() => {
            btn.style.transform = "";
        }, 150);

        if (navigator.vibrate) {
            navigator.vibrate(25);
        }

    });

});

// Revela elementos ao rolar
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: .15
});

document.querySelectorAll(".item").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".6s";

    observer.observe(item);

});

// Parallax no fundo
window.addEventListener("scroll", () => {

    const bg = document.querySelector(".bg");

    bg.style.transform = `translateY(${window.scrollY * 0.15}px)`;

});

// Brilho ao passar o mouse (desktop)
document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mousemove", e => {

        const rect = btn.getBoundingClientRect();

        btn.style.backgroundPosition =
            `${e.clientX - rect.left}px ${e.clientY - rect.top}px`;

    });

});

// Ano automático no rodapé (caso exista um span#year)
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
