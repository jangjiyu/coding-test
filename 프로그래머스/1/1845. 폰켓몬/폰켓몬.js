function solution(nums) {
  let answer = nums.length / 2;

  const set = new Set(nums);

  return Math.min(set.size, answer);
}