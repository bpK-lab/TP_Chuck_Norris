document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    const infobulle = document.getElementById('infobulle');

    images.forEach(img => {
        // Quand la souris entre sur l'image
        img.addEventListener('mouseover', (e) => {
            const info = img.getAttribute('data-info');
            if (info) {
                infobulle.textContent = info;
                infobulle.style.display = 'block';
            }
        });

        // Quand la souris bouge sur l'image (pour que l'info suive le curseur)
        img.addEventListener('mousemove', (e) => {
            infobulle.style.left = e.pageX + 15 + 'px';
            infobulle.style.top = e.pageY + 15 + 'px';
        });

        // Quand la souris quitte l'image
        img.addEventListener('mouseout', () => {
            infobulle.style.display = 'none';
        });
    });
});