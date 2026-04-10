document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.film-container');

    containers.forEach(container => {
        const img = container.querySelector('img');
        const infoDiv = container.querySelector('.info-text');
        const description = img.getAttribute('data-desc');

        // Au survol du conteneur
        container.addEventListener('mouseenter', () => {
            img.style.transform = "scale(1.1)";
            // On injecte le texte et on affiche le bloc
            infoDiv.textContent = description;
            infoDiv.style.display = "block"; 
            // Un petit délai pour l'animation d'opacité
            setTimeout(() => { infoDiv.style.opacity = "1"; }, 10);
        });

        // Quand la souris quitte le conteneur
        container.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1)";
            infoDiv.style.opacity = "0";
            // On cache le bloc après l'animation pour libérer l'espace
            setTimeout(() => { 
                if (infoDiv.style.opacity === "0") {
                    infoDiv.style.display = "none";
                }
            }, 400);
        });
    });
});