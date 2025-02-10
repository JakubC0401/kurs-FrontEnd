
/*

    Events - zdarzenia - to co się dzieje w przeglądarce


    DHTML - Dynamic HTML - HTML + CSS + JS
*/

function textTest(tekst){
    alert(tekst + "!!!!");
}


var testFunction = document.getElementById("testDiv2");

testFunction.onclick = function(){
    alert("Kliknięto diva");
};