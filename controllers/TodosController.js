const TodosModel = require("../models/TodosModel");

class TodosController {
  static getTodos(req, res) {
    TodosModel.getAll()
      .then((data) => {
        res.status(200).json(data.rows);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
  static async getTodo(req, res) {
    try {
      const { id } = req.params;
      const { rows, rowCount } = await TodosModel.getOne(id);
      if (!rowCount) res.status(400).json({ message: "id tidak ditemukan" });
      res.status(200).json(rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async AddTodo(req, res) {
    try {
      const { title, completed } = req.body;
      const { rowCount } = await TodosModel.addOne({
        title,
        completed: Boolean(completed),
      });
      if (!rowCount) throw { message: "gagal insert data" };
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json(error);
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
      if (!rowCount) res.status(400).json({ message: "id tidak ditemukan" });
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteTodo(req, res) {
    try {
      const { id } = req.params;
      const { rowCount } = await TodosModel.deleteOne(Number(id));
      if (!rowCount) res.status(400).json({ message: "id tidak ditemukan" });
      res.status(200).json({ message: "data berhasil dihapus" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = TodosController;
