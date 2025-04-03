
// Função genérica para criar um IntersectionObserver e aplicar classes de animação
function createObserver(elementsSelector, animationClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
            } else {
                entry.target.classList.remove(animationClass);
            }
        });
    });

    document.querySelectorAll(elementsSelector).forEach((element) => observer.observe(element));
}

// Observadores para animações de seções específicas
createObserver('.hidden', 'show');
createObserver('.hidden-competencias', 'show-competencias');

