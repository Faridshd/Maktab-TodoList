import { observable, action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable Todos = [];
  @observable AllTodos = 0;
  @observable ActiveTodos = 0;
  @observable CompeleteTodos = 0;
  lastID = 100;

  @action
  AddTodo(Title) {
    this.Todos.push(new TodoModel(this, Title, false, this.lastID++));
    this.AllTodos++;
    this.ActiveTodos++;
  }

  @action
  RemoveTodo(searchid) {
    debugger;
    var i;
    for (i = 0; i < this.Todos.length; i++) {

      if (this.Todos[i].Id == searchid) {
                
        if (this.Todos[i].Completed == true){
          this.CompeleteTodos--;
        }
        else {
          this.ActiveTodos--;
        }
        this.AllTodos--;
        this.Todos.splice(i, 1);
      }

    }
  }
}

const store = new TodoStore();
export default store;
