import { fillBoards } from "./fillBoards.js"

export function setGame() {
    fillBoards("a", 1, 3, 0, 2)
    fillBoards("b", 4, 6, 3, 6)
    fillBoards("c", 7, 9, 7, 9) 
} // crea las tres filas del cartón con los números.