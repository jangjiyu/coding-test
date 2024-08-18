function solution(park, routes) {
    const parkArray = [];
    const start = [];
    let current;
    let maxLengtWidth;
    let maxLengtHeight;
    
    park.forEach((e, idx) => {
        const splitedPark = e.split("");
        const startIndex = splitedPark.findIndex(e => e === "S");
        
        parkArray.push(splitedPark);
        
        if (startIndex >= 0) {
            start.push(idx);
            start.push(startIndex);
        }
    })

    current = start;
    maxLengtWidth = parkArray[0].length;
    maxLengtHeight = parkArray.length;
    
    routes.forEach(e => {
        const splitedRoute = e.split(" ");
        let isCanGo = false;
        
        splitedRoute[1] = parseInt(splitedRoute[1]);
        
        if (splitedRoute[0] === "E") {
            for (let i = 1; i <= splitedRoute[1]; i++) {
                if (current[1] + i < maxLengtWidth && parkArray[current[0]][current[1] + i] !== "X") isCanGo = true;
                else {
                    isCanGo = false;
                    break;
                }
            }
            
            if (isCanGo) current = [current[0], current[1] + splitedRoute[1]];
        }
        
        if (splitedRoute[0] === "W") {
            for (let i = 1; i <= splitedRoute[1]; i++) {
                if (current[1] - i >= 0 && parkArray[current[0]][current[1] - i] !== "X") isCanGo = true;
                else {
                    isCanGo = false;
                    break;
                }
            }
            
            if (isCanGo) current = [current[0], current[1] - splitedRoute[1]];
        }
        
        if (splitedRoute[0] === "S") {
            for (let i = 1; i <= splitedRoute[1]; i++) {
                if (current[0] + i < maxLengtHeight && parkArray[current[0] + i][current[1]] !== "X") isCanGo = true;
                else {
                    isCanGo = false;
                    break;
                }
            }
            
            if (isCanGo) current = [current[0] + splitedRoute[1], current[1]];
        }
        
        if (splitedRoute[0] === "N") {
            for (let i = 1; i <= splitedRoute[1]; i++) {
                if (current[0] - i >= 0 && parkArray[current[0] - i][current[1]] !== "X") isCanGo = true;
                else {
                    isCanGo = false;
                    break;
                }
            }
            
            if (isCanGo) current = [current[0] - splitedRoute[1], current[1]];
        }
    })
    
    return current;
}