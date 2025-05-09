const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String},
    status:{type:Boolean,default:false},
    progression:{type:String,enum:["Paused","InProgress","AboutToComplete"],default:"InProgress"},
    noOfLikes:{type:Number,min:0,max:100,default:0}
})

let TodoModel = mongoose.model("todo",TodoSchema)


module.exports={TodoModel}