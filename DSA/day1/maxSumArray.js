function sumSubArray(arr){

    let maxSum =0
    let currSum = 0

    for(let i=0;i<arr.length;i++){
       
        if(currSum<0)
         currSum=arr[i]
        else
         currSum+=arr[i]

        maxSum=Math.max(maxSum,currSum)
    }

    return maxSum
}


let arr =[3,-4,1,2,-1]

console.log(sumSubArray(arr))