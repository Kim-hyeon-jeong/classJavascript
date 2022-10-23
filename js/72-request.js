window.onload=function(){
    //아이콘 저장하기
    var icon = document.querySelector(".icon");

    //클릭한 위치를 저장할 변수(마우스의 위치를 저장)
    var xPos=0;
    var yPos=0;

    //icon의 위치값을 저장할 변수
    var iconX =0;
    var iconY =0;

    document.addEventListener("mousemove",function(e){
        xPos = e.clientX;
        yPos = e.clientY;
    })

    // setInterval(moveIcon,100);
    moveIcon();
    
    function moveIcon(){
        requestAnimationFrame(moveIcon);
        iconX +=(xPos - iconX)*0.2;
        iconY +=(yPos - iconY)*0.2;
        icon.style.transform = "translate(" + iconX + "px," +iconY + "px)"
    }
}