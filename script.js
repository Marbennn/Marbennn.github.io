document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectName = this.querySelector('h3').textContent;
            alert(`You clicked on ${projectName}`);
        });
    });
});
