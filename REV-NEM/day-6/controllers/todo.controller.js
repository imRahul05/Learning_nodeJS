const { TodoModel } = require("../models/todo.models")


const addTodo  = async (req,res) => {
    try {
      const newTodo =  await  TodoModel.create(req.body)
      res.status(201).json({msg:"todo created successfully",newTodo})
    } catch (error) {
        res.status(400).json({msg:"something wen wrong!!",error})
    }
}


const getAllTodos = async (req,res) => {
    try {
        const allTodos = await TodoModel.find()
        res.status(200).json({msg:"All todos",allTodos})
    } catch (error) {
        
    }
}

module.exports = {addTodo,getAllTodos}