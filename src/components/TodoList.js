import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };
    this.updateCart = this.updateCart.bind(this);
    this.props.todoContext.subscribe(this.updateCart);
  }

  updateCart(todoList) {
    this.state.todoList = todoList;
    this.renderList();
  }

  renderList() {
    const todoListElement = document.createElement("ul");
    todoListElement.innerHTML = "";

    this.state.todoList.forEach((todo) => {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext,
      });
      todoListElement.appendChild(todoItem.render());
    });

    const container = document.querySelector(".todo-list");
    container.innerHTML = "";
    container.appendChild(todoListElement);
  }

  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"
    
    return todoListElement;
  }
}