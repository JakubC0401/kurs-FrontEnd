

var programming_course = document.getElementById("kurs_programowania");



programming_course.setAttribute("class","changeColor");

programming_course.removeAttribute("class");

alert(programming_course.childNodes[1].firstChild.textContent);

programming_course.childNodes[1].firstChild.textContent = "something new";