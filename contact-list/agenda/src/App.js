import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact path="/contactlist" component={ ContactListSection } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const Navigation = (props) => {
  return (
    <nav>
      <ul className="Menu">
        <li> <Link className="Link" to={`/`} ></Link> </li>
        <li> <Link className="Link" to={`/contactlist`} >Contact List</Link> </li>
      </ul>
    </nav>
  )
}

////////////////////////////////...................................
class ContactListSection extends Component {
  constructor(props) {
    super(props);
    this.state = {  //el state solo se puede inicializar desde el constructor:
      all: [],
      favorites: []
    };
    this.addToFavorites = this.addToFavorites.bind(this); //hacer el bind para que tenga el mismo contexto y el metodo addToFavorites entienda
    this.deleteFromFavorites = this.deleteFromFavorites.bind(this);
  }

  addToFavorites(contact) {
    if (this.state.favorites.indexOf(contact) === -1) {
      console.log("Añadir a favoritos", contact);
      const newAll = this.state.all.filter(c => c.id.value !== contact.id.value);
      const newFavorites = this.state.favorites.concat(contact);
      this.setState({
        all: newAll,
        favorites: newFavorites
      });
      console.log('index', newAll);
    }
  }

  deleteFromFavorites(contact) {
    if (this.state.all.indexOf(contact) === -1) { //indexOf=-1 cuando no encuentra el e en el array, cuando si entrega el pos del e
      console.log("Eliminar de favoritos", contact);
      const contactToRemoveIndex = this.state.favorites.indexOf(contact);
      let newFavorites = this.state.favorites.slice(0); // duplica el array de favoritos en un rango dado
      newFavorites.splice(contactToRemoveIndex, 1); // se remueve el contacto del array duplicado, evitando alterar el original
      const newAll = this.state.all.concat(contact);
      this.setState({
        all: newAll,
        favorites: newFavorites
      });
      console.log('index', newAll);
    }
  }

  componentDidMount() { //mi componente ya existe y necesito añadirle caracteristicas, llamados a API etc
    fetch('https://randomuser.me/api/?results=10')
      .then(results => results.json())
      .then(data => {
        this.setState({ //actualizar el estado
          all: data.results //y editar el estado, NUNCA se puede editar desde el render
        });
      });
  }

  render() {
    return (
      <div className="App">
        <ContactList contacts={ this.state.all } title="Todos" key="1" addToFavorites={ this.addToFavorites } deleteFromFavorites={ this.deleteFromFavorites } />
        <ContactList contacts={ this.state.favorites } title="Favoritos" key="2" addToFavorites={ this.addToFavorites } deleteFromFavorites={ this.deleteFromFavorites } />
      </div>
    );
  }
}
//////////////////////////////////.................
const ContactList = (props) => {
  return (
    <div>
      <h2>{ props.title }</h2>
      { props.contacts.map(contact => <ContactCard key={ contact.name.first } contact={ contact } addToFavorites={ props.addToFavorites } deleteFromFavorites={ props.deleteFromFavorites } />) }
    </div>
  );
};

class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.onClickFavorites = this.onClickFavorites.bind(this) //sobreescribe el this del hijo para que tenga el mismo contexto del padre
    this.onClickDelete = this.onClickDelete.bind(this)
  }

  onClickFavorites() {
    this.props.addToFavorites(this.props.contact);
    //console.log('hello')
  }

  onClickDelete() {
    this.props.deleteFromFavorites(this.props.contact);
  }

  render() { //no se puede setear nada en el estado
    return (
      <div className="contact-card">
        <figure>
          <img src={ this.props.contact.picture.medium } alt="Autor" />
          <figcaption>{ this.props.contact.name.first } { this.props.contact.name.last }</figcaption>
        </figure>
        <button onClick={ this.onClickFavorites }>Favorito</button>
        <button onClick={ this.onClickDelete }>Eliminar</button>
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

//tarea:
//
//npm 
//caja de texto con un boton (con click)
//cuando se le da add crea una tarea
//y en x se quite la tarea

//con un home o un about me (aplicar todo lo visto en React)
