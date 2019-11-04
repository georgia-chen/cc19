$(document).ready(function(){
    
    $(".box1").hover(function(){
        $(".box1").animate({
            height: 'toggle'
        });
    });

    $(".box2").hover(function(){
        $(".box2").animate({
            height: 'toggle'
        });
    });

    $(".box3").hover(function(){
        $(".box3").animate({
            height: 'toggle'
        });
    });

    $(".box4").hover(function(){
        $(".box4").animate({
            height: 'toggle'
        });
    });

    $(".box5").hover(function(){
        $(".box5").animate({
            height: 'toggle'
        });
    });

    $(".box6").hover(function(){
        $(".box6").animate({
            height: 'toggle'
        });
    });

    $(".box7").hover(function(){
        $(".box7").animate({
            height: 'toggle'
        });
    });

    $(".box8").hover(function(){
        $(".box8").animate({
            height: 'toggle'
        });
    });     

    $(".box9").hover(function(){
        $(".box9").animate({
            height: 'toggle'
        });
    });     
    var colors = ["#E53935", "#AB47BC", "#29B6F6", "#FFF176"];
        var index = 0;
        
        $("textarea").keydown(function() {
                $("textarea").css("background-color", colors[index]);
                index = index >= colors.length?0:index+1;
                
        });




});