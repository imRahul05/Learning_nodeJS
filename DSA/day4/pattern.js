



function patter(n){
    
    let count =1
    for(let i=0;i<n;i++){
        let temp =''
        for(let j=0;j<=i;j++){
             
            temp+=count
            count++
        }
         console.log(temp)
    }

}

function patter(n){
    
    let count =1
    for(let i=n-1;i>=1;i--){
        let temp =''
        for(let j=1;j<=i;j++){  
            temp+="*"
        }

       // for(let i=0;i<)
         console.log(temp)
    }

}
const n=6
patter(n)