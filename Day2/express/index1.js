const express = require('express');

const app = express();

// console.log(app)


app.get('/about',(req,res)=>{
    res.send("This is About Page")
})
app.get('/contact',(req,res)=>{
    res.send("This is contact Page")
})

//HomePage CRUD Operations
app.get('/home',(req,res)=>{
    res.send("This is Home Page")
})
app.post('/home',(req,res)=>{
    res.send("This is Home Page")
})
app.put('/home',(req,res)=>{    
    res.send("This is Home Page")
})
app.delete('/home',(req,res)=>{     
    res.send("This is Home Page")
})


//Listening to the server
app.listen(8000,()=>{
    console.log("server started at http://localhost:8000")
})