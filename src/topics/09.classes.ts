// Las clases se utilizan como plantillas para instanciar objetos con propiedades y metodos en comun
class Person {
    public name: string // Las propiedades publicas pueden ser tanto desde dentro como fuera de la clase
    private address: string // Las propiedades privadas solo podran ser accedidas desde dentro de la clase

    constructor(name: string, address: string) {
        this.name = name
        this.address = address
    }
}

const ironman = new Person('Tony Stark', 'Malibu')

export { }