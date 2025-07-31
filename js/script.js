// Toggle mobile menu visibility and body scroll
function toggleMenu(toggle, navLinks) {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = toggle.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu and restore body scroll
function closeMenu(toggle, navLinks) {
    toggle.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize mobile navigation menu
function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener('click', () => toggleMenu(toggleBtn, nav));

    links.forEach(link => {
        link.addEventListener('click', () => closeMenu(toggleBtn, nav));
    });
}

// Initialize flatpickr with mobile tweak
function initDatePicker() {
    flatpickr(".date-input", {
        dateFormat: "m/d/Y",
        disableMobile: true,
        onOpen: function() {
            if (window.innerWidth < 768) {
                this.calendarContainer.style.transform = "scale(1.3)";
                this.calendarContainer.style.transformOrigin = "top center";
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initDatePicker();
});
