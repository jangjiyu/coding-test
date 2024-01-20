function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    let reserveObj = {};
    let notLostObj = {};
    
    for(let i = 0; i < reserve.length; i++) {
        if(lost.includes(reserve[i])) {
            notLostObj[reserve[i]] = true;
            answer++;
            continue;
        }
        
        reserveObj[reserve[i]] = true;
    }
    
    
    for(let i = 0; i < lost.length; i++) {
        let lostStudent = lost[i];
        
        if(notLostObj[lostStudent]) continue;
        
        if(lostStudent - 1 > 0 && reserveObj[lostStudent - 1]) {
            reserveObj[lostStudent - 1] = false;
            answer++;
            continue;
        }
        
        if(lostStudent + 1 <= n && reserveObj[lostStudent + 1]) {
            reserveObj[lostStudent + 1] = false;
            answer++;
            continue;
        }
    }
    
    return answer;
}