$(document).ready(function(){
    $('header nav a').click(function(e)){
        $('header nav a.active').removeClass('active');
        $(this).addClass('active');
    $('html, body').animate({scrollTop: $(this).attr('href')).offset().top -70},'slow');

    e.preventDefault();
    return false;
    });
$(document).scroll (function(){
    var position=Math.floor($(this)/scrollTop() / 800) + 1;

    $('header nav a.active').removeClass('active');
    $('header nav a.link-' + position).addClass('active');
    });
});
