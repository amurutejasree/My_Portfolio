document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icons li');
    socialIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('show');
        }, index * 200); // Delay each icon by 200 milliseconds
    });
});
