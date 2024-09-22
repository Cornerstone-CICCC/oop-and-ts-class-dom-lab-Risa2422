export class TodoContext {
  constructor() {
    this.todoList = []; // todos
    this.listeners = []; // functions
  }

  addTodo(todo) {
    this.todoList.push(todo);
    this.notifyListeners();
  }

  deleteTodo(todo) {
    this.newArr = this.todoList.filter((item) => {
      return item.id !== todo.id;
    });
    this.todoList = this.newArr;

    this.notifyListeners();
  }

  markComplete(item) {
    const newTodos = this.todoList.map((todo) => {
      return todo.todo === item.todo ? { ...todo, complete: true } : todo;
    });

    this.todoList = newTodos;
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.todoList));
  }
}