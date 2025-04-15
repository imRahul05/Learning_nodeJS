const express = require('express');
const { connect } = require('mongoose');
const connectToDB = require('./config/data.congig');

const app = express();
require('dotenv').config()
app.use(express.json());

connectToDB();
app.get('/tests',(req,res)=>{
    res.status(200).json({msg:"This is test route"})
})


app.get((req,res)=>{
    res.status(200).json({msg:"This route is not defined"})
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});