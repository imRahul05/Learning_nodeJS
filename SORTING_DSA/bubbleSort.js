

// function bubbleSort(arr){

//    let n= arr.length
//    for(let i=0;i<n;i++){
//     for(let j=0;j<n-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             swap(arr,j,j+1)
//         }
//     }
//    }

// }

// function swap(arr,i,j){

//     let temp = arr[i]
//     arr[i]= arr[j]
//     arr[j]= temp
// }
// let arr =[1,2,3,4,2,1,6,5] 
// //[3,0,5,8,9]
// //[0,3,5,8,9]

// //let arr=[3,5,0,9,8]

// // [3,0,5,9,8]
// bubbleSort(arr)
// console.log(arr.join(" "))




function ThreeMinMax(arr){

    let n= arr.length
    bubbleSort(arr)

    let min=[]
    let max=[]

    for(let i=0;i<n&&min.length<3;i++){
        
        if(min.indexOf(arr[i])===-1){
            min.push(arr[i])
        }
    }
    for(let i=n-1;i>=0&&max.length<3;i--){
        
        if(max.indexOf(arr[i])===-1){
            max.push(arr[i])
        }
    }

    if(min.length!==3&&max.length!==3){
        console.log("Not Possible")
        console.log("Not Possible")
    }else{
        console.log(min.join())
        console.log(max.reverse().join())
    }
}

function bubbleSort(arr){

   let n= arr.length
   for(let i=0;i<n;i++){
    for(let j=0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            swap(arr,j,j+1)
        }
    }
   }

}

function swap(arr,i,j){

    let temp = arr[i]
    arr[i]= arr[j]
    arr[j]= temp
}
let arr =[1,2,3,4,2,1,6,5] 
//[3,0,5,8,9]
//[0,3,5,8,9]

//let arr=[3,5,0,9,8]

// [3,0,5,9,8]
ThreeMinMax(arr)
//console.log(arr.join(" "))



