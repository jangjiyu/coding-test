function solution(sequence, k) {
  let answer = [0, 1000000]; // 문제에서 제시된 범위보다 큰 숫자 넣기

  let start = 0;
  let end = 0;
  let count = sequence[0];

  while (end < sequence.length) {
    if (count === k && answer[1] - answer[0] > end - start) {
      answer = [start, end++];
      count += sequence[end];
      count -= sequence[start++];
    } else if (count > k) {
      count -= sequence[start++];
    } else {
      count += sequence[++end];
    }
  }

  return answer;
}
