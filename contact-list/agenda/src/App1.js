import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


//componente padre !!
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

  render() { 
    return (
      <div className="main">
        <BrowserRouter>
            <ContactListSection/> 
        </BrowserRouter>
     </div>
    );
  }
}
////////////////////////////////...................................
class ContactListSection extends Component {
  constructor(props) { 
    super(props);
//el state solo se puede inicializar desde el constructor:
    this.state = { 
        all: [],
        favorites: []
    };
    //hacer el bind para que tenga el mismo contexto y el metodo addToFavorites entienda
    this.addToFavorites = this.addToFavorites.bind(this)
  }

  addToFavorites(contact){
    console.log("Añadir a favoritos", contact);

    // const contactIndex = this.state.all.findIndex( c => c.id.value === contact.id.value);  //recorre cada item
    const newAll = this.state.all.filter(c => c.id.value !== contact.id.value);

    const newFavorites = this.state.favorites.concat(contact);
    this.setState({
      all: newAll,
      favorites: newFavorites
    });
    console.log('index', newAll);
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
          addToFavorites={this.addToFavorites}
      />
      <ContactList contacts={this.state.favorites} title="Favoritos" key="2" addToFavorites={this.addToFavorites}/>
    </div>
  );
}
}

//////////////////////////////////.................

//un arrar de componentes ContactCard
const ContactList = (props) => {
    return (
      <div>
        <h2>{props.title}</h2>
        { props.contacts.map( contact => <ContactCard key={contact.name.first} contact={contact} addToFavorites={props.addToFavorites} />) }
      </div>
      ); //solo recibe una etiqueta, se puede poner una que contenga varias
};

//los componentes siempre empiezan con mayuscula
class ContactCard extends Component {

    constructor(props){
      super(props);

      this.onClickFavorites = this.onClickFavorites.bind(this) //sobreescribe el this del hijo para que tenga el mismo contexto del padre
    }

    onClickFavorites() {
      this.props.addToFavorites(this.props.contact);
      //console.log('hello')
    }

    render() { //no se puede setear nada en el estado
      // console.log(this.state) //lo podemos hacer desde el render para ver sus datos 
      //console.log(this.props);
      return (
      <div className="contact-card">
          <figure>
            <img src={this.props.contact.picture.medium}  alt="Autor"/>
            <figcaption>{this.props.contact.name.first} {this.props.contact.name.last}</figcaption>
          </figure>
          <button onClick={this.onClickFavorites}> Favorito</button> 
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