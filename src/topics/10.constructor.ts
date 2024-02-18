export class Person {
    // El constructor es un metodo que se ejecuta de forma automatica cuando se instancia un nuevo objeto de la clase
    constructor(public name: string, private address: string = 'No Address') {}
}

const ironman = new Person('Tony Stark', 'Malibu')