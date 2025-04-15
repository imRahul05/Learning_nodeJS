const express = require('express')
const UserModel = require('../models/user.models')
const UserRouter = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;



UserRouter.post("/signup",async(req,res)=>{
    let user = await UserModel.create(req.body)
   //  Bcrypt password
   let myPlaintextPassword = req.body.password;
   console.log("raw password given by user",myPlaintextPassword)
   bcrypt.hash(myPlaintextPassword, saltRounds,  async function(err, hash) {
    // Store hash in your password DB.
    if(err){
        res.status(500).json({
            message: "Something went wrong ,please try again later.."
        })
    }else{
        console.log("hashed password",hash)
        await UserModel.create({...req.body,password:hash})
        res.status(201).json({
            message: "User created successfully",
            user: user
        })
    }
});
})

module.exports = UserRouter