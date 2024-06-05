export interface Product {
    description: string
    price: number
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationsOptions {
    tax: number;
    products: Product[]; // Dentro de la interfaz TaxCalculationsOptions se especifica que la propiedad products recibira un arreglo de objetos, cuyas propiedades estaran tipados estrictamente por la interfaz Product
}

// Es posible especificar de forma literal que una funcion siempre retornara un valor especifico, por ejemplo un arreglo de 2 numeros
export function taxCalculation(options: TaxCalculationsOptions): [number, number] {
    let total = 0

    /**
     * Cuando la funcion recibe un objeto como parametro, sus propiedades pueden ser desestructuradas desde la firma de la funcion o desde dentro del cuerpo de la misma.
     * Si el objeto que recibe como parametro la funcion contiene multiples propiedades, es recomendable realizar la destructuracion desde el cuerpo de la funcion.
    */
    const { products, tax } = options

    products.forEach(({ price }) => total += price)

    // La funcion retorna un arreglo de 2 numeros, tal como se especifica en la firma de la misma
    return [total, total * tax]
}

const shoppingCart = [phone, tablet]
const tax = 0.15

// Como la funcion retorna un arreglo, dicho arreglo puede ser desestructurado para no tener que acceder a los valores retornados a traves del indice del arreglo
const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax
})

console.log(`Total: ${total}`)
console.log(`Tax: ${totalTax}`)

export { }