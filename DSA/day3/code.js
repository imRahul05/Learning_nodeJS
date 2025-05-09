function sort012(arr)
{
    let cz=0;
    let co=0;
    let ct=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==0)
            cz++;
        else if(arr[i]==1)
            co++;
        else
            ct++;
    }
    arr.clear();
    for(let i=0;i<cz;i++)
        arr.push(0);
    for(let i=0;i<co;i++)
        arr.push(1);
    for(let i=0;i<ct;i++)
        arr.push(2);
}
function swap(arr,i,j)
{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function sort012Better(arr)
{
    let i=0;
    let j=0;
    let k=arr.length-1;
    while(i<k)
    {
        if(arr[i]==0)
        {
            swap(arr,i,j);
            i++;
            j++;
        }
        else if(arr[i]==1)
        {
            i++;
        }
        else //2
        {
            swap(arr,i,k);
            k--;
        }
    }
}



function sort012(arr)
{
    let cz=0;
    let co=0;
    let ct=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==0)
            cz++;
        else if(arr[i]==1)
            co++;
        else
            ct++;
    }
    arr.clear();
    for(let i=0;i<cz;i++)
        arr.push(0);
    for(let i=0;i<co;i++)
        arr.push(1);
    for(let i=0;i<ct;i++)
        arr.push(2);
}
function swap(arr,i,j)
{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function sort012Better(arr)
{
    let i=0;
    let j=0;
    let k=arr.length-1;
    while(i<k)
    {
        if(arr[i]==0)
        {
            swap(arr,i,j);
            i++;
            j++;
        }
        else if(arr[i]==1)
        {
            i++;
        }
        else //2
        {
            swap(arr,i,k);
            k--;
        }
    }
}





function row_helper(arr,rnum)
{
    for(let col=0;col<arr[0].length;col++)
        arr[rnum][col]=0;
}
function col_helper(arr,cnum)
{
    for(let row=0;row<arr.length;row++)
        arr[row][cnum]=0;
}
function setMatrix(arr)
{
    let coordinates=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[0].length;j++)
        {
            if(arr[i][j]==0)
            {
                let smallans=[];
                smallans.push(i);
                smallans.push(j);
                coordinates.push(smallans);
            }
        }
    }
    for(let sa of coordinates)
    {
        row_helper(arr,sa[0]);
        col_helper(arr,sa[1]);
    }
}


class MinStack{

    constructor(){
        this.data=[];
        this.helper=[];
    }

    push(val)
    {
        this.data.push(val);
        if(this.helper.length==0 || val<=this.helper[this.helper.length-1])
            this.helper.push(val);
    }

    pop()
    {
        this.data.pop();
        if(this.data[this.data.length-1]==this.helper[this.helper.length-1])
            this.helper.pop();
    }

    getMin()
    {
        return this.helper[this.helper.length-1];
    }

    top()
    {
        return this.data[this.data.length-1];
    }
}


function sort012(arr)
{
    let cz=0;
    let co=0;
    let ct=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==0)
            cz++;
        else if(arr[i]==1)
            co++;
        else
            ct++;
    }
    arr.clear();
    for(let i=0;i<cz;i++)
        arr.push(0);
    for(let i=0;i<co;i++)
        arr.push(1);
    for(let i=0;i<ct;i++)
        arr.push(2);
}
function swap(arr,i,j)
{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function sort012Better(arr)
{
    let i=0;
    let j=0;
    let k=arr.length-1;
    while(i<k)
    {
        if(arr[i]==0)
        {
            swap(arr,i,j);
            i++;
            j++;
        }
        else if(arr[i]==1)
        {
            i++;
        }
        else //2
        {
            swap(arr,i,k);
            k--;
        }
    }
}

// let arr=[0,2,2,2,1,1,2,2,0,1,0,0,1];
// console.log(arr);
// sort012Better(arr);
// console.log(arr);




function row_helper(arr,rnum)
{
    for(let col=0;col<arr[0].length;col++)
        arr[rnum][col]=0;
}
function col_helper(arr,cnum)
{
    for(let row=0;row<arr.length;row++)
        arr[row][cnum]=0;
}
function setMatrix(arr)
{
    let coordinates=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[0].length;j++)
        {
            if(arr[i][j]==0)
            {
                let smallans=[];
                smallans.push(i);
                smallans.push(j);
                coordinates.push(smallans);
            }
        }
    }
    for(let sa of coordinates)
    {
        row_helper(arr,sa[0]);
        col_helper(arr,sa[1]);
    }
}

let arr=[[1,4,5],[9,4,5],[9,10,9]];

console.log(arr);
setMatrix(arr);
console.log(arr);



function reverseLL(head)
{
    let prev=null;
    let curr=head;
    let next=null;
    while(curr!=null)
    {
        // s1 intiall the next ptr
        next=curr.next;
        //s2 break old and make new connection
        curr.next=prev;
        //s3 move the ptr ,  prev---curr curr--- next
        prev=curr;
        curr=next;
    }
    return prev;
}