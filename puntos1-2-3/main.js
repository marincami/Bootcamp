/* Punto1 .......................*/
var a = 20; 
var b = 22;
if (a > b) {
    console.log('El mayor es: ' + a); //mejor para cadenas usar 'derf' y no "derf"
} else {
    console.log('El mayor es: ' + b);
}

/* Punto1.1 .......................*/
function higher(x, y) {
    var higher;
    if (x > y) {
        higher = x;
    } else {
        higher = y;
    }
    return higher; // Retorna lo que entrega la funcion, debe ir adentro de function
}
var higher = higher(10, 2);
console.log(higher);

/* Punto2 .......................*/
function suma(x, y) {
    return x + y;
}
var resultado = suma(3, 4);
console.log(resultado);

function suma1(x, y) {
    var resultado1 = x + y;
    return resultado1;
}
var resultado1 = suma1(4, 5); 
console.log(resultado1);

/* Punto3........................*/
const fruit = ['apple', 'pineapple', 'banana', 'mango', 'watermelon'];
const nameFruits = fruit[2]; //accede al primer elemento del arreglo
console.log(nameFruits);

/* Punto3....Usando ciclo......................*/
const fruits = ['apple', 'pineapple', 'banana', 'mango', 'watermelon'];
for (var i = 0; i < 5; i++) {
    console.log(fruits[i]);
}

