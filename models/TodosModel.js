const db = require("./connection");
class TodosModel {
  static getAll() {
    return db.query("SELECT * FROM todos ORDER BY id ASC");
  }

  static getOne(id) {
    return db.query("SELECT * FROM todos WHERE id = $1", [id]);
  }

  static addOne(body) {
    return db.query("INSERT INTO todos (title, completed) VALUES ($1, $2)", [
      body?.title,
      body?.completed,
    ]);
  }

  static updateOne(id, body) {
    return db.query(
      "UPDATE todos SET title = $1, completed = $2 WHERE id = $3",
      [body?.title, body?.completed, id]
    );
  }

  static deleteOne(id) {
    return db.query("DELETE FROM todos WHERE id = $1", [id]);
  }
}

module.exports = TodosModel;
