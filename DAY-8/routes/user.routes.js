const express = require('express');

const userRouter = express.Router();


userRouter.get("/", async (req, res) => {
     
});


userRouter.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please provide all the fields"
        })
    }
    res.status(200).json({
        message: "User created successfully",
        data: req.body
    })
});
module.exports = userRouter;
