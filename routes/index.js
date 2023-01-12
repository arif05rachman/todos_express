const router = require("express").Router();
const TodosRoute = require("./todos");

router.use(TodosRoute);

module.exports = router;
