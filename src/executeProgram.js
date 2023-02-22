import { setGame } from "./setGame.js"
import { getBingoNumber } from "./getBingoNumber.js"
import {createNumbers} from "./createNumbers.js"

// document.getElementById("newGame").addEventListener("click", )
document.getElementById("startGame").addEventListener("click", setGame)
document.getElementById("startGame").addEventListener("click", createNumbers)
document.getElementById("play").addEventListener("click", getBingoNumber)