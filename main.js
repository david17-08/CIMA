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
// const form = document.getElementById('contactForm');
// const toast = document.getElementById('toast');

// if (form && toast) {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     toast.classList.add('show');
//     form.reset();
//     setTimeout(() => toast.classList.remove('show'), 4000);
//   });
// }

//mensaje whatsapp

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;
    let are = document.getElementById("area").value;
    let numero = "593961134604"; // tu WhatsApp con código país

    let texto = 
    `Nueva consulta desde la página web:

      👤 Nombre: ${nombre}
      📞 Teléfono: ${telefono}
      📌 Área: ${area}

      📝 Consulta:
      ${mensaje}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});