// 정직원, 파트타임 직원을 구분하는 클래스
// 직원들의 정보 :이름, 부터이름, 한달근무 시간
// 매달 직원들의 정보를 이용해서 한달월급을 계산 할 수 있다. 
// 정직원은 시간당 10000원, 파트타임 직원은 시간당 8000원

class Employee {
    constructor(name, department, hourPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hourPerMonth = hourPerMonth;
        this.payRate = payRate;
    }
    calculatepay(){
        return this.hourPerMOnth * this.payRate;
    }
}

class FullTimeEmpliyee extends Employee {
    static PAY_RATE = 10000;
    constructor (name, department, hourPerMonth){
        super(name, department, hourPerMonth, FullTimeEmpliyee.PAY_RATE);
    }
}
class PartTimeEmpliyee extends Employee {
    static PAY_RATE = 8000;
    //payRate에 대해 숫자로 적는 것 보다 PAY_RATE라고 선언해 주는게 좋다 . 
    constructor (name, department, hourPerMOnth){
        super(name, department, hourPerMOnth, PartTimeEmpliyee.PAY_RATE);
    }
}

 const ellie = new FullTimeEmployee("엘리", "s/w", 30);
 const bob = new PartTimeEmployee("밥", "s/w", "20");
 console.log(ellie.calculatPay);
 console.log(bob.calculatPay);