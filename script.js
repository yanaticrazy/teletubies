let currentIndex = 0;
let autoSlide;

// Move the carousel to the next or previous slide
function moveCarousel(step) {
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Update the current index
    currentIndex = (currentIndex + step + totalItems) % totalItems;
    
    // Move the carousel to the updated index
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Restart the interval after manual navigation
    restartAutoSlide();
}

// Auto-scroll function with a 3-second interval
function startAutoSlide() {
    autoSlide = setInterval(() => {
        moveCarousel(1);
    }, 3000); // 3 seconds
}

// Restart auto-scroll timer
function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Initialize auto-slide on page load
startAutoSlide();

function showPopup(id) {
    document.getElementById(id).style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}