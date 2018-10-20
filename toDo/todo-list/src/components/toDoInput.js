import React from 'react';

export default class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.todoText};
    //:................... necesito el bind para cambio de contexto
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addToDo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addToDo(todo) {
    if (todo.length > 0) {
      this.props.addToDo(todo);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Type a To-Do ..." value={this.state.value} onChange={this.handleChange} />
        <button className="Button Button-add" onClick={() => this.addToDo(this.state.value)}>Add Task</button>
      </div>
    );
  }
}