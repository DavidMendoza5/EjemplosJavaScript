//  El = sirve para asignar valores a las variables pero tiene variaciones
console.log("----------------------------------------------------------")
let valor = 3
console.log(valor)    // 3

valor+=1
console.log(valor)    // 4

valor-=1
console.log(valor)    // 3

valor*=2
console.log(valor)    // 6

valor/=3
console.log(valor)    // 2

//  La doble igualdad compara valores, mientras que la triple igualdad compara valor y tipo de dato todo esto es debido al type coertion
console.log('5'==5)     // true         Evitar usarla en comparaciones
console.log('5'===5)    // false

// Lo mismo sucede con el símbolo de diferente, al usar !== la comparación es más estricta
console.log(5!='5')     // false
console.log(5!=='5')    // true

//  Existen operadores ternarios que son los que se componen de tres valores
//  (expresión) ? Si es verdadero:Si es falso

let age = prompt('Ingresa tu edad')
let isAdult = age>=18 ? 'Mayor de edad':'Menor de edad' // Forma de usar un operador ternario
alert(isAdult)

// Operador ||  (Operador de corto circuito)
let a
let b = a || 'Algo' // a es igual a undefined debido a que no tiene ningún valor asignado por eso b toma el valor Algo
console.log(b)  // Algo

// Operador &&  (Operador de corto circuito), hace lo contrario que el ||
let c = 'hola'&&'mundo' // Debido a que el primero da true, se va al segundo y se queda con su valor en que igual da true
console.log(c)  // mundo

let d = null&&'mundo'   // Como el primero es false, se queda con ese valor y no pasa al siguiente
console.log(d)  // null