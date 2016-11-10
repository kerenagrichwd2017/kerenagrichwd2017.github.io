document.getElementById("myInfo").onclick=changeColor;
var currentColor="blue";

function changeFontSize(){
    
    if(currentColor=="blue"){
        document.button.style.color="red";
        currentColor="red";
    }else{
        document.button.style.color="blue";
        currentColor="blue";
    }
    return currentColor;
    }
}