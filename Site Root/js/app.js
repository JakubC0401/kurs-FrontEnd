
/*

*/

//tablica w JS jest obiektem - ma swoje właściwości i funkcje.

var tabProducts = [
    "PHP",
    "MySql",
    "HTML",
    "js",
    "PDO",
    "AJAX"
];


/*
var result = document.getElementById("result");

var i = 0;
while(i < tabProducts.length)
{

    result.innerHTML += tabProducts[i] + "<br>";
    i++;
};
*/

/*

var i = 0;

do
{

    alert(i)
    i++;

}while(i < tabProducts.length)

*/

var result = document.getElementById("result");

var kursy_programowania = document.getElementById("kurs_programowania").getElementsByTagName("li");

var i = 0;
while(i < kursy_programowania.length){

    
    result.innerHTML += kursy_programowania[i].innerHTML + "<br>";
    i++;
};

