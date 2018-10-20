// hoisting: cuando se usa una variable que no esta definida y js no saca error PREGUNTA TECNICA

function a() {}
var a = function
var a = function () {}
var estaEsMiFuncion = () => {} // diferencia es que deja acceder al this


function estaEsMiFuncion() { 
    //aqui hago cosas
    return 'mi nombre es cami';
}

var estaEsMiFuncion = function estaEsMiFuncion{
    //aqui hago cosas
    return estaEsMiFuncion2;
} 

var estaEsMiFuncion = function () {
    //hago cosas
}

var estaEsMiFuncion = () => {
    //hago cosas
}

function a() {
    var nombre = "mi nombre";
    return nombre;
}

function b() {
    return a;
}

////////////////////////////

var nombre = "cami";

function a() {
    var nombre = "bob";
    return "hola" + nombre;
}
// a(); retorna hola bob


////////////////////////////

var a = function (a) {
    var nombre2 = "bob";
    return "hola" + nombre;
}

var nombre = "cami";
console.log(a());

///////////////////////////

var a = function (a) {
    
    function b() {
        this.c = function(){

        } 
    }
    this.b = () => {
    }   //guarda cosas sobre el elemento y hace referencia solo a ese, cosas relacionadas con mi contexto
    this.b();
    b();
}

//////////////////////////////

function unFunctionMas() {
    this.cositas = "Hola"; //se puede poner var y solo se puede acceder adentro del contexto de la funcion
    this.cositas2 = "Como estas";
}

function unFunctionMas1() {
    this.nombre = "sebas";
    function saludar() {
        console.log("hola" + this.nombre); //NO SE PUEDE ACCEDER A THIS
    }
}

function unFunctionMas1() {
    this.nombre = "sebas";
    saludar = () => { //ES LA UNICA DECLARACION DE FUNCION QUE DEJA ACCEDER A LOS THIS
        console.log("hola" + this.nombre); 
    }
}

/////////////////////

var nombre = "sebas"; // 
nombre = "ahora soy juan";//cambia

var a = 10;
function rr() {
    a = undefined;
    console.log(a);

    var a = 12;

}

const nombre = "sebas";
nombre ="ahora soy luis"; //no cambia

let nombre ="sebas";(se puede redeclarar dependiendo del contexto)
nombre = "jose"; //cambia , solo esta en el contexto de la funcion,
// es como un this que no se hereda, permite redeclarar una funcion
// //////////////

//estructuras basicas de control: 
//if
//for
//while

API DE JS PARA ARRAYS!!!!

catch devuekve el error
fetch devuelve una promesa


let e = fetch ('url')

