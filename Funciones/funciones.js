// Los parámetros son variables locales que se definen en la declaración de la función

// Los argumentos son valores asignados a los parámtros al ejecutar la función

// Las funciones son ciudadanos de primera clase porque pueden ser almacenadas en variables o constantes, pueden ser pasadas como argumentos a otra función y pueden ser retornadas
// por otra función (closures)
// Existen funciones puras (no causa efecto secundario y siempre devuelve los mismos valores para los mismos parámetros), autoinvocadas y nombradas y anónimas


function saludar(nombre, sexo) {
    let saludo = sexo==='m' ? "Bienvenido":"Bienvenida"
    return  `${saludo} ${nombre}`
}

console.log(saludar("David", 'm'))  // Bienvenido David
console.log(saludar("Alejandra", 'f'))  // Bienvenida Alejandra

// Arrow functions

// const saludo = (nombre,sexo) => {
//     let saludo = sexo==='m' ? "Bienvenido":"Bienvenida"
//     return  `${saludo} ${nombre}`
// }

const saludo = (nombre,sexo) => sexo==='m' ? `Bienvenido ${nombre}`:`Bienvenida ${nombre}`
console.log(saludo("David",'m'))
console.log(saludo("Alejandra",'f'))

// spread operator, nos permite mandar una cantidad indeterminada de argumentos, se declara con 3 puntos seguidos de un nombre
const sumarTodos= (...numeros) => {
    let resultado=0
    for(let i=0; i<numeros.length;i++) {
        resultado+=numeros[i]
    }
    console.log(resultado)
}
sumarTodos(1,2,3,4,5,6,7,8,9,10)    // 55   [n(n+1)/2]

const c = console.log   // c equivale a un console.log, al no poner los paréntesis no se invoca a la función, si no que se le pasan sus atributos a la variable/constante
c(sumarTodos(1,2,3))    // 6

const multiplicar = (a,b) => a*b
let edad = multiplicar(4,5)
c(edad) // 20
let edad2 = multiplicar(edad,3)
c(edad2) // 60

function sumar(x) {
    return function(y) {
        return x+y
    }
}
console.log(sumar(2)(5)) // 7   El primer valor va a ser X y el segundo Y, de esta forma llegamos a la segunda función y nos devuelve la suma

const sumar2 = x => y => x+y    // Realiza lo mismo que la función anterior
console.log(sumar2(2)(6))   // 8

const multiplicar2 = x => y => x*y
const a = multiplicar2(2)(3)  // 6
const b = multiplicar2(3)   // y => x*y devuelve la función pero guarda el parámetro x (3)
c(multiplicar2(a)(b(3))) // 6 * y => 3*3 ------ 6*9 ------- 54

// Función pura
let saludo2 = 'Hola'
const saludar2 = (hola,persona) => `${hola} ${persona}`  // De esta forma no modificamos la variable saludo2, así trabajan las funciones puras
c(saludar2(saludo2,'David'))   // Hola David
c(saludo2)    // Hola


// Ejemplo de closures
function aumentar() {
    let numeroAumentar = 0
    return function() {
        numeroAumentar++
        c(numeroAumentar)
    }
}
aumentar()()    // 1
aumentar()()    // 1
aumentar()()    // 1
aumentar()()    // 1

const incrementar = aumentar()  // Incrementa debido a que sólo se ejecuta la función anónima contenida en aumentar()
incrementar()   // 1
incrementar()   // 2
incrementar()   // 3
incrementar()   // 4

let numeroEjemplo = 10
let user = {
    nombre: 'David',
    numeroEjemplo: 21,
    getNumero() {   // Cuando no se usa this, JS trata de encontrar el valor en los bloques de arriba
        c(this.numeroEjemplo)   // 21
        c(numeroEjemplo)    // 10
    }
}
user.getNumero()