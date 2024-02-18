import { Person } from "./10.constructor"

// El metodo constructor de una clase puede recibir un parametro que haga referencia a otra clase
class NewHero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {}
}

const tony = new Person('Tony Stark', 'New York')

// La instancia de la clase Person es pasada como un argumento al constructor de la clase NewHero
const ironman = new NewHero('Iron Man', 45, 'Tony Stark', tony)