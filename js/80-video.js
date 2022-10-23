window.onload = function(){
    //video
    var myVideo = document.querySelector("#myVideo");
    //playPause
    var playPause = document.querySelector(".playPause");
    //stop
    var stopBtn = document.querySelector(".stop");
    //prev
    var prev = document.querySelector(".prev");
    //next
    var next = document.querySelector(".next");

    //playPause를 클릭하면 비디오가 재생되도록
    playPause.addEventListener("click",function(){
        //비디오가 재생중일때 클릭을하면 비디오는 멈추고, 버튼은 play
        //비디오가 멈췄을때 클릭을하면 비디오는 재생되고, 버튼은 pause
        if(myVideo.paused){
            myVideo.play();
            playPause.style.backgroundImage="url(images/btn-pause.png)"
        }
        else{
            myVideo.pause();
            playPause.style.backgroundImage="url(images/btn-play.png)";
            // 스크립트는 경로가 html기준이다 (css와 달리)
        }
        console.log(myVideo.currentTime);
    })
    //stop버튼을 클릭하면 비디오 재생이 완전 멈춤
    stopBtn.addEventListener("click",function(){
        myVideo.pause();//일시정지버튼만 존재한다. 정지버튼은 없으므로 아래한줄 추가
        myVideo.currentTime=0;
        playPause.style.backgroundImage="url(images/btn-play.png)";
    })

    //.next를 클릭하면 빨리감기 5초씩 건너뛰기
    next.addEventListener("click", function(){
        myVideo.currentTime += 5;
    })

    prev.addEventListener("click", function(){
        myVideo.currentTime -= 10;
    })
}