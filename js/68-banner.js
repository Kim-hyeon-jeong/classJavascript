window.onload=function(){
    //버튼을 선택자를 변수로 쓰기
    var leftBtn = document.querySelector(".leftBtn");
    var rightBtn = document.querySelector(".rightBtn");

    //이미지
    var myImg = document.querySelector(".bannerImg");

    //그림의 순서를 체크할 변수만들기
    var showBanner = 1;

    //오른쪽 버튼을 클릭하면 그 다음 이미지가 myImg에 보이도록
    rightBtn.addEventListener("click",function(){
        console.log(showBanner);
        if(showBanner<5){
        showBanner++;
        }
        else{
            showBanner =1;
        }
        myImg.src = "images/dunkin0" +showBanner+".jpg";
    })

    leftBtn.addEventListener("click",function(){
        console.log(showBanner);
        if(showBanner>=2){
        showBanner--;
        }
        else{
            showBanner = 5;
        }
        myImg.src = "images/dunkin0" +showBanner+".jpg";
    })
}