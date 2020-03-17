function myfunc(){
var x=document.getElementById("inputId").value;
        document.getElementById("answer").innerHTML=x;
        document.getElementById("delete").style.display="";
    } 
function mydel(){
        document.getElementById("answer").innerHTML="";
        document.getElementById("delete").style.display="none";
    }
