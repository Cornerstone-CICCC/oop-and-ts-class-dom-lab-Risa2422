import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.todoListElement = null;
  }

  render() {
    const todoElement = document.createElement("li");
    todoElement.className = "todo-item";
    if (this.props.todo.complete) {
      todoElement.classList.add("completed");
    }

    todoElement.innerHTML = `
      <span >${this.props.todo.todo}</span>
      <div>
        <button class='mark'>Mark Complete</button>
        <button class='delete'>Delete</button>
      </div>
    `;

    const marked = todoElement.querySelector(".mark");
    marked.addEventListener("click", () => {
      todoElement.classList.add("completed");
      this.props.todoContext.markComplete(this.props.todo);
      this.props.todo.complete = true;
    });

    const deleted = todoElement.querySelector(".delete");
    deleted.addEventListener("click", () => {
      this.props.todoContext.deleteTodo(this.props.todo);
    });

    return todoElement;
  }
}