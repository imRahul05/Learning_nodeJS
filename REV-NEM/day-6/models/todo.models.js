const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    status:{type:String},
    noOfLikes:{type:Number}
})

let TodoModel = mongoose.model("todo",TodoSchema)


module.exports={TodoModel}