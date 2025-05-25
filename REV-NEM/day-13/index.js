// const express = require('express')
// const http = require('http')
// const app = express() 
// const cors = require('cors')
// const {Server} = require('socket.io')
// //take the help of http server
// const server = http.createServer(app)

// const io = new Server(server,{
//     cors:{
//         origin:"http://127.0.0.1:5500",
//         methods:["GET","POST"]
//     }
// }) 
// app.use(cors())
// // IO is the main chat server
// io.on("connection",(socket)=>{ //socket means client
//      console.log("socket connected",socket.id)


//      socket.on("registerName",(name)=>{
//         userObj[socket.id]=name
//         console.log(userObj)
//      })
//      socket.on("sendMessage",(message)=>{
//         console.log(message||"undefined")
//      })
// })

// let userObj ={}
// //sockets events
// server.listen(9000,()=>{
//     console.log('server started')
// })

const express = require("express")
const {Server} = require("socket.io")
const http = require("http")

const app = express()
const httpServer = http.createServer(app)
const wss = new Server(httpServer)

app.get("/", (req, res) => {
    res.send("API is working")
})

const obj = {
}

wss.on("connection", (socket) => {
    socket.on("info", (data) => {
        obj[data.username] = socket.id
        console.log(obj)
    })

    socket.on("private_message", (data) => {
        const {to_name, message} = data;
        wss.to(obj[to_name]).emit("message", message)
    })
})

httpServer.listen(8080)
