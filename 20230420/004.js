class Todo {
    constructor(content) {
        this.content = content;
        this.state = false;
    }

    changeState(){
        this.state === false ? this.state = true : this.state = false;
    }
}

class TodoManager {

    constructor(){
        this.todoList = [];
    }

    addItem(item){
        this.todoList.push(item);
    }

    getItems(){

        const answer = [];

        this.todoList.forEach((el) => {
            if (el.state === false) answer.push(el.content);
        });

        return answer;
    }

    getLeftTodoCount(){
        let answer = 0;

        this.todoList.forEach((el) => {
            if (el.state === false) answer += 1;
        })

        return answer;
    }
}

const todoManger = new TodoManager();

const lunch = new Todo('lunch PM12');
const running = new Todo('running PM15');
const baseball = new Todo('baseball PM21');

todoManger.addItem(lunch);
todoManger.addItem(running);
todoManger.addItem(baseball);

lunch.changeState();
console.log(todoManger.getItems());
console.log(todoManger.getLeftTodoCount());

running.changeState();
console.log(todoManger.getItems());
console.log(todoManger.getLeftTodoCount());