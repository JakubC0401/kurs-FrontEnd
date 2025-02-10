
/*

    Events - zdarzenia - to co się dzieje w przeglądarce


    DHTML - Dynamic HTML - HTML + CSS + JS

    addEvetListener - metoda do dodawania zdarzeń do elementów
    removeEventListener - metoda do usuwania zdarzeń z elementów
*/

function makeEvent(event, str)
{
    var e = window.event || event;  

    var tmp = document.getElementById('temp');

    tmp.innerHTML = e.clientX + ' ' + e.clientY + ' ' + str;   


    var tooltip = document.getElementById('tooltip');

    tooltip.style.display = 'block';

    tooltip.style.left = e.clientX + 10 + 'px';
    tooltip.style.top = e.clientY + 10 + 'px';
    
};

window.onload = function(){

    var test = document.getElementById('testDiv');

    test.onmousemove = function(event){

        
        makeEvent(event, this.tagName);
    };
};
