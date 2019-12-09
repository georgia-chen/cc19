$(document).ready(function(){


	$(".rectangle").click(function(){
		
		$(".clicked").removeClass("clicked");

        var rectangle = $(this);
        var insiderec=rectangle.find(".insiderec");
        var change= insiderec.css("background-color");
        
        $("#box").css('background-color',change);

        rectangle.addClass("clicked");

    });


});