//전역으로 사용하는 내장객체 
console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));
// 숫자를 정수로 변환하는 함수들 
console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함 (문자 알파벳(A-Z), 소문자 알파벳(a-z), 숫자(0-9), 구두점 및 특수 문자(예: !, @, #, $ 등) 등이 아스키 문자로 지정되어 있습니다.)
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://하은.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '하은.com';
console.log(encodeURIComponent(part));