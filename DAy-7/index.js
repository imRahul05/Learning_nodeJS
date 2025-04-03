const mongoose = require("mongoose")
const express = require("./$node_modules/express/index.js")

const app = express();
app.use(express.json())
 mongoose.connect("mongodb://127.0.0.1:27017/nemb44").then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log("Error in connecting to DB",err)
})
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    location:String,
    isMarried:Boolean
})
//create schema

const UserModel = mongoose.model("User",userSchema)
// let users = await UserModel.find()
// users.then((data)=>{
//     console.log("data",data)
// }).catch((err)=>{
//     console.log("error",err)
// })

app.get('/all-users',async(req,res)=>{

    try{

    let users = await UserModel.find()
    res.status(200).json({msg:"List of Users",users})
    }catch(err){
        res.status(500).json({msg:"something went wrong ,Please try again.."})
    }
})


app.post('/add-user',async(req,res)=>{
   
    try{
        let newUser = await UserModel.create({...req.body})
        res.status(201).json({msg:"User created",newUser})

    }catch(err){
       console.log(err)
       res.status(500).json({msg:"something went wrong please try again later."})
    }
})

app.put('/update/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        let updateUser = await UserModel.findByIdAndUpdate(id,req.body)
    } catch (error) {
        console.log(err)
       res.status(500).json({msg:"something went wrong please try again later."})
    }
})
app.listen(8000,()=>{
    console.log("server started")
})