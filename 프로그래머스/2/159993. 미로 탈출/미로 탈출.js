function solution(maps) {
  // 1. 레버로 ㄱㄱ
  // 2. 레버 찍은 후 visited 리셋하고 exit로 ㄱㄱ
  let answer = 0;
  const map_array_L = [];
  const map_array_E = [];
  let Sy, Sx;
  let Ey, Ex;
  let Ly, Lx;
  let N, M; // N: y 길이, M: x 길이
  const point = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  maps.forEach((e, i) => {
    const arr = e.split("");
    const arr2 = e.split("");

    if (arr.indexOf("S") !== -1) (Sy = i), (Sx = arr.indexOf("S"));
    if (arr.indexOf("E") !== -1) (Ey = i), (Ex = arr.indexOf("E"));
    if (arr.indexOf("L") !== -1) (Ly = i), (Lx = arr.indexOf("L"));

    map_array_L.push(arr);
    map_array_E.push(arr2);
  });

  N = map_array_L.length;
  M = map_array_L[0].length;

  function bfs(startY, startX, targetY, targetX, startCount, map) {
    const queue = [[startY, startX, startCount]];

    while (queue.length) {
      const [y, x, count] = queue.shift();

      // target 도착
      if (y === targetY && x === targetX) return answer = count;

      for (let i = 0; i < 4; i++) {
        const nextY = y + point[i][0];
        const nextX = x + point[i][1];

        if (nextY >= 0 && nextY < N && nextX >= 0 && nextX < M && map[nextY][nextX] !== "X") {
          queue.push([nextY, nextX, count + 1]);
          map[nextY][nextX] = "X";
        }
      }
    }
    
    return answer = -1;
  }
    
  // 레버
  bfs(Sy, Sx, Ly, Lx, 0, map_array_L);

  // exit
  if (answer > 0) bfs(Ly, Lx, Ey, Ex, answer, map_array_E);

  return answer;
}