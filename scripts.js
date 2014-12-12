$("#navigation-hover").mouseover(function (){
           $("#navigation-background").animate({width: "100%"}, 500);
            
           });

        $("#navigation-hover").mouseleave(function (){
            $("#navigation-background").animate({width: "0"}, 500);
           });