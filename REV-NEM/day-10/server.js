const express = require("express");
const mongoose = require("mongoose");
const { connectedToDB } = require("../day-11/configs/db.config");
const userRouter = require("../day-11/routes/user.routes");
require("dotenv").config();



const app = express();
app.use(express.json());

// user routes
app.use("/user", userRouter);

// All invalid routes
app.use((req, res) => {
  res.status(404).json({ msg: "Invalid route" });
});

// PORT
const PORT = 3002;

// Starting the port
app.listen(PORT, () => {
  connectedToDB();
  console.log(`server running at PORT`);
});