$(document).ready(function() {

    var hint = $("<div class = 'box'> testowy tekst </div>");
    hint.css("opacity",0.9);
    $("body").prepend(hint);

    $(":button[value='Schowaj']").click(function() {
       
        hint.animate({
            "left":10,

        },1000)
        .animate({
            "width": 0,
            "height": 0,
            "opacity": 0
        }, 500,
    function(){
        hint.css("display","none");
    });
        
    });

    $(":button[value='Pokaż']").click(function() {
       
        hint.animate({
            "left":0,
            "width":350,
            "height":350,
            "opacity":0.9
        },500,function(){
            hint.css("display","flex");
        });
    });
});
