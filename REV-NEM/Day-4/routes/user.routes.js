const express = require("express");
const { testing } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/test", testing);

module.exports = userRouter;
