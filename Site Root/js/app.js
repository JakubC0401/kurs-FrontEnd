$(document).ready(function() {

    $("#dragMe").draggable({
        cursor: "pointer"
    });

    $(".ui-draggable").css("font-size",20);

    $("#dragMe").draggable("option","axis", "x");
    $("#dragMe").draggable("option","helper", "clone");
    $("#dragMe").draggable("option","opacity", 0.4);
    $( "#dragMe" ).draggable({
        stop: function( event, ui ) {
            //$("#dragMe").draggable("option","disabled",true);
            $("#dragMe").offset(ui.offset);
            $("#dragMe").position(ui.position);
        }
      });

   // $("#dragMe").draggable("option","disabled",true);
});

