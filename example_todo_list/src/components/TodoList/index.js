import React, { Component } from "react";
import TodoItems from "../TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefa: "",
      items: []
    };
  }

  addItem = e => {
    let state = this.state;

    if (this.tarefaInput !== "") {
      let newItem = {
        text: this.tarefaInput.value,
        key: Date.now()
      };
      this.setState({
        items: [...state.items, newItem]
      });
    }
    e.preventDefault();
    this.setState({
      tarefa: ""
    });
  };

  log = e => {
    console.log(this.state.items);
  };

  deleteItem = key => {
    console.log("Item a ser deletado é " + key);
    let filtro = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filtro
    });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Nova tarefa"
            name="tarefa"
            value={this.state.tarefa}
            onChange={evt => this.setState({ tarefa: evt.target.value })}
            ref={event => (this.tarefaInput = event)}
          />

          <button type="submit">Adicionar</button>
        </form>
        <button onClick={this.log}>LOG</button>

        <TodoItems lista={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
