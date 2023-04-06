// 1.switch 파이썬엔 없는 문법 고로, 중요도가 점점 낮아진다. 
//ctrl + l => console clear
// 여러줄 복사하고 싶을 때 : alt + shift + 위아래
// 같은 단어 찾고 싶을 때 : ctrl + d
// 같은 모든 단어 찾기 :  ctrl + shifr + l 
// 자동정렬 : cmd + a, cmd k + f
// 전체 줄선택 : ctrl + L
// 한줄 잘라내기  ctrl + x / 한줄 삭제: ctrl + shift + k
// cd 폴더명 : 파일위치 이동 (cd 폴더명/폴더명 하면 두단계 이동 가능)
// cd .. : 전 상위 폴더 이동
// mkdir 폴더명 : 폴더 생성
// touch 파일명 파일명 : 파일 생성
// ls : 현재 폴더 파일 목록



const value = 'dafault'

switch (value) {
    case 'one':
        console.log('hello one')
        break;
    case 'two':
        console.log('hello two')
        break;
    case 'three':
        console.log('hello three')
        break;
    default:
        console.log('hello default')
        break;
}


const value2 = 'two'

switch (value2) {
    case 'one':
        console.log('hello one')
        break;
    case 'two':
        console.log('hello two')
        break;
    case 'three':
        console.log('hello three')
        break;
    default:
        console.log('hello default')
        break;
}


const value3 = 'one'

switch (value3) {
    case 'one':
        console.log('hello one')

    case 'two':
        console.log('hello two')
        
    case 'three':
        console.log('hello three')
        
    default:
        console.log('hello default')
        
}

switch (new Date().getDay()) {
    case 0:
        console.log('일요일')
        break;
    case 1:
        console.log('월요일')
        break;
    case 2:
        console.log('화요일')
        break;
    case 3:
        console.log('수요일')
        break;
    case 4:
        console.log('목요일')
        break;
    case 5:
        console.log('금요일')
        break;
    case 6:
        console.log('토요일')
        break;

    default:
        break;
        //default는 견고한 코드를 위해 써주는 말입니다. 마지막 default+break는 생략해도 됩니다.
        
}

// 다른 언어에서 switch문 어떻게 사용할까요? python은 switch문 없는데?
// JavaScript는 아래 문법 대신 switch 문법을 사용합니다.

const 요일2 = 10
const 요일객체2 = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일',
}


//널리쉬 연산자 사용
console.log(요일객체2[요일2] ?? 'hello')
// 단락평가 사용
console.log(요일객체2[요일2] || 'hello')

