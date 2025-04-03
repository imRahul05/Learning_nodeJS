const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    age:{type:Number,min:20,max:120},
    location:String,
    isMarried:Boolean,
    password:{type:String,default:"pass123"},
    gender:{type:String,enum:["male","female"]}
})

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;