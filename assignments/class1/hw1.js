document.getElementById("myInfo").onclick=changeColor;
var currentColor="blue";

function changeFontSize(){

    if(currentColor=="blue"){
        document.body.style.color="red";
        currentColor="red";
    }else{
        document.body.style.color="blue";
        currentColor="blue";
    }
    return currentColor;
    }
}
