const route = require("express").Router();
const TodosController = require("../controllers/TodosController");

route.get("/todos", TodosController.getTodos);
route.get("/todos/:id", TodosController.getTodo);
route.post("/todos", TodosController.AddTodo);
route.put("/todos/:id", TodosController.UpdateTodo);
route.delete("/todos/:id", TodosController.deleteTodo);

module.exports = route;
