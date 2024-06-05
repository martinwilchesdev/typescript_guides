/**
 * TypeScript puede inferir el tipo de datos de las variables.
 * Es una buena practica indicar el tipo de dato que puede recibir la variable aun cuando su valor sea definido en la declaracion de la misma.
*/
const v1: string = 'Strider'

// Se produce un error cuando se intenta asignar un valor distinto al tipo de dato que puede recibir la variable
v1 = 123

// Mediante "|" se pueden indicar multiples tipos de datos que podra recibir una variable
let v3: number | string = 123
v3 = 'TypeScript'

// Mediante "|" es posible indicar el valor exacto que puede recibir una variable
let v4: number | 'foo' = 132 // A la variable se le pueden asignar valores numericos o el string "foo"
v4 = 'foo'

export { }