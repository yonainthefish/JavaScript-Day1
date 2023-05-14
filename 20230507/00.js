let start = Date.now();

const result = (x) => {
    console.log(`${x}가 실행되는데 걸리는 시간 : ${Date.now() - start}`);
}

const asyncBlocking = () => {
    return new Promise((resolve) => {
        let i = 0;
        while (i < 9999999) {
            i++
        }
        resolve("blocking finished");
    });
}

result('동기식 코드1');
result(asyncBlocking());
result('동기식 코드2');

const num = 'abcde1abc12abb';

let sum = 0;
for (let i = 0; i < num.length; i++) {
  const char = num.charAt(i);
  if (!isNaN(char)) {
    sum += parseInt(char, 10);
  }
}

console.log(sum);