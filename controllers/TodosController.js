const TodosModel = require("../models/TodosModel");

class TodosController {
  static getTodos(req, res) {
    const todos = TodosModel.getAll();
    res.status(200).json(todos);
  }
  static getTodo(req, res) {
    const { id } = req.params;
    const todo = TodosModel.getOne(id);
    res.status(200).json(todo);
  }
  static AddTodo(req, res) {
    const { id, title, completed } = req.body;
    const newTodo = TodosModel.addOne({
      id: Number(id),
      title,
      completed: Boolean(completed),
    });
    res.status(201).json(newTodo);
  }
  static UpdateTodo(req, res) {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTodo = TodosModel.updateOne(Number(id), {
      title,
      completed: Boolean(completed),
    });
    res.status(200).json(updatedTodo);
  }
  static deleteTodo(req, res) {
    const { id } = req.params;
    const deletedTodo = TodosModel.deleteOne(Number(id));
    res.status(200).json(deletedTodo);
  }
}

module.exports = TodosController;
