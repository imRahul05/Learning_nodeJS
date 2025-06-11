// 0 veg
// 1 non-veg
function processInput(input){

    input = input.split("\n")
    const tests = +input[0]
    let index =1
    for(let line=1;line<=tests;line++){
         let employee = input[index].split(" ").map(Number)
         let  meals = input[index+1].split(" ").map(Number)

         hungary(employee,meals)
         index+=2
    }
}
function hungary(emp,meals){

    let left =0
    let j=0
    let count=0
    while(left<emp.length){
         
        if(emp[left]===meals[j]){
          left++
          j++
          count++
        }else{
           let meal = meals.shift()
           meals.push(meal)
           left++
        }
    }
    
   if(count===emp.length)
    console.log("yes")
   else
   console.log("No")
}



const input=
`4
1 1 0 0
0 1 0 1`

processInput(input)