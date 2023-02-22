export function randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
// crea Integros aleatorios, dentro de unos límites, establecidos por los parámetros.