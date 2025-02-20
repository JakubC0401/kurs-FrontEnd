$(document).ready(function() {
    $("#course_list tr td:nth-child(2)").addClass("cell_control");

    $("#course_list tr").addClass("pattern1");
    $("#course_list tr:even").addClass("pattern2");

    var hint = $("<div class='box'>testowy tekst</div>").css({
        "position": "absolute",
        "display": "none",
        "background": "#eee",
        "padding": "5px",
        "border": "1px solid #ccc"
    });

    $("body").append(hint);

    $("#course_list tr:not(:first-child)").hover(function(event) {
        hint.css({
            "display": "block",
            "top": event.pageY + 10 + "px",
            "left": event.pageX + 10 + "px"
        });
    }, function() {
        hint.css("display", "none");
    });

    $("#course_list tr:not(:first-child)").mousemove(function(event) {
        hint.css({
            "top": event.pageY + 10 + "px",
            "left": event.pageX + 10 + "px"
        });
    });
});
