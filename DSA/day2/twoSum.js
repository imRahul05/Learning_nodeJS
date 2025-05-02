

function twoSum(arr,k){

   let s =0, e=arr.length-1
   let sum=0
    while(s<e){

        let sum = arr[s]+arr[e]
        if(sum<k){
            s++
        }else if(sum>k){
            e--
        }else{
            return [s,e]
        }
    }
    return [-1,-1]
}

const arr = [1,2,3,4,5]

console.log(twoSum(arr,6))