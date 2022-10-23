window.onload=function(){
    
    // var uID = document.querySelector("#uID");
    // var uPass = document.querySelector("#uPass");
    // var phone = document.querySelector("#phone");
    

    

    //이름
    var namePat = /^[가-힣]*$/
    //아이디
    var idPat = /^[a-zA-Z]{4,20}$/
    //패스워드
    var passPat = /^[0-9a-zA-Z!@#$%^&*]{4,20}$/
    //이메일
    var emailPat = /^[0-9a-zA-Z]([-_~!@#$]?[0-9a-zA-Z])*@[a-zA-Z].+.[a-zA-Z]{2,3}$/
    // + : 한번이상 나오도록
    // /^[0-9a-zA-Z]*@[a-zA-Z]?.[a-zA-Z]{2,3}$/
    // /^[0-9a-zA-Z]*@([a-zA-Z].)*[a-zA-Z]{2,3}$/
    //전화번호
    var telPat = /^0\d{1,2}-?\d{3,4}-?\d{4}$/

    var myForm = document.querySelector("#member");
    myForm.addEventListener("submit",function(e){
        
        //이름이 들어있는 value값 체크하기
        // var uName = document.querySelector("#uName");
        var uName = myForm.uName.value;
        var uId = myForm.uID.value;
        var uPass = myForm.uPass.value;
        var uTel = myForm.phone.value;
        var uEmail = myForm.email.value;


        console.log(uName);
        if(namePat.test(uName)==false || uName==""){
            myForm.uName.focus();
        } 
        else if(idPat.test(uId)==false || uId==""){
            myForm.uID.focus();
        }
        else if(passPat.test(uPass)==false || uPass==""){
            myForm.uPass.focus();
        }
        else if(telPat.test(uTel)==false || uTel==""){
            myForm.phone.focus();
        }
        else if(emailPat.test(uEmail)==false || uEmail==""){
            myForm.email.focus();
        }
        else{
            alert("축하합니다~~~");
        }
        
        e.preventDefault();//새로고침 안되도록
    })
}