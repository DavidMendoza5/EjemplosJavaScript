let answer = parseInt(prompt("Escoge un número del 1 al 5"))

switch(answer) {
    case 1:
        alert("Escogiste 1")
        break;
    case 2:
        alert("Escogiste 2")
        break;
    case 3:
        alert("Escogiste 3")
        break;
    case 4:
        alert("Escogiste 4")
        break;
    case 5:
        alert("Escogiste 5")
        break;
    default:    // Si no se cumple ningún case se ejecuta este caso
        alert("Valor incorrecto")
        break;
}