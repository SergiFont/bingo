document.getElementById("newGame").addEventListener("click", selectBoardPieces)

const board1 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const board2 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const board3 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const equal = (a, b) => 
a.length === b.length && a.every((element1, element2) => element1 === b[element2])

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomElement(board) {
    const removed = board.splice(Math.floor(Math.random() * board.length), 1)
    return removed
}


function selectBoardPieces() {
    for (let counter = 0; counter < 5; counter++) {
        const removed = randomElement(board1)
        if (equal(removed, [0])) {
            document.getElementById(`${removed}a`).innerHTML = getRandomInt(1, 3)
        } else if (equal(removed, [1])) {
            document.getElementById(`${removed}a`).innerHTML = getRandomInt(10, 12)
        } else if (equal(removed, [2])) {
            document.getElementById(`${removed}a`).innerHTML = getRandomInt(20, 22)
        } else if (equal(removed, [3])) {
            document.getElementById(`${removed}a`).innerHTML = getRandomInt(30, 32)
        } else if (equal(removed, [4])) {
            document.getElementById(`${removed}a`).innerHTML = getRandomInt(40, 43)
        } else if (equal(removed, [5])) {
            document.getElementById(`${removed}a`).innerHTML = getRandomInt(50, 52)
        } else if (equal(removed, [6])) {
            document.getElementById(`${removed}a`).innerHTML = getRandomInt(60, 62)
        } else if (equal(removed, [7])) {
            document.getElementById(`${removed}a`).innerHTML = getRandomInt(70, 73)
        } else if (equal(removed, [8])) {
            document.getElementById(`${removed}a`).innerHTML = getRandomInt(80, 82)
        }
    }
    for (let counter = 0; counter < 5; counter++) {
        const removed = randomElement(board2)
        console.log(removed);
        if (equal(removed, [0])) {
            document.getElementById(`${removed}b`).innerHTML = getRandomInt(4, 6)
        } else if (equal(removed, [1])) {
            document.getElementById(`${removed}b`).innerHTML = getRandomInt(14, 16)
        } else if (equal(removed, [2])) {
            document.getElementById(`${removed}b`).innerHTML = getRandomInt(23, 26)
        } else if (equal(removed, [3])) {
            document.getElementById(`${removed}b`).innerHTML = getRandomInt(33, 35)
        } else if (equal(removed, [4])) {
            document.getElementById(`${removed}b`).innerHTML = getRandomInt(44, 46)
        } else if (equal(removed, [5])) {
            document.getElementById(`${removed}b`).innerHTML = getRandomInt(53, 56)
        } else if (equal(removed, [6])) {
            document.getElementById(`${removed}b`).innerHTML = getRandomInt(63, 65)
        } else if (equal(removed, [7])) {
            document.getElementById(`${removed}b`).innerHTML = getRandomInt(74, 76)
        } else if (equal(removed, [8])) {
            document.getElementById(`${removed}b`).innerHTML = getRandomInt(83, 86)
        }
    }
    for (let counter = 0; counter < 5; counter++) {
        const removed = randomElement(board3)
        if (equal(removed, [0])) {
            document.getElementById(`${removed}c`).innerHTML = getRandomInt(7, 9)
        } else if (equal(removed, [1])) {
            document.getElementById(`${removed}c`).innerHTML = getRandomInt(17, 19)
        } else if (equal(removed, [2])) {
            document.getElementById(`${removed}c`).innerHTML = getRandomInt(27, 29)
        } else if (equal(removed, [3])) {
            document.getElementById(`${removed}c`).innerHTML = getRandomInt(36, 39)
        } else if (equal(removed, [4])) {
            document.getElementById(`${removed}c`).innerHTML = getRandomInt(47, 49)
        } else if (equal(removed, [5])) {
            document.getElementById(`${removed}c`).innerHTML = getRandomInt(57, 59)
        } else if (equal(removed, [6])) {
            document.getElementById(`${removed}c`).innerHTML = getRandomInt(66, 69)
        } else if (equal(removed, [7])) {
            document.getElementById(`${removed}c`).innerHTML = getRandomInt(77, 79)
        } else if ((removed, [8])) {
            document.getElementById(`${removed}c`).innerHTML = getRandomInt(87, 90)
        }
    }
}