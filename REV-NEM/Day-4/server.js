const express = require("express");
const cors = require('cors')
const fs = require("fs");
const userRouter = require("./routes/user.routes");
require("dotenv").config();
const app = express();
PORT = process.env.PORT;

// JSON parsing
app.use(express.json());

app.use("/user", userRouter);

// For all undefined routes
app.use((req, res) => {
  res.status(404).json({
    msg: "this route is not correct,Please check your routes and try again.",
  });
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
