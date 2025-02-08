
/*
    .createElement() - funkcja tworząca nowy element ale nie przypisująca go do pliku HTML.

    aby dodać element do bloku HTML należyn najpierw za pomocą metody querySelector() wybrać miejsce w kodzie np. body jak niżej,
    a następnie za pomocą metod appendChild(element) dodać element do tego miejsca.
*/

var temp = document.createElement("p");

temp.style.color = "red";
temp.style.backgroundColor = "blue";
temp.className = "testClass";
temp.innerHTML = "<p id = 'testowy2'> testowy tekst <p> 4";

var body = document.querySelector("body");

body.appendChild(temp);

var temp2 = document.getElementById("testowy2");
temp2.style.color = "green";


var programmingCourses = document.getElementById("kurs_programowania");

programmingCourses.parentNode.removeChild(programmingCourses);