// Si TypeScript no puede inferir el tipo de dato de una variable, es necesario indicar de forma explicita que es de tipo any
function test(a: any, b: any): void { } // void se indica cuando no hay explicitamente un return en una funcion

// Si una funcion retorna un valor, se debe especificar de forma explicita el tipo de valor retornado
function addNumbers(a: number, b: number): number {
    return a + b
}

// Funcion de tipo flecha asignada a una variable
const addNumbersArrow = (a: number, b: number): string => `${a + b}`

/**
 * Los parametros opcionales de una funcion se definen añadiendo al final del nombre del parametro un "?".
 * Los parametros de la funcion pueden tener valores por defecto, eg, parameter: type = value.
 * 
*/
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base
}

const result: number = addNumbers(1, 3)
const result2: string = addNumbersArrow(5, 6)
const multiplyResult: number = multiply(3, 4)

console.log({ result, result2, multiplyResult })

/**
 * Funciones con objetos como argumentos
 */
interface Character {
    name: string
    hp: number
    showHp: () => void
}

/*
    El primer parametro que recibe la funcion es un objeto de tipo Character.
    La funcion evalua que el objeto recibido como argumento cumpla con la estructura de la interfaz Character.
*/
const healCharacter = (character: Character, amount: number) => {
    if (character.hp === 100) return
    character.hp += amount
}

/*
    strider es un objeto literal que es definido a traves de la interface Character.
    Este objeto debe tener las mismas propiedades definidas en la interfaz y cada propiedad debe ser del tipo de dato especificado en la misma.
*/
const strider: Character = {
    name: 'Aragorn',
    hp: 0,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(strider, 30)
strider.showHp()

export { }