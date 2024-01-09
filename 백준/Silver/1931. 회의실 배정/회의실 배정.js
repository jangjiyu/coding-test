const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N] = input.shift().split(" ").map(Number);
const map = input.map((row) => row.split(" ").map(Number));

function greedy(N, meetings) {
  let answer = 0;

  // 회의 시간표 정렬(끝나는 시간 기준으로, 끝나는 시간이 동일하면 시작 시간을 기준으로 내림차순 정렬)
  meetings.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let closeTime = 0;

  // 회의 끝나는 시간을 기준으로 다음 개최 가능 회의 확인 (회의 끝나는 시간 이후에 시작하는 회의)
  for (let i = 0; i < meetings.length; i++) {
    if (meetings[i][0] >= closeTime) {
      answer++;
      closeTime = meetings[i][1];
    }
  }

  return answer;
}

console.log(greedy(N, map));
