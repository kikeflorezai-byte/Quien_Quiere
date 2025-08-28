// js/game.js
import { shuffle } from "./utils.js";

export function validarDB(db) {
  db.forEach((q, i) => {
    if (!q.enunciado || !Array.isArray(q.opciones) || q.opciones.length !== 4)
      throw new Error(`Pregunta mal formada en índice ${i}`);
    if (
      typeof q.correctaIndex !== "number" ||
      q.correctaIndex < 0 ||
      q.correctaIndex > 3
    )
      throw new Error(`Índice correcto inválido en ${q.id ?? i}`);
  });
}

export function crearJuego(db, cantidad = 10) {
  validarDB(db);

  const preguntas = shuffle(db).slice(0, Math.min(cantidad, db.length));
  let actual = 0;
  let puntaje = 0;

  return {
    total: preguntas.length,
    getActual: () => preguntas[actual],
    numeroActual: () => actual + 1,
    puntaje: () => puntaje,
    responder: (idx) => {
      const ok = idx === preguntas[actual].correctaIndex;
      if (ok) puntaje += 10;
      actual++;
      return ok;
    },
    terminado: () => actual >= preguntas.length,
    reiniciar: () => {
      actual = 0;
      puntaje = 0;
    },
  };
}
