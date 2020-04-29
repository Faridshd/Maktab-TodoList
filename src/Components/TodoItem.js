import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoStore from "../stores/TodoStore";

@observer
class TodoItem extends Component {
  OnToggle = () => {
    this.props.todo.ToggleStatus();
  };

  OnDelete = (id) => {
    TodoStore.RemoveTodo(id);
  };

  render() {
    const { todo } = this.props;
    return (
      <li className={todo.Completed ? "checked" : ""} id="Todolist" >
        
        <span onClick={this.OnToggle}>{todo.Title}</span>

        <button className="close" onClick={() => this.OnDelete(todo.Id)}>
          Remove
        </button>
        
      </li>
    );
  }
}

export default TodoItem;
