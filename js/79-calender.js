window.onload=function(){
    //왼쪽버튼
    var leftBtn = document.querySelector(".prevBtn");
    //오른쪽버튼
    var rightBtn = document.querySelector(".nextBtn");

    //시스템의 현재 날짜 정보 얻어오기
    var date = new Date();

    //년도
    var year = date.getFullYear();
    //월
    var m = date.getMonth();
    //일
    var today = date.getDate();
    //각 달의 마지막 날짜를 저장할 배열만들기
    var lastDay = [31,28,31,30,31,30,31,31,30,31,30,31];

    function makeCalendar(){
        //이번달 1일의 정보를 얻어오기
        var firstDay = new Date(year,m,1);

        //1일의 요일 알아오기
        var thisWeek = firstDay.getDay();

        //몇줄
        var row = Math.ceil((lastDay[m] + thisWeek)/7);

        var num=1;

        document.querySelector(".title").innerHTML = year + "년 " + (m+1) + "월";
        //몇줄의 7칸짜리 테이블 만들기

        var calender=document.querySelector(".calender");
        calender.innerHTML="";//빈칸을 주고 아래과정 줄을 만들어준다
        //그래야 다음달 넘어갈때 기존달 지워지고 새로운달 새로만들어짐
        for(i=0;i<row;i++){
        //tr추가하기(줄)
            var tableTr = calender.insertRow();
            for(j=0; j<7;j++){
                if((i == 0 && j<thisWeek)||(num>lastDay[m])){
                    var cell=tableTr.insertCell();
                }
                else{
                    var cell=tableTr.insertCell();
                    if(num==today){
                        cell.innerHTML="<span>"+num+"</span>";
                    }
                    else{
                    cell.innerHTML = num;
                    }
                    num++;
                }
            }
        }
    }
    makeCalendar();

    //다음달 버튼을 클릭하면
    rightBtn.addEventListener("click",function(){
        date=new Date(year,m+1,today);
        year= date.getFullYear();
        m=date.getMonth();
        makeCalendar();
    })

    leftBtn.addEventListener("click",function(){
        date=new Date(year,m-1,today);
        year=date.getFullYear();
        m=date.getMonth();
        makeCalendar();
    })
}