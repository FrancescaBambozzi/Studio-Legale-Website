let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically advance the carousel every 5 seconds
setInterval(nextSlide, 5000);
