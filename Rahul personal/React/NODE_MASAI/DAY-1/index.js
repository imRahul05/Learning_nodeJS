const fs = require('fs');


fs.readFile("./sum.js",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})