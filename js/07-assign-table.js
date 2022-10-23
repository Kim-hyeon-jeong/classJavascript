// 한줄에 3칸 테이블
// 일을 체크해줄 변수 만들기
var day = 1;

// 테이블을 저장할 변수 만들기
var myTable = "<table>";
myTable += "<tr>";
myTable +="<td>"+day+"</td>"
myTable +="<td>"+ ++day +"</td>"
myTable +="<td>"+ ++day +"</td>"
myTable += "</tr>";
myTable += "</table>";
// 문서에 변수 출력하기
document.write(myTable);   
// 바디에 출력 