const express = require('express');
const app = express();
const connectToDB = require('./configs/mongo.config');
const UserRouter = require('./routes/user.routes');
require('dotenv').config();
app.use(express.json())
connectToDB();
app.get('/test',(req,res)=>{
    res.status(200).json({msg:"This is testing route."})
})

app.use('/users',UserRouter)

// app.res((req,res)=>{
//     res.status(200).json({msg:"This is not a valid route"})
// })
app.listen(8080,()=>{
    console.log("server started")
})