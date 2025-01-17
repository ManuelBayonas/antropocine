// Obtener elementos del slider
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0; // Índice del slide activo

// Función para mostrar un slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        const isActive = i === index;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', !isActive);
    });
}

// Evento para botón "Next"
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // Ciclo infinito
    showSlide(currentSlide);
});

// Evento para botón "Prev"
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Ciclo infinito
    showSlide(currentSlide);
});

// Mostrar el primer slide al cargar
showSlide(currentSlide);

