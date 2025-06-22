// AUDIO DE BIENVENIDA
const playInicio = document.getElementById("playInicio");

let audioInicio = new Audio("assets/audio/bienvenida.mp3");
let isPlaying = false;

playInicio.addEventListener("click", () => {
  if (!isPlaying) {
    audioInicio.play();
    isPlaying = true;
    playInicio.textContent = "⏸"; // cambiar ícono a pausa
  } else {
    audioInicio.pause();
    isPlaying = false;
    playInicio.textContent = "▶";
  }
});

// ANIMACIÓN DE ENTRADA PARA CACTUS
const cactusImg = document.querySelector('.cactus-img');

window.addEventListener('scroll', () => {
  const top = cactusImg.getBoundingClientRect().top;
  const alturaPantalla = window.innerHeight;

  if (top < alturaPantalla - 100) {
    cactusImg.classList.add('activo');
  }
});

// CONTADOR REGRESIVO
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function actualizarContador() {
  const fechaEvento = new Date("2025-07-12T20:00:00");
  const ahora = new Date();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    diasEl.textContent = "00";
    horasEl.textContent = "00";
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  diasEl.textContent = String(dias).padStart(2, "0");
  horasEl.textContent = String(horas).padStart(2, "0");
  minutosEl.textContent = String(minutos).padStart(2, "0");
  segundosEl.textContent = String(segundos).padStart(2, "0");
}

setInterval(actualizarContador, 1000);
actualizarContador();

// AUDIO FINAL
const playFinal = document.getElementById("playFinal");

let audioFinal = new Audio("assets/audio/final.mp3");
let isPlayingFinal = false;

playFinal.addEventListener("click", () => {
  if (!isPlayingFinal) {
    audioFinal.play();
    isPlayingFinal = true;
    playFinal.textContent = "⏸";
  } else {
    audioFinal.pause();
    isPlayingFinal = false;
    playFinal.textContent = "▶";
  }
});
