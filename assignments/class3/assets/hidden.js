$(function(){
    var footerHidden=true;

    $("footer").on("click", function(){

      if(footerHidden){
           $(this).next().show();
           footerHidden=false;
       }else{
           $(this).next().hide();
           footerHidden=true;
       }


    });
