
// .length nos devuelve el tamaño de la cadema
let cadena = "hola mundo"
console.log(cadena.length)  // 10
console.log("ejemplo".length)   // 7

// trim() quita los espacios en blanco al principio y al final del texto
console.log("    Hola     ")
console.log("    Hola     ".trim()) // Hola
console.log("    Hola   mundo  ".trim())    //Hola   mundo

// upperCase() Convierte en mayúsculas todo el texto
console.log("hola".toUpperCase())   // HOLA

// lowerCase() Convierte todo a minúsculas
console.log("HOLA".toLowerCase())   // hola

let answer = prompt('¿Cuál es la capital de Canadá?').toLowerCase().trim()
let message = answer === 'ottawa' ? 'Correcto':'Incorrecto'
alert(message)

// indexOf(string) nos muestra en qué lugar de la cadena se encuentra el caracter, si no lo encuentra devuelve -1, sólo muestra la primera coincidencia
// indexOf(string,numero) si se le agrega una coma seguido de un número, le indicamos desde qué posición queremos que empiece a contar

console.log(cadena.indexOf('m'))    // 5    h[0]o[1]l[2]a[3] [4]m[5]u[6]n[7]d[8]o[9]
console.log(cadena.indexOf('o',2))    // 9
// Una forma de poder buscar el segundo caracter sin saber la posición del primer caracter es la siguente:
console.log(cadena.indexOf('o',cadena.indexOf('o')+1))    // 9

//  lastIdenxOf() realiza lo mismo que indexOf, sólo que en lugar de contar de izquierda a derecha cuenta de derecha a izquierda
console.log(cadena.lastIndexOf('o'))    // 9

// A partir de ES6 se incluyen las siguientes funciones:
// includes(string) nos devueve un boolean dependiendo de si encuentra o no la palabra que le pedimos
console.log(cadena.includes('mundo'))   // true

// startsWith(string) nos devuelve true o false indicando si el texto empieza con la palabra indicada como parámetro
console.log(cadena.startsWith('mundo')) // false
console.log(cadena.startsWith('hola'))  // true

// endsWith(string) funciona igual que startsWith(), sólo que este revisa el final
console.log(cadena.endsWith('mundo')) // true
console.log(cadena.endsWith('hola'))  // false




// replace(string,string) reemplaza un texto, el primer parámetro indica qué texto se va a reemplazar mientras que el segundo parámetro 
// indica el texto que aparecerá en lugar del reemplazado

console.log(cadena.replace('mundo', 'gente'))   // hola gente

// split(string) separa la cadena usando como separador el parámetro indiciado
console.log(cadena.split(' '))  // ["hola","mundo"]
console.log(cadena.split(''))   // ["h","o","l","a"," ","m","u","n","d","o"]
// De igual forma se le puede pasar un parámtro extra para indicar que queremos acceder a esa posición del arreglo de la palabra separada
console.log(cadena.split(' ')[1])   // mundo

// substring(numero) extrae el texto a partir de la posición pasada como parámetro
console.log(cadena.substring(2))    // la mundo
// Se le puede pasar un segundo parámetro que indica hasta dónde va a tomar la función, es decir, indica la cantidad de caracteres que va a tomar
console.log(cadena.substring(2,6))  // la m
// Si el segundo parámetro es un número negativo, entonces etrae hacia atrás
console.log(cadena.substring(2,-1)) // ho

// slice(numero, numero) nos permite obtener el texto que se encuentre entre los valores dados
console.log(cadena.slice(1,5))  // ola
// Si se ingresa un número negativo empieza desde el final
console.log(cadena.slice(-5,-1))    // mund