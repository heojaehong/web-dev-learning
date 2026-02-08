// 일반 함수
function defaultAdd(a, b) {
    return a + b;
}
console.log(defaultAdd(2, 3));  // 결괏값: 5

// 화살표 함수
const arrowAdd = (a, b) => {
    return a + b;
}
console.log(arrowAdd(3, 4));    // 결괏값: 7

// 축약형 화살표 함수
const simpleArrowAdd = (a, b) => a + b; // 단일 표현식(expression)이기 때문에 중괄호와 return 생략
console.log(simpleArrowAdd(4, 5));  // 결괏값: 9