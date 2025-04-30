function rotateArray(arr,k){
     k = k%arr.length

    reverseWithParams(arr,0,arr.length-1)
    reverseWithParams(arr,0,k-1)
    reverseWithParams(arr,k,arr.length-1)
    return arr
    
}

function reverseWithParams(arr,start,end){
     
    while(start<end){
        let temp= arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
}

function reverse(arr){
    let start = 0
    let end = arr.length-1

    while(start<end){
        let temp= arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
}


let arr = [2,3,4,5,6,1,0]
console.log(rotateArray(arr,2))
