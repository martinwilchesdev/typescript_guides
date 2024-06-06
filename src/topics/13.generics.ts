/**
 * Los genericos permiten que una funcion reciba un parametro cuyo tipo de dato es desconocido hasta que la funcion es invocada y el argumento es indicado.
 * En el siguiente ejemplo <T> hara referencia al tipo de dato indicado por el valor del argumento al invocar a la funcion. 
 * El valor que retornara la funcion sera de este mismo tipo de dato del parametro recibido.
 * 
*/
export function whatsMyType<T>(arg: T): T {
    return arg
}

// Al invocar la funcion, seguido del nombre de la misma se especifica entre "<>" entre el tipo de dato que sera pasado como argumento
const amIString = whatsMyType<string>('Hola Mundo')
const amIArray = whatsMyType<number[]>([1,2,3,4,5])
const amINumber = whatsMyType<number>(100)

console.log(amIString.split(' '))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))