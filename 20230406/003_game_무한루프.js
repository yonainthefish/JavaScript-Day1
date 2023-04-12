let answer = Math.floor(Math.random()*100)
// (~~Math.random()*100)
let count = 0

for(;;){
    let userInput = window.prompt('값을 입력해주세요!')
    if (answer > parseInt(userInput)){
        window.alert('UP!')
    }
    else if(answer < parseInt(userInput)){
        window.alert('DOWN!')
    }
    else {
        window.alert('Correct!')
        break
    }
    count += 1
}

console.log(`${count}번째 맞추셨습니다!`)
