window.onload=function(){
    var uiDesign=document.querySelector("#uiDesign");
    var ui=document.querySelector("#ui");
    var program=document.querySelector("#pro");

    var uiLabel = document.querySelectorAll(".ui");

    for(var i=0; i<uiLabel.length; i++){
        uiLabel[i].addEventListener("change",function(e){
            console.log(e.target);
        })
    }
    var likeColor = document.querySelector("#likeColor");
    likeColor.addEventListener("change",function(e){
        console.log(e); //target에서 option을 보면 selectedIndex로 0,1,2로 나타난다
        //selectedIndex 2 는 green
        console.log(e.target.value);
    })
    var myForm = document.querySelector("#myForm");
    myForm.addEventListener("submit", function(e){
        var yesNo = confirm("정말로 전송할까요?");

        if(yesNo==false){
            e.preventDefault();//새로고침 안되도록

        }
        
    })

}