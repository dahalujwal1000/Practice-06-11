// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.setAttribute('aria-label', 'Open menu');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');

    // We'll insert this in the navbar for mobile view
    // For simplicity, we'll just log that the DOM is loaded
    console.log('DOM loaded');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to current nav link based on URL
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.navbar-menu a');
    const menuLength = menuItems.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItems[i].href === currentLocation) {
            menuItems[i].classList.add('active');
        }
    }

    // Handle language switcher (placeholder)
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would toggle language
            alert('Language switching functionality would be implemented here');
        });
    }
});