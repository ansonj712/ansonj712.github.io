$(document).ready(function(){
	$('a.page-scroll').click(function(event){
		$("html, body").animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1500);
		event.preventDefault();
	});
	$(window).scroll(function(){
		if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        }     
        else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
	});
});