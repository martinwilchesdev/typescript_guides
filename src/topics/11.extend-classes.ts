import { Person } from "./10.constructor"

/**
 * La extension de clases permite que una clase herede los metodos y propiedades de otra clase.
 * La palabra clave `extends` se utiliza para especificar la extension entre clases.
*/
class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public realAddress: string
    ) {
        /**
         * La funcion super() extiende el metodo constructor de la clase padre.
         * super() recibe como argumentos los parametros definidos en el constructor de la clase padre.
        */
        super(realName, realAddress)
    }
}

const ironman = new Hero('Friendly Neighbor', 16, 'Peter Parker', 'New York')
console.log(ironman)

export { }