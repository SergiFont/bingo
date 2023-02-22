import { getRandomNumber } from "./getRandomNumber.js"
import { randomInt } from "./randomInt.js"
import { writeNumber } from "./simpleFunctions.js"
import { updateLinePositions, linePositions } from "./variables.js"

export function fillBoards(id, min0, max0, min, max) {
    for (let counter = 0; counter < 5; counter++) {
        const cellNumber = getRandomNumber(linePositions) // coje 1 posición del board y guarda su valor en un array
        cellNumber[0] === 0 ? writeNumber(`${cellNumber}${id}`, randomInt(min0, max0))
            : writeNumber(`${cellNumber}${id}`, randomInt(cellNumber * 10 + min, cellNumber * 10 + max))
        /* condición para separar el caso 0 de los demás. 
        Se inserta un número aleatorio, dentro de unos límites, en la celda indicada*/
    }
    updateLinePositions([0, 1, 2, 3, 4, 5, 6, 7, 8])
    //actualiza la array a su valor por defecto para que se pueda reutilizar en cada línea.
}
/*función con bucles para establecer las posiciones aleatorias en el cartón
y generar los números de manera aleatoria*/
