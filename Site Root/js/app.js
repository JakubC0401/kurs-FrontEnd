
/*

    Events - zdarzenia - to co się dzieje w przeglądarce


    DHTML - Dynamic HTML - HTML + CSS + JS

    addEvetListener - metoda do dodawania zdarzeń do elementów
    removeEventListener - metoda do usuwania zdarzeń z elementów
*/

function makeEvent(event, eventObj)
{
    var e = window.event || event;  
    var srcElement = e.target || e.srcElement;


    var tmp = document.getElementById('tmp');

    tmp.innerHTML = "źródło eventu: "+ srcElement.tagName + "<br>event przypisany do tagu: "+ eventObj.tagName; 



    
};

window.onload = function(){

    var test = document.getElementById('test');
    var pogrubiony = document.getElementById('pogrubiony');
    var przycisk = document.getElementById('przycisk');

    
    test.onclick = function(event){

        alert("Kliknięto w zwykły tekst");
        makeEvent(event, this);

    };
    pogrubiony.onclick = function(event){

        makeEvent(event, this);
        alert("Kliknięto w pogrubiony tekst");
        event.stopPropagation();

    };
    przycisk.onclick = function(event){

        makeEvent(event, this);
        alert("Kliknięto w przycisk");
        event.stopPropagation();

    };
    
};
