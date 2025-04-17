function createObserver(selector, animationClass) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(animationClass, entry.isIntersecting);
    });
  });

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}

// Ativa os observadores de animações
createObserver('.hidden', 'show');
createObserver('.hidden-competencias', 'show-competencias');
createObserver('.hidden-certificados', 'show-certificados');

// Lida com o envio do formulário de contato via Formspree
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