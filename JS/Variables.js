const number = 10
//number = 20       // Si intentamos cambiar el valor de la variable, nos va a marcar un error debido a que es una constante
console.log(number)

let numero  // El problema anterior no sucede cuando usamos let
console.log(numero) // Al no tener datos lanza undefined, eso indica que la variable sí existe pero no tiene un valor
//  Undefined es diferente a NULL, NULL es cuando no existe la variable

numero = 1
console.log(numero) 

let variable = "Hola mundo" // Debido al scope, esta variable es accedida por el console log que está fuera del if
if(true) {
    let variable = "Otra variable"
    console.log(variable)   // Este console log muestra "Otra variable" debido al scope
}
console.log(variable)

// Al usar var el valor de la variable se va a rescribir, en cambio si usamos let o const esto no sucede, esa es la diferencia entre estos tipos de declaración
// Los errores rompen el programa en JS

// Formas de declarar un string
let string1 = 'Comillas simples', string2 = "Comillas doble", string3 = `Backtick ${number}`    // Estos últimos nos permiten hacer interpolaciones
console.log(string3)

// Los backticks igual nos permiten poner código HTML dentro de ellos
let nombre = 'David'
let etiqueta = `
<h1> Hola ${nombre}</h1>
`
document.body.innerHTML = etiqueta   // Esto nos permite meter etiquetas HTML diseñadas desde JavaScript

// typeof nombreVariable    Esto nos devuelve el tipo de dato de la variable (Siempre devuelve un string)

console.log(typeof [])  // Esto devuelve object, es decir, un array es un objeto den JavaScript
// Type coertion es la forma en cómo JavaScript identifica los tipos de datos debido a que es dinámicamente tipado
// En tipos de datos compuestos, se hacen asignaciones por referencia, es decir: let var1 = [1,2,3], a ese valor lo asigno a otra variable: let var2=var1
//  Y luego agrego a var2 otro valor: var2.push(4), ese modifica igual a var1.
// En tipos de datos primitivos la asignación en al valor, ejemplo: let number1=3, let number2=number1, number2=20  number1 sigue siendo 3 pero number2 es igual a 20
