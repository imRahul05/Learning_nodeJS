const express = require("express");
const { TodoRouter } = require("./routes/todo.routes");
const { connectedToDB } = require("./configs/mongodb.config");
require("dotenv").config();

const app = express();
app.use(express.json());

//Todo routes
app.use("/todo", TodoRouter);

//all invalid routes
app.use((req, res) => {
  res.status(404).json({ msg: "Invalid route" });
});

//PORT
const PORT = 3002;

//starting the port
app.listen(PORT, () => {
  connectedToDB();
  console.log(`server running at ${PORT}`);
});
