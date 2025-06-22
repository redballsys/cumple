// AUDIO DE BIENVENIDA
const playInicio = document.getElementById("playInicio");
const pantallaInicial = document.getElementById("pantalla-inicial");
const contenido = document.getElementById("contenido");

let audioInicio = new Audio("assets/audio/bienvenida.mp3");
let isPlaying = false;

playInicio.addEventListener("click", () => {
    if (!isPlaying) {
        audioInicio.play();
        isPlaying = true;

        // Oculta pantalla inicial, muestra contenido con efecto
        pantallaInicial.classList.add("fade-out");

        setTimeout(() => {
            pantallaInicial.style.display = "none";
            contenido.classList.remove("oculto");
            contenido.classList.add("fade-in");
        }, 1000); // tiempo igual al de la animación CSS
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

// AUDIO FINAL con control de volumen sobre audioInicio
const playFinal = document.getElementById("playFinal");

let audioFinal = new Audio("assets/audio/final.mp3");
let isPlayingFinal = false;

playFinal.addEventListener("click", () => {
    if (!isPlayingFinal) {
        // Bajar volumen del audio de bienvenida antes de reproducir el final
        audioInicio.volume = 0.2;
        audioFinal.play();
        isPlayingFinal = true;
        playFinal.textContent = "⏸";

        // Cuando termine el audio final, restauramos el volumen original
        audioFinal.addEventListener("ended", () => {
            audioInicio.volume = 1.0;
            isPlayingFinal = false;
            playFinal.textContent = "▶";
        });
    } else {
        audioFinal.pause();
        isPlayingFinal = false;
        playFinal.textContent = "▶";
        audioInicio.volume = 1.0; // Si se pausa manualmente, también se restaura volumen
    }
});

contenido.classList.remove("oculto");
contenido.classList.add("fade-in");

const muteBtn = document.getElementById("muteBtn");

muteBtn.addEventListener("click", () => {
  audioInicio.muted = !audioInicio.muted;
  muteBtn.textContent = audioInicio.muted ? "🔈" : "🔇";
});
