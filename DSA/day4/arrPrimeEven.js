

function endWithEven(arr){   // all the subarray which is starting from   prime number and ending with even number.

    let count=0
    let n= arr.length
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let subArr = arr.slice(i,j+1)
            if(check(subArr)){
             count++
             console.log(subArr)
            }
              

        }
    }

     return count
}

function check(subArr){

    let start = subArr[0]
    let last = subArr[subArr.length-1]

    if(isPrime(start)&&isEven(last)){
        return true
    }

    return false
}

function isPrime(n){

    for(let i=2;i<n;i++){
        if(n%i===0)
            return false
    }

    return true
}

function isEven(n){

    if(n%2===0)
        return true
   return false
}
let arr=[2,3,6,5,9,17,11]
let arr1= [3,5,2,4,7]
console.log(endWithEven(arr1))