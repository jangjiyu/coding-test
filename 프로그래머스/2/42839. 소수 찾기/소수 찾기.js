function solution(numbers) {
    let answer = 0;
    const numArr = numbers.split("");

    // set
    const set = new Set();
    
    // dfs로 다 탐색
    function dfs(numArr, numStr, idxArr) {
        if(numArr.length === idxArr) return;

        for(let i = 0; i < numArr.length; i++) {            
            if(idxArr.includes(i)) continue;
            
            const newNumStr = numStr + numArr[i]
            
            set.add(parseInt(newNumStr));
            
            const newIdxArr = [...idxArr, i];

            dfs(numArr, newNumStr, newIdxArr);
        }
    }
    
    for(let i = 0; i < numArr.length; i++) {
        set.add(parseInt(numArr[i]))
        dfs(numArr, [numArr[i]], [i]);
    }
    
    // 소수인지 찾기
    function isPrime(num) {
        if(num === 2) return true;
        if(num <= 1 || num % 2 === 0) return false;
        
        for (let i = 3; i * i <= num; i += 2) {  // 절반보다 큰 수로는 나눠볼 필요가 없음
            if(num % i === 0) return false;
        } 
        
        return true;
    }

    const setArr = Array.from(set);
    
    for(let i = 0; i < setArr.length; i++) {
        const num = setArr[i];

        if(isPrime(num)) answer++
    }
    
    return answer;
}
