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
    // El operador ? se encarga de validar si una propiedad de un objeto es undefined
    const howManyChildren = passenger.children?.length || 0
    console.log(howManyChildren)
    return howManyChildren
}

printChildren(passenger1)
printChildren(passenger2)
