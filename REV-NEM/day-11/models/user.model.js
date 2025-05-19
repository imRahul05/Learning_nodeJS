const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{type:String,unique:true,require:true},
    password:{type:String,unique:true,require:true}
})


const userModel = mongoose.model('user',userSchema)

module.exports=userModel