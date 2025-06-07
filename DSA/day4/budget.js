function runProgram(input) {
  input = input.split("\n");
  let arr = input[0].split(" ").map(Number);
  let budget = +input[1];
  maxSubArr(arr, budget);
}

function maxSubArr(arr, budget) {
  let start = 0;
  let sum = 0;
  let maxLength = 0;
  let bestStart = 0, bestEnd = 0;

  for(let end=0;end<arr.length;end++){
    sum+=arr[end];

    while(sum>budget&&start<=end){
      sum-=arr[start];
      start++;
    }
        if(end-start+1>maxLength){
      maxLength=end-start+1;
      bestStart=start;
      bestEnd=end;
    }
  }

  console.log("Max Length:", maxLength);
  console.log("Subarray:", arr.slice(bestStart, bestEnd + 1));
}

function countABCSubstrings(str) {
  let count = 0;
  let n=str.length;

  for(let i=0;i<n;i++){
    let set = new Set();

    for(let j=i;j<n;j++){
      set.add(str[j]);

      if(set.has('a') && set.has('b') && set.has('c')){
        count++;
      }
    }
  }

  console.log(count);
}
