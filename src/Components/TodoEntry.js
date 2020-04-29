import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoStore from "../stores/TodoStore";
import TodoItems from "./TodoItems";
import TodoResults from "./TodoResults";

@observer
class TodoEntry extends Component {
  state = {
    value: "",
  };

  handlekey = (event) => {
    debugger;
    if (event.keyCode !== 13) {
      return;
    }
    if (this.state.value == "") {
      alert("Please write your Title");
    } else {
      event.preventDefault();
      TodoStore.AddTodo(this.state.value);
      this.setState({ value: "" });
    }
  };

  AddTitle = () => {
    debugger;
    if (this.state.value == "") {
      alert("Please write your Title");
    } else {
      TodoStore.AddTodo(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <div>
        <div id="myDIV" className="header">
          <h2 style={{ margin: "5px" }}>Daily To Do List</h2>
          <input
            type="text"
            id="myInput"
            placeholder="Add your Title..."
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
            onKeyDown={(event) => this.handlekey(event)}
          />

          <span onClick={() => this.AddTitle()} className="addBtn">
            Add Title
          </span>

          <br />
          <br />
          <TodoResults/>
        </div>

        <TodoItems />
      </div>
    );
  }
}

export default TodoEntry;
