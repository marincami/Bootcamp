"string"
Array
NaN
null

objetos:
{} //sintaxis clave valor
{ name: "luisa",
lastname: "Vaca"}


variables:
var // se puede modificar 
let
const // no se puede modificar
var /= let // con let se hace diferenciar las variables dependiendo el contexto donde esten
hoisting: asigna espacio de memoria y va a su contexto mas cercano, mejor asignar variables arriba de la funcion

let flor = "Margarita"
console.log(flor);

function myFlower() {
    let flor = "Rosas";
    console.log(flor, "hola");
}
myFlower()
///////////////////////////////////////

//////////////////////////////////tipos de funciones:
//declaradas bajo una variable:
var saludar = function(name, lastName) {
    console.log("sayHello"+ name + lastName);
}
saludar("Camila", "Marin")

// funcion inmediata .... funcion magica o autoejecutadas o autonoma(se llama sola)
(function saludar2() {
    console.log("Hello")
}) () //no hay que llamarla

!function saludar2() {
    console.log("Hello")
} () //tambien puede ser con !

// funcion anonima:
(function(){
    console.log("Hola mundo");
})()

//function
//si se declara un let dentro de esta, va a ser parte del scope mas cercano
var myFunction = (Name) => {
    console.log("Name")
}
myFunction("Camila")

//////////////////////
document.querySelector por:
-nombre de etiqueta //nombre del tag
-por clase // con el punto y el nombre de la clase
-por id // con el # y el nombre del id

///////////////////////
document.getElementsByClassName por:
- clase //no se le pone el punto para decirle que es clase, el emtodo ya le dice

////////
tipos de eventos:
Element.addEventListener('Click', function(){
    alert("soy rojo");
})

CLOSURE  PREGUNTA DEL EXAMEN
una funcion que retorna otra funcion
necesariamente la debe retornar

function closure (){
    var init = init;
    return function() {
        console.log(init++);
    }
}
var myCounter = counter(4);
que es un clouser, una func dentro de una func, un ejemplo

/////
//setInterval
//cada cierto intervalo de tiempo, ejecute el codigo que le decimos
//x pedazo de codigo se ejecute x tiempo que le demos



el prototype es una forma de heredar cosas
funcion constructora , es como un molde
una clase y adentro va la funcion constructora
+el constructor lleva las propiedades
class Persona{
    constructor(name){
        this.name = name;
    }
    miMetodo(){
        console.log("Hello" + " " + this.name);
    }
} 
var me = new Persona("Camila");
me //en consola va a mostrar "Camila"
me.miMetodo() // en  consola muestra "Hello Camila"

class Developer extends Persona{
    constructor(name, lastName){
        super(name); //la propiedad que comparten
        this.lastName = lastName;
    }

    metodosDeveloper(){ //basicamente son funciones
        console.log("Hola soy" + this.name + "" + this.lastName);
    }
}
var meDeveloper
var metodosDeveloper

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
prototype: 
class: funcion que tiene un constructor que tiene prototype
react: una libreria que hace la interfaz del usuario
    es bueno saber que componentes se necesitan
jsx: embeber el html en el js
virtualDOM: simplificacion en memoria del DOM, solo se actualiza lo que yo modifico
componentes: pequeñas piezas del html, css y js... en react todo son componentes, TODO
