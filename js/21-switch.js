//날짜와 관련된 객체보기
var date = new Date();
console.log(date);
//모든객체는 대문자로 시작, 컴퓨터의 날짜와 관련된 모든 사항이 Date객체에 담겨있다

//년도
var year = date.getFullYear();
console.log(year);
//모든 개체는 속성과 메소드를 가짐
//2022 fullyear year 22

//월
var month = date.getMonth();
console.log(month); //5 :  0부터 순서를 체크하고 5번째달 = 6월

//일
var toDay = date.getDate();
console.log(toDay);

//요일
var day= date.getDay();
console.log(day); // 0 일요일 1 월요일 2 화요일

switch(day){
    case 0 :
        document.write("오늘은 일요일입니다");
        break;
    case 1 :
        document.write("오늘은 월요일입니다");
        break;
    case 2 :
        document.write("오늘은 화요일입니다");
        break;
    case 3 :
        document.write("오늘은 수요일입니다");
        break;
    case 4 :
        document.write("오늘은 목요일입니다");
        break;
    case 5 :
        document.write("오늘은 금요일입니다");
        break;
}