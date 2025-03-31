const express = require('express')
const fs = require('fs')


const todoRouter = express.Router();



todoRouter.get('/get-todos',(req,res)=>{
    let data =JSON.parse( fs.readFileSync('./db.json',"utf-8"))
    let todos = data.todos
    console.log(todos)
    fs.w
    res.send("list of todos")
})

todoRouter.get('/todo/:id',(req,res)=>{
    let id = req.params.id
    let data =JSON.parse( fs.readFileSync('./db.json',"utf-8"))
    let todos = data.todos
    let index  = todos.findIndex((ele)=>ele.id===id)
    if(index==-1)
        res.send("Todo not found")
    else{
        // todos.forEach((el)=>{
        //     if(el.id===id)
        //         res.send({todo:el})
            res.send({todo: todos[index]})
       // })
    }

})
todoRouter.post('/add-todo',(req,res)=>{
    let newTodo = req.body//get the input from the body
    let data =JSON.parse( fs.readFileSync('./db.json',"utf-8"))
    let todos = data.todos
    todos.push(newTodo)
    //push the incoming req.body
    fs.writeFileSync('./db.json',JSON.stringify(data))
    console.log(todos)
    res.send("todo added")
})

todoRouter.put("/update-todo/:id",(req,res)=>{
    // :id is called as path params
    //params is key value pair in req object
    let { id } = req.params
    let data =JSON.parse( fs.readFileSync('./db.json',"utf-8"))
    let todos = data.todos
    let index  = todos.findIndex((ele)=>ele.id===id)
    if(index===-1)
        res.send("Todo not found")
    else{
        let updatedTodos = todos.map((ele)=>{
            if(ele.id===id)
                return {...ele,...req.body}
            else
            return el
        })
        data.todos = updatedTodos;
        fs.writeFileSync('./db.json',JSON.stringify(data))
    res.send("Todo updated")
}
})

module.exports = todoRouter