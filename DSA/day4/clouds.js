

function jumpingClouds(input){
    
    input = input.split("\n")
    let tests = +input[0]
    let index=1
    for(let i=1;i<=tests;i++){
        let n = +input[index]
        let arr = input[index+1].split(" ").map(Number)

        main(n,arr)
        index+=2
    }
}

function main(n,arr){
     
    let jumps=0
    let i=0,j=1
    while(i<n&&j<n){
        if(arr[i]===0&&arr[j]===1){
            jumps++
        }
         i++
         j++
        // else if(arr[i]===0&&arr[j]===1){
        //     j++
        // }
        // else if(arr[i]===1&&arr[j]===0){
        //     i++
        // }
    }
    console.log(jumps)
}



function logic(){
    let position=0;
    let jumps=0;
    while (position<n-1) {
      if (position+2<n && clouds[position+2]===0) {
        position+=2;
      } else {
        position+=1;
      }
      jumps+=1;
    }
    console.log(jumps);
}
const input =`2
7
0 0 1 0 0 1 0
6
0 0 0 0 1 0`

jumpingClouds(input)