
import express from 'express'
import { userModel } from '../models/user.model.js'
import { Login, SignUp } from '../controllers/user.controller.js'


export const userRouter = express.Router()

userRouter.post("/signup",SignUp)

userRouter.post("/login",Login)

