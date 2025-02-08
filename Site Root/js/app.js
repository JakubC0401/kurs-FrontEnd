

// var programming_course = document.getElementById("kurs_programowania").getElementsByTagName("li");

// alert(programming_course[0].innerHTML)


var programming_course = document.querySelectorAll("#kurs_programowania li");




for(var index in programming_course){

    programming_course[index].style.color = "red";

};

var web_courses = document.querySelectorAll("#kurs_tworzenia_stronWWW li");

web_courses.forEach(function(element){
    element.style.display = "none";
});