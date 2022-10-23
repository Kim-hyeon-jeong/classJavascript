//키를 입력받아서 저장
var height=Number(prompt("당신의 키를 입력하세요",""));
//몸무게
var weight=Number(prompt("당신의 몸무게를 입력하세요", ""));
//적정몸무게 구하기
var sWeight=(height-100)*0.9; // 키 160일때 54 49~59범위
sWeight-5 <= weight && weight <= sWeight+5 ? console.log("정상") : console.log("노력");