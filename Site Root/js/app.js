
/*


TAB

-------------------------------------------------
| [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]  |
-------------------------------------------------
*/

//tablica w JS jest obiektem - ma swoje właściwości i funkcje.

var tabProducts = [
    "PHP",
    "MySql",
    "HTML",
    "js"
];

alert(tabProducts[0]); //odwołanie do pierwszego elementu tablic -- "PHP"....

tabProducts[4] = "PDO"; //dodanie elementu do tablicy

alert(tabProducts.length);


var array1 = new Array(); //drugi sposób tworzenia tablic w JS


//ASSOCIATIVE ARRAYS - przyporządkowanie wartości -> klucz - wartość

var osoba = [];

osoba["imie"] = "Arek";

alert(osoba["imie"]);


var kurs_programowania_UL = document.getElementById("kurs_programowania");

var kurs_programowania_LI = kurs_programowania_UL.getElementsByTagName("li");

alert(kurs_programowania_LI[0].innerHTML + " "+ kurs_programowania_LI[1].innerHTML);