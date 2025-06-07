function maxSubArr(arr){
    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i=1;i<arr.length;i++) {
        if(arr[i]>currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart=i;
        }else{
            currentSum += arr[i];
        }

        if(currentSum>maxSum){
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }
    return maxSum
}
console.log(maxSubArr([1,2,0,4,5]));


function solve(arr) {
  let n=arr.length;

  for(let i=0;i<n;i++){
    let sum = 0;
    for(let j=i;j<n;j++){
      sum+=arr[j];
      if(sum===0){
        console.log("First:", arr[i], "Last:", arr[j]);
      }
    }
  }
}

// Test
solve([3, 4, -7, 1, 2, -6, 1, 5]);
function longestRepeatedVowel(N,str){
  const vowels='aeiou';
  let maxLen =0;
  let currentLen=0;
  let prevChar = '';

  for(let i=0;i<N;i++){
    let ch=str[i];

    if (vowels.includes(ch)){
      if(ch===prevChar){
        currentLen++;
      }else{
        currentLen=1;
        prevChar=ch;
      }
      maxLen = Math.max(maxLen, currentLen);
    }else{
      currentLen = 0;
      prevChar = '';
    }
  }

  console.log(maxLen);
}
