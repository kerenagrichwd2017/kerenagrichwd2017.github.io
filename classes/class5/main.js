$(function(){

    var $myNavItem =$("nav>ul>li");
  // var $myDropdown = $myNavItem.find("div");

    $myNavItem.on("mouseover",function(){
        $(this).find("div").animate{
            {height:auto}, 2000
        };
    $myDropdown.slideDown("mouseleave");
        $(this).find("div").animate{
        {height:0}, 2000
        };

    });



});
