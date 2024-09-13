document.querySelectorAll('.tab-link').forEach(tabLink => {
    tabLink.addEventListener('click', function(e) {
        e.preventDefault();
        const tabId = this.getAttribute('data-tab');

        document.querySelectorAll('.tab-content').forEach(tabContent => {
            tabContent.style.display = 'none';
        });

        document.getElementById(tabId).style.display = 'block';
    });
});

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        themeToggleBtn.textContent = 'Light Mode';
    }
});
