document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn');

    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.2)';
        btn.style.transition = 'transform 0.3s ease';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });

    const techImage = document.querySelector('.tech-image');

    techImage.addEventListener('mouseenter', () => {
        techImage.style.transform = 'rotate(360deg)';
        techImage.style.transition = 'transform 1s ease';
    });
});