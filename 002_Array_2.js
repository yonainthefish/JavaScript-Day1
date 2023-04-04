const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function(el) {
    return el % 2 === 0

})


function solution(n) {
    return Array(n)
        .fill()
        .map((_, i) => i + 1)
        .filter((v) => v % 2 === 0) //짝수값 구하는 것
        .reduce((a, c) => a + c, 0);
}

// _ 첫번째 들어오는 값 의미없는 부를 땐 아이템 , 의미없는 부분을 _로 표시하는건 관습이다~

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function(el) {
    return el % 2 !== 0
})

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))





