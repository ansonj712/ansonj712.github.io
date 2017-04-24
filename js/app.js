$(document).ready(function(){
    if($(window).width() < 768){
        $('i').removeClass("fa-2x");
        $('.icon').css({'display' : 'inline', 'padding-right' : '0.1em'})
    }
});
