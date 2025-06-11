
function processInput(input){

    input = input.split("\n")
    const tests = +input[0]
    for(let line=1;line<=tests;line++){
         
         let n = +input[line]
        // console.log(n)
         if(hack(1,n))
            console.log("yes")
        else
        console.log("no")
        
    }
}
function hack(curr,target){
    if(curr===target)
        return true
    else if(curr>target)
        return false
   
    
     return hack(target,curr*10)|| hack(target, curr * 20)
       

}

const input=
`5
1
2
10
25
100`
processInput(input)