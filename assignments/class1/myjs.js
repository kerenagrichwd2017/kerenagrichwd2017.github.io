document.getElementById("myButton").onclick =changeColor;
var currentColor = "blueviolet";

function changeColor(){

    if(currentColor=="blueviolet"){
        document.body.style.color = "green";
        currentColor="green";
    } else{
        document.body.style.color = "blueviolet";
        currentColor="blueviolet";
    }
    return currentColor;

}
