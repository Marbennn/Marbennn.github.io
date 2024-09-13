document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Light Mode';
        } else {
            themeToggle.textContent = 'Dark Mode';
        }
    });
});
