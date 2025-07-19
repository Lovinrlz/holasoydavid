//Aplicando efecto sticky con glass a la seccion header
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//Slider inicio
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3500);
});

//Efecto cambio de palabra
const words = ["frontend", "pet", "music"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const wordSpan = document.getElementById("dynamic-word");
const typingSpeed = 100; // velocidad de escribir
const deletingSpeed = 60; // velocidad de borrar
const delayBetweenWords = 2000; // espera antes de borrar

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
    wordSpan.textContent = currentWord.substring(0, charIndex);
  } else {
    charIndex++;
    wordSpan.textContent = currentWord.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    // Pausa antes de borrar
    setTimeout(() => {
      isDeleting = true;
      typeEffect();
    }, delayBetweenWords);
    return;
  } else if (isDeleting && charIndex === 0) {
    // Cambiar a la siguiente palabra
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}
typeEffect(); //Iniciar efecto

// Efecto scroll para toda la web
const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("fx-reveal-visible");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll(".fx-reveal").forEach(function (r) {
  observer.observe(r);
});

//Codigo para envio de correo con js

const form = document.getElementById("formContacto");
const boton = document.getElementById("enviarBtn");
const mensaje = document.getElementById("mensajeExito");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que recargue

  const datos = new FormData(form);

  boton.disabled = true;
  boton.textContent = "Enviando...";

  fetch("https://formsubmit.co/david2291rlz@gmail.com", {
    method: "POST",
    body: datos,
  })
    .then((response) => {
      if (response.ok) {
        boton.textContent = "¡Gracias!";
        boton.style.backgroundColor = "#2ecc71";
        mensaje.style.display = "block";
        form.reset(); // Limpia los campos
      } else {
        boton.textContent = "Error";
        boton.style.backgroundColor = "#e74c3c";
      }
    })
    .catch((error) => {
      boton.textContent = "Error";
      boton.style.backgroundColor = "#e74c3c";
      console.error("Error al enviar:", error);
    });
});

// Funcion para abrir y cerrar menu hamburguesa (NO TOCAR)
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const overlay = document.querySelector("#overlay");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  overlay.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  overlay.classList.remove("visible");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("visible");
  overlay.classList.remove("visible");
});
// Fin de funcion.

// Efecto jelly en los botones
function loopJellyAnimation() {
  const botones = document.querySelectorAll(".boton1, .boton2, button");

  setInterval(() => {
    botones.forEach((btn) => {
      btn.classList.remove("jelly-animation"); // Reinicia si aún está
      void btn.offsetWidth; // Forzar reflow
      btn.classList.add("jelly-animation");
    });
  }, 4000); // Cada 10 segundos
}

document.addEventListener("DOMContentLoaded", loopJellyAnimation);
