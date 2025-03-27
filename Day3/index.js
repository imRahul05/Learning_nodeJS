const express = require('express')
const fs = require('fs');
const todoRouter = require('./Routes/todo.routes');

const app = express();

app.use(express.json());//body parser,that senses json being sent

//Routes for todos
app.use("/todos",todoRouter)
app.get('/test',(req,res)=>{
 //   console.log("this is testing...")
    res.send("this is testing..")
})
 
app.listen(3000,()=>{
    console.log("Server started on port 3000")
})