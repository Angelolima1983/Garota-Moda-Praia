let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides; // Loop infinito
    slides[currentSlide].classList.add('active');
}

// Inicia o carrossel com o primeiro slide visível
slides[currentSlide].classList.add('active');