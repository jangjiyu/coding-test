function solution(sequence, k) {
  let answer = [];

  let start = 0;
  let end = 0;
  let count = 0;

  while (start < sequence.length && end < sequence.length) {
    if (answer.length && answer[1] - answer[0] === 0) break;

    count += sequence[end];

    if (count === k) {
      if (answer.length === 0 || (answer.length && answer[1] - answer[0] > end - start)) answer = [start, end];
    }

    if (count > k) {
      while (start <= end) {
        count -= sequence[start];
        start++;

        if (count === k) {
          if (answer.length === 0 || (answer.length && answer[1] - answer[0] > end - start)) answer = [start, end];
          break;
        }

        if (count < k) break;
      }
    }

    end++;
  }

  return answer;
}