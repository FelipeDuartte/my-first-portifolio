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
  event.preventDefault(); // Evita o envio padrão do formulário

  const form = event.target;

  // Coleta os dados do formulário
  const formData = new FormData(form);

  // Envia os dados para o Formspree
  fetch(form.action, {
    method: 'POST',
    body: formData,
    mode: 'no-cors'  // Ignora o CORS
  })
  .then(() => {
    alert('Mensagem enviada com sucesso!');
    form.reset(); // Limpa os campos do formulário
  })
  .catch(error => {
    alert('Ocorreu um erro ao tentar enviar a mensagem.');
    console.error(error);
  });
});