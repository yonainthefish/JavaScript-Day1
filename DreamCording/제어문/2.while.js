// while(조건){}
//조건이 false가 될 떄까지 {} 코드를 반복 실행

let isActive = true;
let i = 0;
while(isActive) {
    console.log('아직살아있다');
    if (i ===1000) {
        break;
    }
    i++;
}

//꼭 한번은 실행하고 싶다면 do while
do {
    console.log('do-while');
    
} while (isActive);