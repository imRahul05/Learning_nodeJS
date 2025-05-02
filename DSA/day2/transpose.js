function transposeMatrix(arr){
    let res = Array.from({ length: arr.length }, () => Array(arr[0].length).fill(0))


 for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        res[j][i]=arr[i][j]
    }
 }
 console.log(res)
}
let arr = [[1,2,3],
           [4,5,6],
          [7,8,9]]


transposeMatrix(arr)


let res=[];
function TwoSum(arr,target,si)
{
    let s=si;
    let ans=false;
    let e=arr.length-1;
    while(s<e)
    {
        let sum=arr[s]+arr[e];
        if(sum<target)
            s++;
        else if(sum>target)
            e--;
        else
        {
            res.push(s);
            res.push(e);
            ans=true:
            break;
        }
    }
    return ans;
}

function ThreeSum(arr,target)
{
    let ans=false;
    let res=[];
    for(let i=0;i<arr.length;i++)
    {
        if(TwoSum(arr,target-arr[i],i+1)==true)
            ans=true;
    }
}



function transposeMatrix(arr)
{
    let res=Array.from({ length : arr.length},()=> new Array(arr.length)).fill(0);

    for(let i=0;i<n;i++)
    {
        for(let j=0;j<n;j++)
        {
            res[j][i]=arr[i][j]
        }
    }
}

function anagram(s1,s2)
{
    //Assuming s1 and s2 having only Small Characters
    let freq=Array.from({length:26}).fill(0);
    for(let i=0;i<s1.length;i++)
        freq[s1.charAt(i)-97]++;

    for(let i=0;i<s2.length;i++)
        freq[s2.charAt(i)-97]--;

    for(let i=0;i<freq.length;i++)
        if(freq[i]!=0)
            return false;

    return true;
}


function NGOL(arr)
{
    let stack=[];
    let NGOL=[];
    let ans=[];
    stack.push(0);
    NGOL.push(-1);
    for(let i=1;i<arr.length;i++)
    {
        while(stack.length>0 && arr[i]>=arr[stack[stack.length-1]])
            stack.pop();

        if(stack.length==0)
            NGOL.push(-1);
        else
            NGOL.push(stack[stack.length-1]);

        stack.push(i);
    }
    for(let i=0;i<arr.length;i++){
        ans.push(i-NGOL[i]);
    }
    return ans;

}

