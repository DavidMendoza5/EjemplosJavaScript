
for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("Incremento de 2 en 2")

for (let i = 0; i < 10; i+=2) { // Indicamos que el incremento sea de 2 en 2
    console.log(i)
}

console.log("Múltiplos de 7")

for (let i = 0; i < 50; i++) { 
    if(i%7 === 0) console.log(i)
}

let password = "Hola", pass
do {
    pass = prompt("Ingresa la contraseña:")
} while (pass !== password);