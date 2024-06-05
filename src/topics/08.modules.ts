/**
 * Los modulos permiten encapsular funcionalidades que podran ser exportadas y utilizadas en otros archivos.
 * Los modulos exportados podran ser importados utilizados la palabra clave import.
 * En el siguiente ejemplo se importa la interfaz `Product` y la funcion `taxCalculation` del modulo `functions-destructuring`
*/
import {Product, taxCalculation} from './07.functions-destructuring'

// shoppingCart se define como un arreglo de objetos, donde las propiedades de cada objeto son tipadas estrictamente mediante la interfaz `Product`
const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150.0
    },
    {
        description: 'iPad',
        price: 200.0
    }
]

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.13
})

console.log(`Total: ${total}`)
console.log(`Tax: ${tax}`)

export { }