export const markBoard = id => document.getElementById(id).innerHTML += "**"
// si el jugador saca un número que tenga en el cartón, lo marca.

export const showResult = (id, message) =>document.getElementById(id).innerHTML = message
// muestra diferentes resultados, como el número sacado, o si se consigue linea/Bingo.

export const writeNumber =(id, content) => document.getElementById(id).innerHTML = content;
//escribe números en el cartón.

export const disableButton = (id, boolean) => document.getElementById(id).disabled = boolean
// desactiva o activa los botones, según convenga.

export const verify = (id, bingoNumber) => Number(document.getElementById(id).innerHTML) === bingoNumber
// verifica si el número sacado del Bingo se encuentra en el cartón.