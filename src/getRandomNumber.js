export function getRandomNumber(array) {
    const removed = array.splice(Math.floor(Math.random() * array.length), 1)
    return removed
} 
// coje 1 número aleatorio de la plantilla y devuelve su valor dentro de un array.