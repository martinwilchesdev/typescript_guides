export class Person {
    public name: string
    private address: string // Las propiedades privadas solo podran ser accedidas desde dentro de la clase

    constructor(name: string, address: string) {
        this.name = name
        this.address = address
    }
}

const ironman = new Person('Tony Stark', 'Malibu')