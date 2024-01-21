//카운터 만들기
// 0 이상의 값으로 초화 한 뒤  하나씩 숫자를 증가할 수  있는 카운터를 만들기
// Counter 클래스 만들기  


class Counter {
    //counter에서 value를 지정해주기 
    #value;
    // 시작하는 value를 외부로 부터 받아온다. 
    constructor(startValue) {
        // 숫자가 아니고 유효한 범위안에 있는지 아닌지 확인할거야 
        if(isNaN(startValue) || startValue < 0) {
            //외부로 부터 접근이 불가능하도록 프라이빗 필드로 만들기 
            this.#value = 0;
        } else {
            this.#valuse = startValue;
        }
    }
//외부에서 value를 볼 수만 있기 때문에 접근제어자 get을 사용  
get value() {
    return this.#value;
}
// 화살표 함수를 사용하여 증감연산자로 정의해보자 
increment = () => {
    this.#valuse++; 
};
}
//사용할 때 어떤 코드를 사용할 수 있을찌?
//내가 사용하는 코드를 먼저 작성해서 어떻게 로직을 이끌어갈지 계획을 세우고! 코드가 동작하도록 짜보자 

//counter라는 객체 instance를  counter라는 함수로 만들었다. 
const counter = new Counter(0);
// 한번씩 증감 되는 api..? => 이 경우 counter.increment() 메서드는 Counter 클래스 외부에서 접근하고 상태를 수정할 수 있는 동작이나 기능을 정의합니다.
counter.increment(); //1
counter.increment(); //2
console.log(counter.value);
