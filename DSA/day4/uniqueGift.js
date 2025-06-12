function runProgram(input) {
  let lines = input.trim().split("\n");
  let t = +lines[0].trim();
  let output = "";

  for (let tc = 1; tc <= t; tc++) {
    let s = lines[tc].trim();
    let result = processStream(s);
    output += result;
    if (tc < t) output += "\n";
  }

  console.log(output);
}


function processStream(s) {
  let freq = {};
  let que = [];
  let frontIndex = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    handleCharacter(s[i], freq, que);
    frontIndex = updateFrontIndex(freq, que, frontIndex);
    ans += (frontIndex < que.length) ? que[frontIndex] : "#";
  }

  return ans;
}

function handleCharacter(ch, freq, que) {
  if (freq[ch] === undefined) {
    freq[ch] = 1;
    que.push(ch);
  } else {
    freq[ch]++;
  }
}


function updateFrontIndex(freq, que, frontIndex) {
  while (frontIndex < que.length && freq[que[frontIndex]] > 1) {
    frontIndex++;
  }
  return frontIndex;
}
