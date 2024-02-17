// TypeScript infiere el tipo de dato de las variables
const v1 = 'Strider' // Es una buena practica indicar el tipo de dato que puede recibir la variable aun cuando su valor sea definido en la declaracion de la misma

// TypeScript permite definir el tipo de dato que podra recibir una variable
let v2: number = 123
v2 = '123' // Se muestra un error cuando se intenta asignar un valor distinto al tipo de dato que puede recibir la variable

// TypeScript permite mediante | indica varios tipos de datos que podra recibir una variable
let v3: number | string = 123
v3 = 'TypeScript'

// TypeScript permite mediante | indicar el valor exacto que puede recibir una variable
let v4: number | 'foo' = 132
v4 = 'foo'

console.log({
    v1,
    v2,
    v3,
    v4
})

export {}