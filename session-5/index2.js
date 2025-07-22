
let a=[1,2,3,32,23,23,3,3,4,45,5,6,6,6,7,7,8,6]
// a.sort()

function removeDuplicates(arr){
    arr.sort()
    let newArr=[]
     newArr.push(arr[0])
    for(let i=1;i<arr.length;i++){
         if(arr[i]!==arr[i-1]&&arr[i]!==newArr[newArr.length-1]){
            newArr.push(arr[i])
         }
    }

    let obj={}

    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]===undefined){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]+=1
        }
    }

    console.log(newArr,obj)
}

removeDuplicates(a)

