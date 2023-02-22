import { disableButton } from "./simpleFunctions.js"
import { updateBingoNumbers } from "./variables.js"

export function createNumbers() {
    for (let i = 1; i <= 90; i++) {
        updateBingoNumbers(i)
    }
    disableButton("startGame", true)
} // crea los 90 números del Bingo dentro de una lista