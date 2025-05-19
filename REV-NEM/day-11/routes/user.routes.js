

const express = require('express')

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userRouter =  express.Router()

userRouter.post('/signup',async (req,res) => {
    
    try {
        const {email,password}= req.body
        const hash = bcrypt.hash(password, saltRounds,function(err,hash){
            if(err)
                res.status(500).json({Error:"error in signup",err})
            else{
                console.log("signup sucesful",hash)
                res.status(200).json({msg:"signup sucessfull"})
            }
        });

    } catch (error) {
        res.status(500).json({Error:"error in signup",error})
        console.log(error)
    }
})


userRouter.post('/login',async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})

module.exports=userRouter