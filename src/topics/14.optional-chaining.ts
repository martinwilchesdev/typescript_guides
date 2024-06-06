export interface Passenger {
    name: string
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Martin'
}

const passenger2: Passenger = {
    name: 'Andrea',
    children: ['jade', 'hinata']
}

const printChildren = (passenger: Passenger): number => {
    /**
     * El operador "?" se encarga de validar si una propiedad existe o no en un objeto.
     * Si la propiedad children no existe en el objeto passenger, se retorna undefined al llamar a la propiedad "length".
     * En caso de no usar el operador de encadenamiento opcional se lanzara un error al llamar "length" con una propiedad que no existe en el objeto.
    */
    const howManyChildren = passenger.children?.length || 0
    return howManyChildren
}

console.log(printChildren(passenger1))
console.log(printChildren(passenger2))
