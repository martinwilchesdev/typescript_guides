// Definir un arreglo que solo pueda contener strings
const skills: string[] = ['Bash', 'Counter', 'Healing']

// Las interfaces pueden ser utilizadas para definir el tipo de valor que puede recibir una propiedad de un objeto literal
// Cuando el codigo es transpilado a JavaScript, este no tiene ninguna representacion fisica de las interfaces
interface Character {
    name: string
    hp: number
    skills: string[]
    hometown?: string // El caracter ? es utilizado para indicar que una propiedad del objeto es opcional
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell'

console.table(strider)

export {}
