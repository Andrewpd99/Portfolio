// JavaScript for handling tab functionality
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Remove active class from all tabs and tab contents
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to the clicked tab and corresponding tab content
        this.classList.add('active');
        document.querySelector(this.getAttribute('href')).classList.add('active');
    });
});