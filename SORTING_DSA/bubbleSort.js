

function bubbleSort(arr){

    let n = arr.length

    for(let i=0;i<n-1;i++){

        for(let j=0;j<n-1-i;j++){
          
            if(arr[j]>arr[j+1]){
              swap(arr,j,j+1)
            }
        }
    }
}

function swap(arr,n1,n2){

    let temp = arr[n1]
    arr[n1]=arr[n2]
    arr[n2]=temp

}
let arr =[3,5,0,9,8]
bubbleSort(arr)
console.log(arr.join(" "))