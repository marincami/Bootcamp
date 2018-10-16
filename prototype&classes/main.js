console.log("hola");
// prototype : herencia, tambien se llama delegacion (le delega propiedades a otro objeto)

// objetos:
var Persona = { //declaracion de un objeto
    name: "Camila",
    lastName: "Marin"
}
Persona.gender = 'F' //propiedades, despues de crear el objeto
console.log(Persona);

// entonces nos entrega el objeto asi:
/*{
    name: Camila
    lastName: Marin
    gender: "F"
}*/

//funcion constructora (sirve de molde)
function Person(name, lastName, gender) {
    // var this. = {} //nos devuelve un objeto porque se crea un vacio
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
}
Person('Camila', "Marin", "F") //al ser constructora recibe el operador new

//o sea que se ejecuta así:
var me = new Person("Camila", "Marin", "F")
//y si imprimimos me, vamos a tener un objeto con la forma Person

//metodos: llamar la funcion, invocar a prototype y el metodo
Person.prototype.introduce = function(){
    console.log(`Hi I'm ${this.name} ${this.lastName}`);//con $ se hace referencia

}
//llamo a me con introduce, se ejecuta:
me.introduce(); //nos responde "hi i'm camila marin"

//funcion constructora que reciba parametros
function Developer(name, lastName, gender, yearsOfExperience){
    Person.call(this, name, lastName, gender);
    this.yearsOfExperience = yearsOfExperience;
} 

//se ejecuta  de una manera constructora:
var me2 = Developer("Pepito", "Perez", "M", 2);
//me2.introduce()
//ERROR: porque no estamos heredando presentacion para Pepito

//entonces se hace asi:
Developer.prototype = Object.create(Person.prototype); //(cree un objeto basado en persona)
//se crea otra variable para que se pueda presentar
var me3 = new Developer("Camila", "Marin", "F", 2.5);
console.log(me3.introduce());

//tambien se le puede agregar metodos a developer, asi como se hizo con persona
Developer.prototype.introduceAboutJob = function(){
    console.log(`Hi i'm ${this.name} ${this.lastName} and I have ${this.yearsOfExperience}`)
}

var me4 = new Developer("Andres", "Soto", "M", 5);
me4.introduce()
me4.introduceAboutJob()

//incluir clases para hacer todo de una manera mas entendible
class PersonWithClass{ //le vamos a decir que tenga el objeto y el metodo 
    // primero se le hace el constructor y se le entrega los parametros    
    constructor(name, lastName, gender){
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
    }
    //agregamos los metodos
    introduce(){
        console.log(`Hi im ${this.name} ${this.lastName}`)
    }
}
var me55 = new PersonWithClass("Camila", "Marin", "F");
console.log(me55.introduce(), 'introduce');

class DeveloperWithClass extends PersonWithClass{  //hereda de la clase person
    constructor(name, lastName, gender, yearsOfExperience){
        super(name, lastName, gender);//hace referencia a los metodos y atributos del padre(acceso del contexto padre)
        this.yearsOfExperience = yearsOfExperience; //reutilizando el objeto
    }
    introduceAboutJob(){
        console.log(`Hi I'm ${this.name} ${this.lastName} and I have ${this.yearsOfExperience} de experience`);
    }
 }
 var me66 = new PersonWithClass("Camila", "Marin", "F");
 console.log(me66);