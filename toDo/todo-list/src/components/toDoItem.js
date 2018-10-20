import React from 'react';

export default class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeToDo(id) {
    this.props.removeToDo(id);
  }

  render() {
    return (
      <div className="ToDoItem">
        <input className="CheckboxTodo" type="checkbox"></input>
        <span>{this.props.todo.text}</span>
        <button className="RemoveToDo" onClick={(e)=> this.removeToDo(this.props.id) }> 
        <div className="Trash"> <img src=""/> </div>
        </button>
      </div>
    );
  }
}