import { userModel } from "../models/user.model.js"
import bcrypt from 'bcrypt'

export const SignUp =  async(req,res)=>{

    try {
        const user = req.body

        //hashing the password
        const hashedPassword = await bcrypt.hash(user.password, 10);

        user.password = hashedPassword;

        //creating the user in MongoDB
        const newUser = await userModel.create(user)
        res.status(201).json({msg:"user created successfully",newUser})
        
    } catch (error) {
        res.status(400).json({msg:"something went wrong, user not created",error})
        console.log(error.message)
    }
    
}


export const Login =async(req,res)=>{
  
    try {
         const { email, password } = req.body;
         const user =  await userModel.findOne({email:email})
         if(!user){
            return res.status(401).json({ msg: "User not found" });
         }

         const isMatch = bcrypt.compare(password,user.password)
         if(!isMatch){
            return res.status(401).json({ msg: "password wrong,check and try again.." });
         }
         res.status(200).json({ msg: "Logged in successfully." });
         
         
    } catch (error) {
       res.status(500).json({ msg: "Login failed", error: error.message });
       console.log(error)
    }
    
}