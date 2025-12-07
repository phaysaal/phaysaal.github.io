document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const toggleButtons = document.querySelectorAll('.toggle-abstract');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const abstractDiv = this.nextElementSibling;
            abstractDiv.classList.toggle('show');

            if (abstractDiv.classList.contains('show')) {
                this.textContent = 'Hide Abstract';
            } else {
                this.textContent = 'Show Abstract';
            }
        });
    });
});
