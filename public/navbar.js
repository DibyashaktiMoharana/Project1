var element = document.getElementById("navbart");
// document.getElementsByClassName("navbart").style.transition = "all 2s";
// document.getElementsByClassName("logot").style.transition - "all 2s"
function myfunc() {
    if(element.style.border === '0px'){
        element.style.width = '20%';
        element.style.border = 'none';
        document.getElementById("w").style.color= 'aliceblue';
        document.getElementById("togglecontainer").style.backgroundColor = 'blue';
    }else{
        element.style.width ='0%';
        element.style.border = '0px';
        document.getElementById("w").style.color= 'black';
        document.getElementById("togglecontainer").style.backgroundColor='';
    }
}