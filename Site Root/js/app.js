
$(document).ready(function() {

    //$("#simpleForm :text").css("width", 100);

    $("simpleForm :text").css({"width": 100, "background-color": "yellow"});

    $("#simpleForm :checkbox").click(
        function () 
        { 
            
            var x = $("#simpleForm :checked").length;
            $("#info").text("You have selected " + x + " checkboxes");
        });


});

