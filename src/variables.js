export let linePositions = [0, 1, 2, 3, 4, 5, 6, 7, 8] // arreglo con las 8 posiciones de cada línea.
export let bingoNumbers = [] //array con los números del Bingo.

export const updateLinePositions = update => linePositions = update // actualiza la plantilla a su estado inicial.
export function updateBingoNumbers(update) {
    bingoNumbers.push(update)
} // actualiza la lista de números del Bingo para crear los 90.
