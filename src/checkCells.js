import { disableButton, markBoard, showResult, verify } from "./simpleFunctions.js"

let line1Counter = 0
let line2Counter = 0
let line3Counter = 0
let bingoCounter = 0

export function checkCells(pulledNumber) {
    showResult("text2" , " ") // reset del resultado.
    for( let i = 0 ; i <= 8 ; i++){ 
        const isInLine1 = verify(`${i}a`, pulledNumber)
        const isInLine2 = verify(`${i}b`, pulledNumber)  
        const isInLine3 = verify(`${i}c`, pulledNumber)
        // verifica si el número está en alguna de las líneas, devolviendo true o false
        
        if (isInLine1)  {
                    line1Counter ++,
                    bingoCounter ++,
                    markBoard(`${i}a`),
                    showResult("text2" , `${pulledNumber} is in your board!`)
        } else if (isInLine2)   {
                    line2Counter ++,
                    bingoCounter ++,
                    markBoard(`${i}b`),
                    showResult("text2" , `${pulledNumber} is in your board!`)
        } else if (isInLine3)   {
                    line3Counter ++,
                    bingoCounter ++,
                    markBoard(`${i}c`),
                    showResult("text2" , `${pulledNumber} is in your board!`)
        } /* si alguna verificación es cierta, sube los contadores indicados, 
        marca el número en el cartón y muestra un mensaje en pantalla*/
        const checkLines = line1Counter === 5 ? true :
                           line2Counter === 5 ? true :
                           line3Counter === 5 ? true : false
                           //comprueba si hay alguna línea, usando los contadores como referencia.
        if (bingoCounter === 15) {
            showResult("text2" , "BINGO!"),
            disableButton("play", true)
        } // comprueba si hay Bingo usando el contador como referencia. Desactiva el botón de jugar si es así.
        else if (checkLines) {
            showResult("text2" , "Line!"),
            line1Counter = 6, line2Counter = 6, line3Counter = 6
        } /* si el jugador consigue la primera línea, 
        muestra el mensaje en pantalla y ajusta los contadores para que no vuelva a ocurrir. Menuda chapuza*/
    }
}