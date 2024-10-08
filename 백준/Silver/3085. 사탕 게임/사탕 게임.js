const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input.shift());
const originCandy = input.map((row) => row.split(""));

const maxOfArray = (arr) => {
  let max = 1;
  let count = 1;
  let alphabet = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === alphabet) {
      count++;
    } else {
      max = Math.max(max, count);
      alphabet = arr[i];
      count = 1;
    }
  }
  return Math.max(max, count);
};

const maxOfCandy = (candy, row, col) => {
  let max = 1;
  max = Math.max(max, maxOfArray(candy[row]));
  const colArray = candy.map((r) => r[col]);
  max = Math.max(max, maxOfArray(colArray));
  return max;
};

let max = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - 1; j++) {
    [originCandy[i][j], originCandy[i][j + 1]] = [originCandy[i][j + 1], originCandy[i][j]];
    max = Math.max(max, maxOfCandy(originCandy, i, j), maxOfCandy(originCandy, i, j + 1));
    [originCandy[i][j], originCandy[i][j + 1]] = [originCandy[i][j + 1], originCandy[i][j]];

    [originCandy[j][i], originCandy[j + 1][i]] = [originCandy[j + 1][i], originCandy[j][i]];
    max = Math.max(max, maxOfCandy(originCandy, j, i), maxOfCandy(originCandy, j + 1, i));
    [originCandy[j][i], originCandy[j + 1][i]] = [originCandy[j + 1][i], originCandy[j][i]];
  }
}

console.log(max);
