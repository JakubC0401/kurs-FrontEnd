
var tabProducts = [
    "PHP",
    "MySql",
    "HTML",
    "js",
    "PDO",
    "AJAX"
];


var elements = document.getElementById("kurs_programowania").getElementsByTagName("li");

for(var i = 0; i < elements.length; i++)
{
    if(i % 2 == 0)
    {
        elements[i].innerHTML = "nieparzysty: " + elements[i].innerHTML;
    }
    else
    {
        continue;
    }

}
