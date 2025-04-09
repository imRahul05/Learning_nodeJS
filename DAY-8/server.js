const express = require('express');
const connectToDb = require('./config/db.config.js');
const userRouter = require('./routes/user.routes');
const TodoRouter = require('./routes/todo.routes');
require('dotenv').config();

const PORT = process.env.PORT
const app = express();
app.use(express.json())
connectToDb();

app.get("/test",(req,res)=>{
    res.status(200).json({
        message: "This is a test route"
    })
});

//User routes
app.use("/users", userRouter);
//todo routes
app.use("/todos", TodoRouter);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});
// Error handling middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});