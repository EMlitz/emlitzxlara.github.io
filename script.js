const mensajes = [
  "Eres especial 🌟",
  "Una sorpresa para ti 💛",
  "Tulipanes para alegrar tu día 🌷",
  "Que nunca te falte una sonrisa 😊"
];

// Función mensaje
function crearMensajeEnPosicion() {
  const msg = document.createElement("div");
  msg.className = "mensaje";
  msg.textContent = mensajes[Math.floor(Math.random() * mensajes.length)];

  const radius = Math.min(Math.max(window.innerWidth, window.innerHeight) * 0.25, 360);
  const angle = Math.random() * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  msg.style.left = `calc(50% + ${Math.round(x)}px)`;
  msg.style.top  = `calc(50% + ${Math.round(y)}px)`;

  document.body.appendChild(msg);

  setTimeout(() => { msg.remove(); }, 6100);
}

// Click en pétalos
document.querySelectorAll(".petalo").forEach(petalo => {
  petalo.addEventListener("click", () => {
    crearMensajeEnPosicion();
    petalo.classList.add("fade");
    setTimeout(() => petalo.remove(), 800);
  });
});
