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
            if (abstractDiv.style.display === 'block') {
                abstractDiv.style.display = 'none';
                this.textContent = 'Show Abstract';
            } else {
                abstractDiv.style.display = 'block';
                this.textContent = 'Hide Abstract';
            }
        });
    });
});
