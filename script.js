/* =========================================
   INTERAÇÕES DO PORTFÓLIO
========================================= */

// Brilho discreto que acompanha o cursor em dispositivos com mouse.
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

// Atualiza automaticamente o ano do rodapé.
const anoAtual = document.querySelector("#anoAtual");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

// Revela elementos conforme entram na área visível da tela.
const elementosReveal = document.querySelectorAll(".reveal");
const prefereMovimentoReduzido = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !prefereMovimentoReduzido) {
  const observador = new IntersectionObserver(
    (entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observer.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elementosReveal.forEach((elemento) => observador.observe(elemento));
} else {
  elementosReveal.forEach((elemento) => elemento.classList.add("is-visible"));
}

// Fecha o menu mobile depois que um link interno é selecionado.
const menuNavegacao = document.querySelector("#menuNavegacao");

if (menuNavegacao && window.bootstrap) {
  menuNavegacao.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const instancia = window.bootstrap.Offcanvas.getInstance(menuNavegacao);
      if (instancia) instancia.hide();
    });
  });
}
