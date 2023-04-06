let x = 0
while (x < 10) {
    console.log('start')
    console.log(x)
    x += 1
    console.log('end')
}


let input;

do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

let input;

do {
    input = confirm('다음에도 저희와 함께 하시겠습니까?')
} while (!input);

console.log("감사합니다.");