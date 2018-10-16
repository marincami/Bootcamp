import React, { Component } from 'react';
import './App.css';


//componente padre !!
class App extends Component {
    constructor(props) { //solo se ejecuta cuando se monta el dom
      super(props);
//el state solo se puede inicializar desde el constructor:
      this.state = { 
          all: [],
          favorites: []
      };
    }
//mi componente ya existe y necesito añadirle caracteristicas, llamados a API etc
    componentDidMount(){
      fetch('https://randomuser.me/api/?results=10')
      .then(results => results.json())
      .then(data => {
          this.setState({ //actualizar el estado
              all: data.results //y editar el estado, NUNCA se puede editar desde el render
          });
      });
    }

    componentDidUpdate(){ //cambiar el estado cunado el componente se actualiza
    }

    componentWillUnmount(){ //cerrar el ciclo, ultimo que se ejecuta antes del que comp desaparezca
    }



  render() { //el estado no se puede modificar
    return (
      <div className="App">
      {/* el componente se puede hacer en varias lineas*/}
        <ContactList 
            contacts={this.state.all} 
            title="Todos"
            key="1" //cuando se tienen hermanos iguales, se le pueden poner llaves que los identifiquen
        />
        <ContactList contacts={this.state.favorites} title="Favoritos" key="2"/>
      </div>
    );
  }
}
//un arrar de componentes ContactCard
const ContactList = (props) => {
    return (
      <div>
        <h2>{props.title}</h2>
        { props.contacts.map( contact => <ContactCard key={contact.name.first}
        contact={contact} />) }
      </div>
      ); //solo recibe una etiqueta, se puede poner una que contenga varias
};

//los componentes siempre empiezan con mayuscula
class ContactCard extends Component {
    render() { //no se puede setear nada en el estado
      // console.log(this.state) //lo podemos hacer desde el render para ver sus datos 
      //console.log(this.props);
      return (
      <div className="contact-card">
          <figure>
            <img src="https://randomuser.me/api/portraits/women/16.jpg"  alt="Autor"/>
            <figcaption>{this.props.contact.name.first}</figcaption>
          </figure>
          <button>Favorito</button>
          <button>Eliminar</button>
      </div>
      );
    }
}

export default App;
//state: interno de cada componente, el valor y su comportamiento y caracteristicas, privado (solo se puede accder desde el mismo componente)
//props: cuando un componente es padre, el estado del comp padre se convierte en las entradas del comp hijo

//sintaxis de clase, cuando el comp es inteligente, tiene estado y necesita pasarle valores a los hijos
// sintaxis de funcion, no manejan estado
//cuando se quiere escribir codigo js tiene que ser dentro de las llaves


//con this.props es en la clase y props solo es en una funcion