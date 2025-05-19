const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const TodoRouter = require('./routes/todo.routes');
const userRouter = require("./routes/user.routes");
const connectedToDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/DAY11')
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Connection failure", error)
    }
}
app.use(express.json());

app.use('/user',userRouter)

// Todo routes
app.use("/todo", TodoRouter);

// All invalid routes
app.use((req, res) => {
  res.status(404).json({ msg: "Invalid route" });
});

// PORT
const PORT = 3002;

// Starting the port
app.listen(PORT, () => {
  connectedToDB();
  console.log(`server running at ${PORT}`);
});