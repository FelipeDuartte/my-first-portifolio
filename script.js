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
document.querySelector('.form-contato').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    mode: 'no-cors' 
  })
  .then(() => {
    alert('Mensagem enviada com sucesso!');
    form.reset();
  })
  .catch(error => {
    alert('Ocorreu um erro ao tentar enviar a mensagem.');
    console.error(error);
  });
});

// Função para exibir o botão de voltar ao topo
window.addEventListener('scroll', function () {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show'); // Aparece o botão com efeito de transição
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Função para rolar até o topo suavemente ao clicar no botão
document.getElementById('scrollToTop').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Suaviza a rolagem para o topo
  });
});

window.addEventListener('load', () => {
  const video = document.querySelector('video');
  if (video) {
    video.play().catch(error => {
      console.log('Autoplay bloqueado:', error);
    });
  }
});
