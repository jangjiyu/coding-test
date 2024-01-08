function solution(scoville, K) {
  class MinHeap {
    arr = [];

    insert(value) {
      let index = this.arr.length;
      this.arr.push(value);

      // arr이 비어있지 않으면 heapify
      while (index > 0) {
        const parentIndex = Math.ceil(index / 2 - 1);
        const leftChildIndex = parentIndex * 2 + 1;
        const rightChildIndex = parentIndex * 2 + 2;
        const smallerChildIndex =
          this.arr[leftChildIndex] < this.arr[rightChildIndex] || this.arr[rightChildIndex] === undefined
            ? leftChildIndex
            : rightChildIndex;

        if (this.arr[smallerChildIndex] >= this.arr[parentIndex]) break;

        // smallerChildIndex가 parentIndex보다 작으면 바꿔줌
        if (this.arr[smallerChildIndex] < this.arr[parentIndex]) {
          [this.arr[parentIndex], this.arr[smallerChildIndex]] = [this.arr[smallerChildIndex], this.arr[parentIndex]];
          // parentIndex부터 다시 비교
          index = parentIndex;
        }
      }
    }

    remove() {
      // node가 하나도 없으면 null 반환
      if (this.arr.length === 0) return null;

      // node가 1개면 바로 pop
      if (this.arr.length === 1) return this.arr.pop();

      // 삭제는 root 노드만 가능
      // root 노드를 삭제후 마지막 노드를 root 노드로 올린 후 heapify
      const root = this.arr[0]; // 삭제된 root 노드 return해주기 위해 값 저장
      this.arr[0] = this.arr.pop();

      let parentIndex = 0;

      // 자식 노드가 존재하면 heapify
      while (parentIndex * 2 + 1 < this.arr.length) {
        const leftChildIndex = parentIndex * 2 + 1;
        const rightChildIndex = parentIndex * 2 + 2;
        const smallerChildIndex =
          this.arr[leftChildIndex] < this.arr[rightChildIndex] || this.arr[rightChildIndex] === undefined
            ? leftChildIndex
            : rightChildIndex;

        if (this.arr[smallerChildIndex] >= this.arr[parentIndex]) break;

        // smallerChildIndex가 parentIndex보다 작으면 바꿔줌
        if (this.arr[smallerChildIndex] < this.arr[parentIndex]) {
          [this.arr[parentIndex], this.arr[smallerChildIndex]] = [this.arr[smallerChildIndex], this.arr[parentIndex]];
          // smallerChildIndex부터 다시 비교
          parentIndex = smallerChildIndex;
        }
      }

      return root;
    }
  }

  let answer = 0;
  const minHeap = new MinHeap();

  for (let i = 0; i < scoville.length; i++) {
    minHeap.insert(scoville[i]);
  }

  while (minHeap.arr[0] < K && minHeap.arr.length >= 2) {
    const minScoville1 = minHeap.remove();
    const minScoville2 = minHeap.remove();
    const mixedScoville = minScoville1 + minScoville2 * 2;

    minHeap.insert(mixedScoville);
    answer++;
  }

  if (minHeap.arr[0] < K) answer = -1;

  return answer;
}