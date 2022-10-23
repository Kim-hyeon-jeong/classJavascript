window.onload = function(){
    //키보드
    //선택자가 기므로 변수에 넣어 만들기
    var keyTest = document.querySelector("#keyTest");
    //키보드를 코드값을 보여줌
    var code = document.querySelector("#code");

    //아이콘
    var mini = document.querySelector(".icon");
    //아이콘의 위치를 체크할 변수
    var xPos = 0;
    var yPos = 0;

    //키테스트에 키보드를 누르면
    keyTest.addEventListener("keydown",function(e){
        console.log(e.key, e.keyCode, e.code);
        code.value=e.key;
        switch(e.key){
            case "ArrowRight" :
                if(xPos<570){
                    xPos += 10;
                }
                else{
                    xPos=0;
                }
                break;
            case "ArrowLeft" :
                if(xPos>0){
                    xPos -= 10;
                }
                else{
                    xPos=570;
                }
                break;
            case "ArrowDown" :
                if(yPos<351){
                    yPos +=10;
                }
                else{
                    yPos = 0;
                }
                break;
            case "ArrowUp" :
                if(yPos>0){
                    yPos -=10;
                }
                else{
                    yPos =355;
                }
                break;
        }

        mini.style.left = xPos + "px";
        mini.style.top = yPos + "px";
    })
}