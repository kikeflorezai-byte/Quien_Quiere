// js/ui.js
import { $, $$ } from "./utils.js";

export function showScreen(id) {
  $$(".pantalla").forEach((s) => s.classList.remove("activa"));
  $(id).classList.add("activa");
}

export function bindNav({ jugar, config, salir, volverInicio }) {
  $("#btn-jugar")?.addEventListener("click", jugar);
  $("#btn-config")?.addEventListener("click", config);
  $("#btn-salir")?.addEventListener("click", salir);
  $("#btn-volver-inicio-2")?.addEventListener("click", volverInicio);
}

export function renderQuestion(q) {
  $("#texto-pregunta").textContent = q.enunciado;
  const botones = $$(".answer");
  botones.forEach((b, i) => {
    b.querySelector(".txt").textContent = q.opciones[i];
    b.classList.remove("correcta", "incorrecta");
  });
}

export function bindAnswers(handler) {
  $$(".answer").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      handler(idx, btn);
    });
  });
}

export function setScore(puntos) {
  $("#puntaje").textContent = String(puntos);
}

export function setProgress(actual, total) {
  $("#num-actual").textContent = String(actual);
  $("#num-total").textContent = String(total);
}

export function markAnswer(btn, ok) {
  btn.classList.add(ok ? "correcta" : "incorrecta");
}
