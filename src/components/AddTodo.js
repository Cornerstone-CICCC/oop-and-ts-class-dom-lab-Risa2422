import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  static counter = 0;

  constructor(props) {
    super(props);
    this.handleAddToTodoList = this.handleAddToTodoList.bind(this);
  }

  handleAddToTodoList() {
    const inputTodo = document.querySelector("#todo-input");
    if (!inputTodo.value.trim()) {
      alert("Todo item cannot be empty.");
      return;
    }

    AddTodo.counter++;
    const item = {
      id: AddTodo.counter,
      todo: inputTodo.value,
      complete: false,
    };

    this.props.todoContext.addTodo(item);
    inputTodo.value = "";
  }

  render() {
    const addElement = document.createElement("div");
    addElement.className = "add-todo";
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

    addElement
      .querySelector("#todo-add-btn")
      .addEventListener("click", this.handleAddToTodoList);

    return addElement;
  }
}