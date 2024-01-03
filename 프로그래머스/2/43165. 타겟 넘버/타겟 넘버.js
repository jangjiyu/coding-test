function solution(numbers, target) {
    var answer = 0;
    
    // numbers array, 어디까지 했는지 idx, sum
    function dfs(arr, idx, sum) {
        // arr 마지막까지 왔으면 멈춤 & sum이 target이랑 같으면 answer++
        if(idx === arr.length -1) {
            if(sum === target) answer++;
            return;
        }
        // sum에 arr[idx + 1] 더한 값 넘겨주기
        dfs(arr, idx + 1, sum + arr[idx + 1])
        // sum에 arr[idx + 1] 뺀 값 넘겨주기
        dfs(arr, idx + 1, sum - arr[idx + 1])
    }
    
    // idx는 -1을 넣어줘야 dfs를 0번 인덱스부터 시작 가능
    dfs(numbers, -1, 0)
    
    return answer;
}