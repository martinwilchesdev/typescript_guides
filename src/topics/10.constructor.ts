export class Person {

    // El constructor es un metodo que se ejecuta de forma automatica cuando se instancia un nuevo objeto de la clase
    constructor(public name: string, private address: string = 'No Address') { }

    print() {
        console.log(this.name)
    }
}

/**
 * La palabra clave new se utiliza para instanciar un nuevo objeto de una clase en especifico.
 * Las propiedades que recibe el metodo constructor son pasadas como argumentos durante el proceso de instanciacion.
*/
const ironman = new Person('Tony Stark', 'Malibu')

export { }