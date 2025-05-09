const express = require('express')
const {addTodo,getAllTodos} = require('../controllers/todo.controller')

const TodoRouter = express.Router()

TodoRouter.post("/add-todo",addTodo)

TodoRouter.get("/get-todos",getAllTodos)

module.exports={TodoRouter}