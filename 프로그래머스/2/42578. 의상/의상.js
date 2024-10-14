function solution(clothes) {
  let answer = 0;
  const clothesObj = {};

  clothes.forEach(([name, type]) => {
    clothesObj[type] = clothesObj[type] ? clothesObj[type] + 1 : 1;
  });

  answer = Object.values(clothesObj).reduce((acc, cur) => acc * (cur + 1), 1);

  return answer - 1;
}