// if(4 > 5) {
//     console.log("Pasó la condición 1")
// } else if(2 < 5) {
//     console.log("Pasó la condición 2")  // Esta es la condición que se ejecuta
// } else if(3 > 1) {
//     console.log("Pasó la condición 3")
// }

// let age = parseInt(prompt("Ingresa tu edad:"),10)
// if(age) {   // Nan es considerado false, es por eso que si no es un número simplemente no entra en el if
//     console.log(age)
//     let isAdult = age>=18 ? 'Mayor de edad':'Menor de edad' // Forma de usar un operador ternario
//     alert(isAdult)
// } else {
//     alert("Valor incorrecto")
// }

// Truthy y falsy values son valores que se comportan como booleanos sin serlo. Ejemplo:
// Falsy: 0,"",Nan,undefined, null
// Truthy: string no vacío, número diferente de cero, arrays, objetos
let array = []

if('') console.log('Falsy') // No se ejecuta
if(0) console.log('Falsy') // No se ejecuta
if(null) console.log('Falsy') // No se ejecuta
if(undefined) console.log('Falsy') // No se ejecuta

if('a') console.log('Truthy')   // Se ejecuta
if(array) console.log('Truthy')   // Se ejecuta
if(-2) console.log('Truthy')   // Se ejecuta
if({}) console.log('Truthy')   // Se ejecuta