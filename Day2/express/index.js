const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());
// console.log(app)
app.get('/todos',(req,res)=>{
    let data = JSON.parse(fs.readFileSync('./db.json'));
    let todos = data.todos;
    res.send(todos);
    console.log(todos)
})
app.post('/todos',(req,res)=>{
    let data = JSON.parse(fs.readFileSync('./db.json'));
    let todos = data.todos;
    todos.push(req.body);
    fs.writeFileSync('./db.json',JSON.stringify(data));
    res.send("added successfully");
    console.log(todos)
})
//Listening to the server
app.listen(8000,()=>{
    console.log("server started at http://localhost:8000")
})