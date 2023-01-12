let todos = [
  { id: 1, title: "new activity", completed: true },
  { id: 2, title: "new activity 2", completed: false },
];

class TodosModel {
  static getAll() {
    // buat query select all data todos
    return todos;
  }
  static getOne(id) {
    const todo = todos.find((element) => element.id === Number(id));
    return todo;
  }
  static addOne(newTodo) {
    todos.push(newTodo);
    return newTodo;
  }
  static updateOne(id, updateTodo) {
    const { title, completed } = updateTodo;
    todos.forEach((element, idx) => {
      if (id === element.id) {
        todos[idx] = { id, title, completed };
      }
    });
    return { id, title, completed };
  }
  static deleteOne(id) {
    const newTodos = todos.filter((element) => {
      return id !== element.id;
    });
    todos = newTodos;
    return {
      message: `todo ${id} hasbeen deleted`,
    };
  }
}

module.exports = TodosModel;
