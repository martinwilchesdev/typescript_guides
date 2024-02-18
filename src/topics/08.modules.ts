// Los modulos permiten encapsular funcionalidades que podran ser exportadas a otros archivos
// Los modulos exportados podran ser importados utilizados la palabra clave import
import {Product, taxCalculation} from './07.functions-destructuring'

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
    tax: 0.15
})

console.log(`Total: ${total}`)
console.log(`Tax: ${tax}`)