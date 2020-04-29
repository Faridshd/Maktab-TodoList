import { observable, action } from "mobx";
import TodoStore from "./TodoStore";

export default class TodoModel {
  Store;
  Id;
  @observable Title;
  @observable Completed;

  constructor(Store, Title, Completed, Id) {
    this.Store = Store;
    this.Title = Title;
    this.Completed = Completed;
    this.Id = Id;

  }

  @action
  ToggleStatus() { 
    debugger;
    if (this.Completed == false){
      TodoStore.CompeleteTodos++;
      TodoStore.ActiveTodos--;
    }
    else {
      TodoStore.ActiveTodos++;
      TodoStore.CompeleteTodos--;
    }
    this.Completed = !this.Completed;
    
  }

  
}
