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
document.querySelector('#contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const name = encodeURIComponent(document.querySelector('#name').value);
    const email = encodeURIComponent(document.querySelector('#email').value);
    const message = encodeURIComponent(document.querySelector('#message').value);

    // Set the email recipient
    const recipient = 'Andrewpd99@hotmail.com'; 

    // Create the mailto link
    const mailtoLink = `mailto:${recipient}?subject=Messaged From Portfolio&body=${message}%0A%0AKind Regards,%0A${name}`;

    // Open the default email client
    window.location.href = mailtoLink;
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
    const texts = ["Software Engineer","Python Developer", "AI Enthusiast", "Full Stack Developer", "Data Engineer"];
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

// Resume - pdf viewer
// Get the trigger element
var trigger = document.getElementById("resume-trigger");
// When the user clicks on the trigger, open the PDF in a new tab
trigger.onclick = function() {
    window.open('Andrew_Dickey_Software_Engineer_Resume.pdf', '_blank');
}


// Creates the hero 0s/1s animation
const matrixPopups = document.getElementById('matrix-popups');

function createPopup() {
    const popup = document.createElement('div');
    popup.className = 'matrix-popup';
    popup.textContent = Math.random() > 0.5 ? '1' : '0';
    
    // Randomize the position within the viewport
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
    
    // Append the popup to the container
    matrixPopups.appendChild(popup);
    
    // Remove the popup after animation is complete
    popup.addEventListener('animationend', () => {
        matrixPopups.removeChild(popup);
    });
}

// Create popups more frequently
setInterval(createPopup, 40); // Adjust the interval for more frequent popups
