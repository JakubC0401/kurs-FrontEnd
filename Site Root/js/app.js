
/*

    Events - zdarzenia - to co się dzieje w przeglądarce


    DHTML - Dynamic HTML - HTML + CSS + JS
*/

function changleColor(){

    this.className = "changeColor";

}
function changleColor2(){
    
    this.style.backgroundColor = 'green';

}

var test = document.getElementById('testDiv2');

test.onmouseover = changleColor;
test.onmouseout = changleColor2;