$(document).ready(function(){
			
	$(window).scroll(function(){

		if($(window).scrollTop() > 40)
		{
			$(".top_arrow").fadeIn();
		}
		else
		{
			$(".top_arrow").fadeOut();
		}
	});
	$(".top_arrow").click(function(){
		$("body,html").animate({
			"scrollTop":0
		});
	});

	
});
