$(document).ready(function() {

    $("#course_list tr td:nth-child(2)").addClass("cell_control");


    $("#course_list tr").addClass("pattern1");
    $("#course_list tr:even").addClass("pattern2");

    $("#course_list tr:not(#course_list tr:first-childe)").bind("click",function(event)
    {
        alert("aaa");
    })
});
