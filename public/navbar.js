var element = document.getElementById("navbart");
// document.getElementsByClassName("navbart").style.transition = "all 2s";
// document.getElementsByClassName("logot").style.transition - "all 2s"
function myfunc() {
    if(element.style.border === '0px'){
        element.style.width = '15%';
        element.style.border = 'none';
        document.getElementById("w").style.color= 'aliceblue';
    }else{
        element.style.width ='0%';
        element.style.border = '0px';
        document.getElementById("w").style.color= 'black';
    }
}