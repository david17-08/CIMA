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

// Formulario de contacto WhatsApp

const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

if(contactForm){

  contactForm.addEventListener("submit", function(e){
      e.preventDefault();

      let nombre = document.getElementById("nombre").value;
      let telefono = document.getElementById("telefono").value;
      let mensaje = document.getElementById("mensaje").value;
      let area = document.getElementById("area").value;

      let numeroWhatsApp = "593961134604"; 


      if(nombre === "" || mensaje === ""){
          alert("Por favor complete los campos obligatorios");
          return;
      }


      let texto = 
  `Nueva consulta desde la página web CIMA ⚖️

  👤 Nombre: ${nombre}

  📞 Teléfono: ${telefono}

  📌 Área:
  ${area}

  📝 Consulta:
  ${mensaje}`;


      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

      window.open(url, "_blank");


      // limpiar formulario
      contactForm.reset();


      // mostrar mensaje
      if(toast){
          toast.classList.add('show');

          setTimeout(() => {
              toast.classList.remove('show');
          },4000);
      }

  });
}