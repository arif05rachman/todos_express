const express = require("express");
const routes = require("./routes");
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true })); //untuk parse body
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
