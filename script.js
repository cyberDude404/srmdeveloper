// Smooth Scroll to Flats Section
function scrollToFlats() {
    document.getElementById("flats").scrollIntoView({ behavior: "smooth" });
}

// --- Image Slider Logic ---

// Function to handle the image sliding logic for any card
function moveSlide(cardIdentifier, n) {
    const slider = document.querySelector(`.image-slider[data-card="${cardIdentifier}"]`);
    if (!slider) return;

    const slides = slider.querySelectorAll('.slider-img');
    let currentIndex = -1;

    // 1. Find the current active image's index and hide it
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            currentIndex = i;
            slides[i].classList.remove('active'); 
            break;
        }
    }

    // 2. Calculate the new index
    let newIndex = currentIndex + n;

    // 3. Loop back to the start/end if necessary
    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }

    // 4. Show the new image
    slides[newIndex].classList.add('active');
}

// --- Scroll Animation Logic ---

// Function to apply the 'show' class for scroll-based animation
// Function to apply the 'show' class for scroll-based animation
function checkScrollAnimation() {
    // Select ALL elements that should animate on scroll
    const animatedElements = document.querySelectorAll(".card, .expertise-item, .step-card"); 
    
    animatedElements.forEach(element => { // Renamed 'card' to 'element'
        // Get the element's position relative to the viewport
        const elementTop = element.getBoundingClientRect().top; 
        
        // If the top of the element is less than the inner window height minus 100px, show it
        if (elementTop < window.innerHeight - 100) {
            element.classList.add("show");
        }
    });
}

// ... (rest of your script remains the same) ...

// Initial Setup & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial Slider Setup: Set the first image of every slider as active
    const sliders = document.querySelectorAll('.image-slider');
    sliders.forEach(slider => {
        const firstImage = slider.querySelector('.slider-img');
        if (firstImage) {
            firstImage.classList.add('active');
        }
    });

    // Run animation check once immediately on load
    checkScrollAnimation();
});

// Animation on scroll: Attach the animation check to the window scroll event
window.addEventListener("scroll", checkScrollAnimation);
// ... existing JS functions (scrollToFlats, moveSlide, checkScrollAnimation) ...

// --- New Header Toggle Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // ... existing DOMContentLoaded code ...

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = mainNav.querySelectorAll('a');

    const toggleMenu = () => {
        mainNav.classList.toggle('active');
        // Optional: Add a class to the body to prevent background scrolling
        document.body.classList.toggle('menu-open'); 

        // Change icon from hamburger to X and vice-versa
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close the menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});
