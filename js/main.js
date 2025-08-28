// js/main.js
import { DB_PREGUNTAS } from "./data/preguntas.js";
import { crearJuego } from "./game.js";
import {
  showScreen,
  bindNav,
  renderQuestion,
  bindAnswers,
  setScore,
  setProgress,
  markAnswer,
} from "./ui.js";

let juego;

function iniciar() {
  juego = crearJuego(DB_PREGUNTAS, 10);
  setScore(0);
  setProgress(1, juego.total);
  renderQuestion(juego.getActual());
  showScreen("#pantalla-juego");
}

function manejarRespuesta(idx, btn) {
  const ok = juego.responder(idx);
  markAnswer(btn, ok);
  setScore(juego.puntaje());

  // Pequeño delay visual y avanzamos
  setTimeout(() => {
    if (juego.terminado()) {
      alert(`¡Fin! Puntaje: ${juego.puntaje()}`);
      showScreen("#pantalla-inicio");
    } else {
      setProgress(juego.numeroActual(), juego.total);
      renderQuestion(juego.getActual());
    }
  }, 350);
}

bindNav({
  jugar: iniciar,
  config: () => showScreen("#pantalla-config"),
  salir: () => showScreen("#pantalla-inicio"),
  volverInicio: () => showScreen("#pantalla-inicio"),
});

bindAnswers(manejarRespuesta);
