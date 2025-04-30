function reverse(arr){

   let start =0
   let end = (arr.length)-1

   while(start<end){
    let temp = arr[start]
    arr[start]= arr[end]
    arr[end]=temp
    start++
    end--
   }
   
}

let arr =[2,3,4,5,6,7,8]

reverse(arr)
console.log(arr)