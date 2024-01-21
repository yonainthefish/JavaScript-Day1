class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.lastName} ${this.firstName}`
    }
    //함수지만 고정된 값이 아닌, 특정한 두가지의 속성을 조합해서 보여주기, 속성의 한가지로 보여지는 부분을 호출할 때 get 을 사용! 

    set fullName(value){
        console.log('set','value')
    }

    //.으로 -> get
    //할당으로 -> set
} 