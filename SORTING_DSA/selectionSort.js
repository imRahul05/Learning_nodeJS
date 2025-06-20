

function selectionSort(arr,n){

    for(let i=0;i<n;i++){
        let minIdx= i
        for(let j=i+1;j<n;j++){
            if(arr[j]>arr[minIdx]){
               minIdx=j
            }
        }
    }
}