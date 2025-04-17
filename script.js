// Função para observar e adicionar animações quando os elementos entram na tela
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
  createObserver('.hidden-certificados', 'show-certificados');
  
  // Função para enviar o formulário usando Formspree
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
createObserver('.hidden-certificados', 'show-certificados');

// Função para enviar o formulário usando Formspree
document.querySelector('.form-contato').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      alert('Mensagem enviada com sucesso!');
      form.reset();
    } else {
      alert('Ocorreu um erro, tente novamente.');
    }
  })
  .catch(error => {
    alert('Ocorreu um erro ao tentar enviar a mensagem.');
    console.error(error);
  });
});

