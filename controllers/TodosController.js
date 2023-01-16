const TodosModel = require("../models/TodosModel");

class TodosController {
  static async getTodos(req, res) {
    try {
      const { rows } = await TodosModel.getAll();

      res.status(200).json(rows);
    } catch (error) {
      res.status(400).json({ message: error?.message });
    }
  }

  static async getTodo(req, res) {
    try {
      const { id } = req.params;
      const { rows, rowCount } = await TodosModel.getOne(id);
      if (!rowCount) throw { message: `id ${id} not found` };
      res.status(200).json(rows[0]);
    } catch (error) {
      res.status(400).json({ message: error?.message });
    }
  }

  static async AddTodo(req, res) {
    try {
      const { title, completed } = req.body;
      const { rowCount } = await TodosModel.addOne({
        title,
        completed: Boolean(completed),
      });
      if (!rowCount) throw { message: "Failed to create" };
      res.status(201).json({ message: "Created" });
    } catch (error) {
      res.status(400).json({ message: error?.message });
    }
  }

  static async UpdateTodo(req, res) {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;
      const { rowCount } = await TodosModel.updateOne(Number(id), {
        title,
        completed: Boolean(completed),
      });
      if (!rowCount) throw { message: `id ${id} not found` };
      res.status(200).json({ id, title, completed });
    } catch (error) {
      res.status(400).json({ message: error?.message });
    }
  }

  static async deleteTodo(req, res) {
    try {
      const { id } = req.params;
      const { rowCount } = await TodosModel.deleteOne(Number(id));
      if (!rowCount) throw { message: `id ${id} not found` };
      res.status(200).json({ message: `id ${id} hasbeen delete` });
    } catch (error) {
      res.status(400).json({ message: error?.message });
    }
  }
}

module.exports = TodosController;
