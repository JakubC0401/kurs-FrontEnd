
/*

    Events - zdarzenia - to co się dzieje w przeglądarce


    DHTML - Dynamic HTML - HTML + CSS + JS

    addEvetListener - metoda do dodawania zdarzeń do elementów
    removeEventListener - metoda do usuwania zdarzeń z elementów
*/

function createEvent(obj, eventName, functionToInvoke){
    if(document.addEventListener){
        obj.addEventListener(eventName, functionToInvoke);
    }
    else{
        obj.attachEvent('on' + eventName, functionToInvoke);
    }

};

function removeEvent(obj, eventName, functionToInvoke){
    if(document.removeEventListener){
        obj.removeEventListener(eventName, functionToInvoke);
    }
    else{
        obj.detachEvent('on' + eventName, functionToInvoke);
    }
};

function changleColor(){

    this.style.backgroundColor = 'red';

};
function changleColor2(){
    
    this.style.backgroundColor = 'green';

};
function fontSizeUp(){
    var fontSize = parseInt(window.getComputedStyle(this).fontSize);

    this.style.fontSize = ++fontSize + 'px';
};

window.onload = function(){

    var test = document.getElementById('testDiv3');

    var stop = document.getElementById('stop');

    createEvent(test, 'mouseover', changleColor);
    createEvent(test, 'mouseover', fontSizeUp);
    createEvent(test, 'mouseout', changleColor2);

    removeEvent(stop, 'click', fontSizeUp);

    //test.onmouseover = changleColor;
    //test.onmouseout = changleColor2;

    /*
    test.addEventListener('mouseover', changleColor);
    test.addEventListener('mouseover', fontSizeUp);
    test.addEventListener('mouseout', changleColor2);


    stop.addEventListener('click', function(){
        
        test.removeEventListener('mouseover', fontSizeUp);
      
    });
    */
};
