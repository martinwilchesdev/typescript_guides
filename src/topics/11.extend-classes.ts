import { Person } from "./10.constructor"

// La extension de clases permite que una clase herede los metodos y propiedades de otra clase
class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        // La funcion super() extiende el metodo constructor de la clase padre
        super(realName, 'New York')
    }
}

const ironman = new Hero('Iron Man', 45, 'Tony Stark')
console.log(ironman)