/*$("#navigation-hover").mouseover(function (){
           $("#navigation-background").animate({width: "100%"}, 500);
            $("#menu-list li").css("font-weight", "bolder");
    $("#name a").css({'font-weight' : '900'});
           });

        $("#navigation-hover").mouseleave(function (){
            $("#navigation-background").animate({width: "0"}, 500);
	    $("#menu-list li").css("font-weight", "100");
            $("#name a").css({'font-weight' : '900'});
           });*/


$("#about-link").click(function() {
    $("#about").show("slow");
});

$("#x").click(function() {
    $("#about").hide("slow");
});

window.onload = addListeners();

function addListeners(){
    document.getElementById('about').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    var div = document.getElementById('about');
    div.style.marginTop = 0;
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}

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