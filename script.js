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

const canvas = document.getElementById("stars-canvas");
    const ctx = canvas.getContext("2d");
    let stars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars(count) {
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2,
          alpha: Math.random(),
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
      stars.forEach(star => {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      updateStars();
      requestAnimationFrame(drawStars);
    }

    function updateStars() {
      stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });
    }

    // Inicialização
    window.addEventListener("resize", () => {
      resizeCanvas();
      createStars(150);
    });

    resizeCanvas();
    createStars(150);
    drawStars();