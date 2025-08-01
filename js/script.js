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

// Validate individual fields
function validateInputs(name, email, dob, message, genderSelected) {
    let isValid = true;

    if (!name.value.trim()) {
        alert('Name is required');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        alert('Email is required');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email');
        isValid = false;
    }

    if (!dob.value.trim()) {
        alert('Date of birth is required');
        isValid = false;
    }

    if (!message.value.trim()) {
        alert('Message is required');
        isValid = false;
    }

    if (!genderSelected) {
        alert('Please select a gender');
        isValid = false;
    }

    return isValid;
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

// Initialize flatpickr (calendar: date input) with mobile tweak
function initDatePicker() {
    const dateInput = document.querySelectorAll('.date-input');
    if (dateInput.length === 0) return;

    dateInput.forEach(input => {
        flatpickr(input, {
            dateFormat: "m/d/Y",
            disableMobile: true,
            onOpen: function() {
                if (window.innerWidth < 768) {
                    this.calendarContainer.style.transform = "scale(1.3)";
                    this.calendarContainer.style.transformOrigin = "top center";
                }
            }
        });
    });
}

// Initialize form
function initForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const dob = document.getElementById('dob');
    const message = document.getElementById('message');
    const submitBtn = document.querySelector('.submit-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const genderSelected = document.querySelectorAll('input[name="gender"]:checked');

        if (validateInputs(name, email, dob, message, genderSelected)) {
            alert('Form submitted successfully!');
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function(e) {
    initMobileMenu();
    initDatePicker();
    initForm();
});
