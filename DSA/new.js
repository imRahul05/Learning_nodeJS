https://docs.google.com/document/d/1j5DJhO11OUofnLlj4ZdBioXzi8dPnjNEZ8Y7Ayb2I-s/edit?tab=t.0

function helper(i,j,k,mat)
{
    
    if(i<0 || j<0 || i>9 || j>9)
        return;
    if(k==0)
    {
        mat[i][j]=1;
        return;
    }
    
    helper(i-1,j-2,k-1,mat);
    helper(i-1,j+2,k-1,mat);
    helper(i+1,j-2,k-1,mat);
    helper(i+1,j+2,k-1,mat);
    
    
    helper(i-2,j-1,k-1,mat);
    helper(i+2,j-1,k-1,mat);
    helper(i-2,j+1,k-1,mat);
    helper(i+2,j+1,k-1,mat);
    
}

function knightTour(input)
{
    let [i,j,k]=input.trim().split("").map(Number);
    let mat=Array.from({length:10},()=>Array(10).fill(0));
    helper(i,j,k,mat)
    let fans=0;
    for(let i=0;i<10;i++)
    {
        for(let j=0;j<10;j++)
        {
            if(mat[i][j]==1)
                fans++;
        }
    }
    return fans;
}