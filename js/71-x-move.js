window.onload=function(){
    var x = document.querySelector(".x");
    x.style.left=0; 
    x.style.top=0;

    document.onclick=function(e){
        //사용자가 클릭한 위치
        var xPos = e.clientX;
        var yPos = e.clientY;
        console.log(xPos,yPos);

        console.log(x.style.left);
        //그림의 위치값을 단위를 제거하여 저장
        var iconPosX = parseInt(x.style.left);
        var iconPosY = parseInt(x.style.top);

        //이동할 거리를 계산
        //x
        var moveX = xPos - iconPosX;
        var moveY = yPos - iconPosY;

        setInterval(function(){ // 이동되는 모습을 조각조각내어 연결하고싶다
            if((moveX>0 && iconPosX<xPos) || (moveX<0 && iconPosX>xPos)){
            iconPosX += moveX *0.2;
            iconPosY += moveY *0.2;//20프로만큼찍기

            x.style.left=iconPosX+"px";
            x.style.top=iconPosY+"px";
            }
        },50)
    }
}