import { getRandomNumber } from "./getRandomNumber.js"
import { bingoNumbers } from "./variables.js"
import { checkCells } from "./checkCells.js"
import { showResult } from "./simpleFunctions.js"

export function getBingoNumber() {
    const pulledNumber = (getRandomNumber(bingoNumbers)[0])
    showResult("text1", `Number ${pulledNumber}!`) 
    // console.log(numbers);
    checkCells(pulledNumber)
} /* - Recoge un número aleatorio del array que contiene todos los números restantes del Bingo, 
       y lo muestra en pantalla.
     - checkCells comprueba si el número está en el cartón o si el jugador consigue línea/Bingo.
     */