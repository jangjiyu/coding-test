function solution(clothes) {
  let answer = 0;
  let obj = {};

  clothes.forEach((cloth) => {
    obj[cloth[1]] = obj[cloth[1]] ? obj[cloth[1]] + 1 : 1;
  });

  // 경우의 수 계산
  // { a: 1, b: 1, c: 1 }
  // (1 + 1) * (1 + 1) * (1 + 1) - 1
  // { a: 3 }
  // (3 + 1) - 1
  answer = Object.values(obj).reduce((acc, cur) => acc * (cur + 1), 1) - 1;

  return answer;
}