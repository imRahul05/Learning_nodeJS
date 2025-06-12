


function processInput(input){
     
    input= input.split('\n')
    let  tests =  +input[0]
    let stack=[]
     for(let i=1;i<=tests;i++){

       if(+input[i]===1){

        if(==-1){
            
        }else{
             console.log("No Food")
        }
                 
       }
     }
}


function top(stack){
   
    if(stack[stack.length]>0){
         let top = stack[stack.length-1]
         return top
    }
    return -1
}
// type -1 take from TOP and reduce the size by 1

// type -2  add the food at the top of the pile.

const input=
`
6
1
2 5
2 7
2 9 
1
1`