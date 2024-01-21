//콜백함수
const add =(a, b) => a+b;
const multifly = (a, b) => a*b;

function calculator(a, b, action){ //action 이라는 콜백함수 외부에서 부터 전달되는 함수 
    let result = action(a, b);
    console.log(result);
    return result;
}

calculator (1,2,add); //add라는 이름만 전달햇음, 위에서 선언된 add의 참조값을 전달 
