// Métodos para usar con los tipo de datos número

// toFixed()    devuelve la cantidad de decimales que le indiquemos, nos sirve para redondear valores
let number = 4
let numeroDecimales = number.toFixed(3)   // Indicamos que queremos que nos muestre el valor con 3 decimales
console.log(numeroDecimales) // 4.000

let numeroDecimal = 4.5767667567
let numeroRedondeado = numeroDecimal.toFixed(3)
console.log(numeroRedondeado)   // 4.577

// parseInt(string, 10) y parseFloat()    convierten un texto a número
let texto = "20"
console.log(texto)

let textToNumber = parseInt(texto,10)   // El segundo parámetro indica al sistema de numeración al que queremos convertirlo, en este caso al sistema decimal
console.log(textToNumber)

// NaN nos sirve para saber si el resultado es un número
let ejemploNan = 5 * 'hola'
console.log(ejemploNan) // NaN

// Math.floor() redondea un valor (el redondeo siempre es hacia abajo)
console.log(Math.floor(3.7))    // 3
// Mtah.ceil() redondea un valor (el redondeo siempre es hacia arriba)
console.log(Math.ceil(3.1)) // 4
// Math.round() redondea un valor dependiendo del decimal, apatir de 5 el redonde es hacia arriba y debajo de 5 el redondeo es hacia abajo
console.log(Math.round(6.5))    // 7
console.log(Math.round(6.1))    // 6

// Math.random() nos devuelve un número aleatorio entre 0 y 1
console.log(Math.random())

// Función que devuelve un número al azar entre 1 y 19
console.log(Math.round(Math.random()*10))   // Se multiplica por 10 para no tener decimales y poder usar bien la función

