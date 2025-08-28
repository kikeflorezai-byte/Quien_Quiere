// js/utils.js
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
