const fs = require('fs');

fs.readFile('./file.txt',"UTF-8",(err,data)=>{
    
    if(err)
        console.log(err)
    else
    console.log(data)
})

fs.writeFile('new.txt',"Thi is file create with the help of writefile(fs)",(err,data)=>{

    if(err)
        console.log(err)
    else
    console.log(data)
})