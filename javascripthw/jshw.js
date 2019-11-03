$(document).ready(function(){


$(".circle").click(function(){
        $(this).slideUp();
    });

$("#triangle").click(function(){
        $(".circle2").toggle();
    });

var circleappend=$(".circle4");

$(".circle4").dblclick(function(){
 		$(".circle3").animate({
            left: 800
        });
  	});

 $(".circle5").mouseover(function(){
    $(".circle5").css("background-color", "#AED581");
  });
 $(".circle5").mouseout(function(){
    $(".circle5").css("background-color", "#4CAF50");
  });

 
 $(".circle6").click(function(){
        $(".circle7").hide();
    });


});