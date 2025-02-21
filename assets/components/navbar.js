let lastScrollPosition = window.pageYOffset;
let isScrollingDown = false;

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    // Determine scroll direction
    isScrollingDown = currentScrollPosition > lastScrollPosition;
    
    // Add or remove 'hidden' class based on scroll direction
    if (isScrollingDown && currentScrollPosition > 50) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    
    lastScrollPosition = currentScrollPosition;
});