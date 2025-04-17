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
const contatoForm = document.querySelector('.form-contato');

if (contatoForm) {
  contatoForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(contatoForm);

    try {
      const response = await fetch(contatoForm.action, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        contatoForm.reset();
      } else {
        alert('Ocorreu um erro ao enviar a mensagem. Verifique os dados e tente novamente.');
        console.error('Erro ao enviar:', await response.text());
      }
    } catch (error) {
      alert('Erro de conexão. Tente novamente mais tarde.');
      console.error('Erro na requisição:', error);
    }
  });
}