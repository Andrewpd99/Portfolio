// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    this.reset();
});

// Header Menu list when clicked
document.getElementById('hamburger-menu').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

// Close nav menu when clicking outside of it
document.addEventListener('click', function(e) {
    var navMenu = document.getElementById('nav-menu');
    var hamburgerMenu = document.getElementById('hamburger-menu');
    if (!navMenu.contains(e.target) && !hamburgerMenu.contains(e.target) && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
    }
});

// Hero text writer
document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Software Engineer", "AI Enthusiast", "Full Stack Developer", "Daily LeetCoder"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    const animatedText = document.getElementById('animated-text');
    const prefix = "<span class='prefix'>I am a </span>";

    function type() {
        if (count === texts.length) {
            count = 0; // Reset to start over
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        animatedText.innerHTML = prefix + '<span class="highlight">' + letter + '</span>';

        if (letter.length === currentText.length) {
            // Pause before starting to backspace
            setTimeout(() => {
                backspace();
            }, 750); // Adjust the pause time as needed
        } else {
            setTimeout(type, 60); // Typing speed
        }
    }

    function backspace() {
        letter = currentText.slice(0, --index);
        animatedText.innerHTML = prefix + '<span class="highlight">' + letter + '</span>';

        if (letter.length === 0) {
            count++;
            index = 0;
            setTimeout(type, 200); // Delay before typing the next text
        } else {
            setTimeout(backspace, 45); // Backspacing speed
        }
    }

    type(); // Start the typing animation
});

// Get the trigger element
var trigger = document.getElementById("resume-trigger");

// When the user clicks on the trigger, open the PDF in a new tab
trigger.onclick = function() {
    window.open('Andrew_Dickey_Software_Engineer_Resume.pdf', '_blank');
}