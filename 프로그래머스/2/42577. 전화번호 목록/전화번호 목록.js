function solution(phone_book) {
    let answer = true;
    
    phone_book.sort((a, b) => b - a);
    
    const minLen = phone_book[phone_book.length - 1].length;
    
    const obj = {};
    
    for(let i = 0; i < phone_book.length; i++) {
        for(let j = minLen; j < phone_book[i].length; j++) {
            obj[phone_book[i].slice(0, j)] = true;
        }
    }

    while(phone_book.length) {
        if(obj[phone_book[phone_book.length - 1]]) {
            answer = false;
            break;
        }
            
        phone_book.pop();
    }
    
    return answer;
}
