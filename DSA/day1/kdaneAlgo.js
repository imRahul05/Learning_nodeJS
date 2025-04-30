function main(arr,k){
    let sum=0;
    let map = new Map();

    for(let i=0;i<arr.length;i++){

        sum+=arr[i];
        if(sum===k)
            return true;
        if(map.has(sum-k))
            return true;

        map.add(sum);
    }
    return false;
}