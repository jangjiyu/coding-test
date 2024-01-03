const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((row) => row.split("").map(Number));

// y(세로축), x(가로축) 순서(밑, 오, 왼, 위)
let point = [
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 0],
];

function bfs() {
  // 움직인 거 queue에 넣기 (y, x, 움직인 수)
  let queue = [[0, 0, 1]];

  // queue에 값이 없을 때까지 반복
  while (queue.length) {
    // queue에서 하나씩 빼서 움직이기
    let [y, x, count] = queue.shift();

    // 마지막 queue 값이면 움직인 수 출력
    if (y === N - 1 && x === M - 1) return count;

    // 다음 이동 위치 탐색(point 네 지점)
    for (let i = 0; i < 4; i++) {
      const nextY = y + point[i][0];
      const nextX = x + point[i][1];

      // 이동 가능 하면 queue에 넣기(map 안에 위치하고 값이 1인 경우)
      if (nextY >= 0 && nextY < N && nextX >= 0 && nextX < M && map[nextY][nextX]) {
        // 간 곳 0으로 바꿔주기
        map[nextY][nextX] = 0;
        //queue에 이동한 좌표, count + 1 넣기
        queue.push([nextY, nextX, count + 1]);
      }
    }
  }
}

console.log(bfs());
