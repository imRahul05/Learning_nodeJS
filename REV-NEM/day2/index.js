// const fs = require('fs')

// // fs.writeFileSync('file.txt',"hello there i am here",(err,data)=>{
// //     if(err)
// //         console.log(err)

// //     else
// //     console.log(data)
// // })
// console.log("first")
// fs.appendFileSync('./file.txt',"\n adding some new lines")
// const data = fs.readFileSync("./file.txt","utf-8")
// console.log(data)
// console.log("second")
const express = require('express')

const app = express()
console.log(app.listen.toString())
app.use(express.json())
// const PORT = 3002 || 3000
// app.listen(PORT,()=>{
//     console.log("server started ",PORT)
// })