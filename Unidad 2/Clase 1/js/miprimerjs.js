console.log("Hola Cristofher");
var nombre = "Cristofher, bienvenido a JS";
console.log(nombre);

// Pasar String a int
var num = "8";
var num = parseInt(num);
console.log(num * 10);

// Definir si es mayor o menor de edad

var edad = 15;

/* if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
} */

//Sentencia ternaria

console.log(edad >= 18 ? "Mayor de edad" : "Menor de edad");

var num = -5;
console.log(num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Cero");

var opcion = 3;
switch (opcion) {
    case 1:
        console.log("Has elegido a Pikachu");
        break;
    case 2:
        console.log("Has elegido a Charmander")
        break;
    case 3:
        console.log("Has elegido  a Bulbasaur")
        break;
    default:
        console.log("Has elegido el camino del mal")
}