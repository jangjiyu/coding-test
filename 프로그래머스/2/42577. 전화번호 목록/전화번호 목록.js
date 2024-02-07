function solution(phone_book) {
    let answer = true;
    
    // phone_book sort
    phone_book.sort((a, b) => a - b);
    
    const minLen = phone_book[0].length;
    
    const obj = {};
    
    for(let i = 0; i < phone_book.length; i++) {
        for(let j = minLen; j < phone_book[i].length; j++) {
            obj[phone_book[i].slice(0, j)] = i;
        }
    }

    for(let i = 0; i < phone_book.length; i++) {
        if(obj[phone_book[i]] && obj[phone_book[i]] !== i) {
            answer = false;
            break;
        }
    }
    
    return answer;
}