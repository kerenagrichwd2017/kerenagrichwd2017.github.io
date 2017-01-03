

$(function(){

    var $myNavItem = $("nav>ul>li");

    $myNavItem.on("mouseover", function(){
        $(this).find("div").animate(
        {height:"200px"},
        {queue:false, duration: 500, easing:"linear",
         start: function(){
             $(this).css("");
         }
        }
    );
}).on("mouseleave", function(){
    $(this).find("div").animate(
        {height:"0px"},
        {queue:false, duration: 500, easing: "linear",
         complete: function(){
             $(this).css("");
         }
        }
    );

    });
}):





