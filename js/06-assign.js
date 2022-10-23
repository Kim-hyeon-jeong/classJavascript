// 숫자를 저장할 변수 만들기 3개
let num1= 10;
let num2= 3;
let num3= 5;
// let도 var과 비슷
// num1에 num1 + num2한 결과 넣기
num1 += num2;
console.log(num1); //13

// num1 num1-num3
num1 -= num3;
console.log(num1); //8

// num1 num1*num2
num1 *= num2;
console.log(num1); //24

// num1 num1/num3한 결과
num1 /= num3;
console.log(num1); //4.8

num3 %= num2;
console.log(num3);

// 나중에 대입연산자로 달력만들예정