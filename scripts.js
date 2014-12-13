$("#navigation-hover").mouseover(function (){
           $("#navigation-background").animate({width: "100%"}, 500);
            $("#menu-list li").css("font-weight", "bolder");
           });

        $("#navigation-hover").mouseleave(function (){
            $("#navigation-background").animate({width: "0"}, 500);
	    $("#menu-list li").css("font-weight", "100");
           });

function makeBackground(img) {
	$("body").css("background", "url(" + img.src + ") no-repeat");
    $("body").css("background-size", "cover");
}