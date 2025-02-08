
var courses = [
    "PHP",
    "MySql",
    "HTML",
    "js",
    "PDO",
    "AJAX"
];


var elements = document.getElementById("kurs_programowania").getElementsByTagName("li");

for(var property in elements){

    if(typeof(elements[property]) != "object"){
        break;  
    }
    alert(elements[property].innerHTML);

}

// person = {
//     name: "John",
//     surname:"Doe",
//     age: 26
// };


// for(var x in person){
//     alert(person[x]);
// }

// var allCoursesString = "";

// for(var course in courses){
//     allCoursesString += courses[course];
// }

// alert(allCoursesString);