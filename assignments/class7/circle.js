$(function(){

    var h="0";
    var s="50";
    var l="50";
    var color="hsl(0,50%, 50%)";

    var mySlider1=$("#sat");
    var mySlider2=$("#light");
    var myCircle=$("#circle");

    mySlider1.on("change mousemove", function(){
        myCircle.css("background","hsl(0,"+mySlider1.val()+"%), "+mySlider2.val()+"%");
        myCircle.data("color", "hsl(0,"+mySlider1.val()+"%), "+mySlider2.val()+"%");
    });
    }





}




