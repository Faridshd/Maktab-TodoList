import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoItem from "./TodoItem";
import TodoStore from "../stores/TodoStore";

@observer
class TodoItems extends Component {
  render() {
    return (
      <div>
        <ul id="myUL">
          {TodoStore.Todos.map((todo) => {
            return <TodoItem todo={todo} />;
          })}
        </ul>

        <p style = {{display : TodoStore.AllTodos > 0 ? "block" : "none", fontSize: "20px"}}>
          <span style={{ color: "red", fontSize: "24px" }}>* &nbsp;</span>Click
           on Task Title to Complete the task
        </p>
      </div>
    );
  }
}

export default TodoItems;
