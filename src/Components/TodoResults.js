import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoStore from "../stores/TodoStore";

@observer
class TodoResults extends Component {
  render() {
    return (
      <div
        id="todo-results"
        style={{ display: TodoStore.AllTodos > 0 ? "block" : "none" }}
      >
        <p> All Tasks: {TodoStore.AllTodos}</p>
        <p> Active Tasks: {TodoStore.ActiveTodos}</p>
        <p style={{ borderRight: "none" }}>
          {" "}
          Tasks Completed: {TodoStore.CompeleteTodos}
        </p>
      </div>
    );
  }
}

export default TodoResults;
