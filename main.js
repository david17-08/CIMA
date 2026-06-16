// Menú móvil
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');

if (hamburger && navbar) {
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a, .nav-cta').forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('open'));
  });
}

// Formulario de contacto
const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');

if (form && toast) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toast.classList.add('show');
    form.reset();
    setTimeout(() => toast.classList.remove('show'), 4000);
  });
}