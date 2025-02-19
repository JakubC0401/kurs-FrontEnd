$(document).ready(function() {
    var canvas_var = document.getElementById("canvas_element");
    var context = canvas_var.getContext("2d");

    $("#canvas_element").mouseover(function(event) {
        var { x, y } = getMousePos(canvas_var, event);
        $("#info").html("(" + x + "," + y + ")");
    });

    var i = 0;

    $("#canvas_element").click(function(event) {
        var { x, y } = getMousePos(canvas_var, event);

        if (i % 2 === 0) {
            context.beginPath();
            context.moveTo(x, y);
        } else {
            context.lineTo(x, y);
            context.stroke();
        }

        i++;
    });

    function getMousePos(canvas, event) {
        var rect = canvas.getBoundingClientRect(); // Pobiera dokładną pozycję i skalę canvasa
        var scaleX = canvas.width / rect.width;   // Obsługuje skalowanie
        var scaleY = canvas.height / rect.height;

        return {
            x: (event.clientX - rect.left) * scaleX, // Normalizuje do prawidłowej skali
            y: (event.clientY - rect.top) * scaleY
        };
    }
});
