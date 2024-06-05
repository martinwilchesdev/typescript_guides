// Definir un arreglo cuyos items solo pueden ser de tipo string
const skills: string[] = ['Bash', 'Counter', 'Healing'];

/**
 * Las interfaces son utilizadas para definir el tipo de valor que puede recibir cada propiedad de un objeto literal.
 * Cuando el codigo es transpilado a JavaScript, las interfaces no tiene ninguna representacion fisica.
 */

// Definicion de la interfaz mediante la palabra clave `interface`
interface Character {
    // Propiedades y su tipo de dato
    name: string
    hp: number
    skills: string[]
    hometown?: string // El caracter ? es utilizado para indicar que una propiedad del objeto es opcional
}

// Definicion de un objeto literal a partir de una interfaz
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    // Al ser 'hometown' una propiedad opcional no es necesario que sea definida en el objeto.
}

// Las propiedades opcioneales pueden ser añadidas posterior a la definicion del objeto literal
strider.hometown = 'Rivendell'

export { }