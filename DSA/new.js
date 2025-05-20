// https://docs.google.com/document/d/1j5DJhO11OUofnLlj4ZdBioXzi8dPnjNEZ8Y7Ayb2I-s/edit?tab=t.0

// function helper(i,j,k,mat)
// {
    
//     if(i<0 || j<0 || i>9 || j>9)
//         return;
//     if(k==0)
//     {
//         mat[i][j]=1;
//         return;
//     }
    
//     helper(i-1,j-2,k-1,mat);
//     helper(i-1,j+2,k-1,mat);
//     helper(i+1,j-2,k-1,mat);
//     helper(i+1,j+2,k-1,mat);
    
    
//     helper(i-2,j-1,k-1,mat);
//     helper(i+2,j-1,k-1,mat);
//     helper(i-2,j+1,k-1,mat);
//     helper(i+2,j+1,k-1,mat);
    
// }

// function knightTour(input)
// {
//     let [i,j,k]=input.trim().split("").map(Number);
//     let mat=Array.from({length:10},()=>Array(10).fill(0));
//     helper(i,j,k,mat)
//     let fans=0;
//     for(let i=0;i<10;i++)
//     {
//         for(let j=0;j<10;j++)
//         {
//             if(mat[i][j]==1)
//                 fans++;
//         }
//     }
//     return fans;
// }


function runProgram(input) {
  input = input.trim().split('\n');
  let idx = 0;
  const T = parseInt(input[idx++]);

  for (let t = 0; t < T; t++) {
    const n = parseInt(input[idx++]);
    const arr = input[idx++].split(' ').map(Number);

    const { totalShots, order } = getMinimumShotsAndOrder(arr);
    console.log(totalShots);
    console.log(order.join(' '));
  }
}

function getMinimumShotsAndOrder(arr) {
  // Pair each can with its original index (1-based)
  const cans = arr.map((durability, i) => ({ durability, index: i + 1 }));

  // Sort descending by durability to minimize shots
  cans.sort((a, b) => b.durability - a.durability);

  let totalShots = 0;
  for (let i = 0; i < cans.length; i++) {
    // Shots = a_i - x + 1, where x = i (number of cans knocked down)
    totalShots += cans[i].durability - i + 1;
  }

  // Extract the shooting order
  const order = cans.map(can => can.index);

  return { totalShots, order };
}

const input = `
2
3
20 10 20
4
10 10 10 10
`;
runProgram(input);


function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);
  let res = linearSearch(arr, k);

  if (res) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}


const input = `
5 3
1 2 3 4 5
`;
runProgram(input);
