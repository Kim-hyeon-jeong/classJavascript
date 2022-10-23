window.onload=function(){
    var btns = document.querySelectorAll(".pager>li");
    console.log(btns);

    var boxs = document.querySelectorAll("section>div");
    console.log(boxs);
// for문 안에 i, j 선언은 생략해도 된다(var생략)
// for문에서 let을 넣어야 작동이 되더라...
    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener("click",function(){
            for( j=0;j<btns.length;j++){
                btns[j].classList.remove("active");
                boxs[j].classList.remove("active");
            }
            btns[i].classList.add("active");
            boxs[i].classList.add("active");    
        })
    }
}