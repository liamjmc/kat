$("#navigation-hover").mouseover(function (){
           $("#navigation-background").animate({width: "100%"}, 500);
            $("#menu-list li").css("font-weight", "bolder");
    $("#name a").css({'font-weight' : '900'});
           });

        $("#navigation-hover").mouseleave(function (){
            $("#navigation-background").animate({width: "0"}, 500);
	    $("#menu-list li").css("font-weight", "100");
            $("#name a").css({'font-weight' : '900'});
           });


var aboutActive = false;

$("#about-link").click(function() {
    $("#about").show("slow");
});

$("#x").click(function() {
    $("#about").hide("slow");
});

function makeBackground(img) {
	$("body").css("background", "url(" + img.src + ") no-repeat");
    $("body").css("background-size", "cover");
    /*$('#background')
    .animate({opacity: 0}, 'fast', function() {
        $(this)
            .css({'background': "url(" + img.src + ") no-repeat", "background-size" : "cover"})
            .animate({opacity: 1});
    });*/
}