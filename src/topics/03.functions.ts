// Cada vez que no se le indica el tipo de dato a una variable y TypeScript no lo puede inferir, es necesario indicar de forma explicita que es de tipo any
function test(a: any, b: any): void {} // void se indica cuando no hay explicitamente un return en una funcion

function addNumbers(a: number, b: number): number {
    return a + b
}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`

// Los parametros opcionales de una funcion se definen añadiendo al final del nombre del parametro un ?
// Los parametros de la funcion tambien pueden tener parametros por defectp, eg, parameter: type = value
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base
}

const result: number = addNumbers(1, 2)
const result2: string = addNumbersArrow(1, 2)
const multiplyResult: number = multiply(result, 5)

console.log({ result, result2, multiplyResult })

/**
 * Funciones con objetos como argumentos
 */

// La interface define el tipo de cada una de las propiedades que componen al objeto literal
interface Character {
    name: string
    hp: number
    showHp: () => void
}

/*
    El primer parametro de la funcion es un objeto

    Este objeto ha sido definido mediante una interfaz, por lo cual la funcion evaluara que el objeto recibido como argumento cumpla con la estructura de la interface Character
*/
const healCharacter = (character: Character, amount: number) => {
    if (character.hp === 100) return
    character.hp += amount
}

/*
    strider es un objeto literal que es definido a traves de la interface Character

    Este objeto debe tener las mismas propiedades definidas en la interfaz, y cada propiedad debe ser del tipo de dato especificado
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

export {}
