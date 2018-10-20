import React, { Component } from 'react';
import './App.css';
import ToDoInput from './components/toDoInput';
import ToDoItem from './components/toDoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  addToDo(toDoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: toDoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeToDo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="ToDoContainer">
          <h1>To-Do List</h1>
          <ToDoInput toDoText="" addToDo={this.addToDo} />
          <ul className="ToDoBox">
            {
              this.state.todos.map((todo) => {
                return <ToDoItem todo={todo} key={todo.id} removeToDo={this.removeToDo} id={todo.id} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;