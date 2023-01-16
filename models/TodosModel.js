const db = require("./connection");

class TodosModel {
  static getAll() {
    return db.query("SELECT id, title, completed FROM todos");
  }
  static getOne(id) {
    return db.query(`SELECT id, title, completed FROM todos WHERE id=${id}`);
  }
  static addOne(newTodo) {
    return db.query("INSERT INTO todos (title, completed) values($1,$2)", [
      newTodo.title,
      newTodo.completed,
    ]);
  }
  static updateOne(id, updateTodo) {
    const { title, completed } = updateTodo;
    return db.query("UPDATE todos SET title=$1, completed=$2 WHERE id=$3", [
      title,
      completed,
      id,
    ]);
  }
  static deleteOne(id) {
    return db.query("DELETE FROM todos WHERE id=$1", [id]);
  }
}

module.exports = TodosModel;
