$(function("menu")){
  var $hamburger=$("menu");

$hamburger.om("mouseClick",function(){
    $hamburger.slideUp();
}).on("mouseleave", function(){
    $hamburger.slideDown();
});



