
/*

    Events - zdarzenia - to co się dzieje w przeglądarce


    DHTML - Dynamic HTML - HTML + CSS + JS

    addEvetListener - metoda do dodawania zdarzeń do elementów
    removeEventListener - metoda do usuwania zdarzeń z elementów
*/
var timeOutStoper;

function stopWatch (timeHolder, time){
    timerHolder.innerHTML = time--;

    if(time < 0){
        return;
    }

    timeOutStoper =  setTimeout(function(){

        stopWatch(timerHolder, time);

    },1000);
    return timeOutStoper;
};


window.onload = function(){
    var startValue = document.getElementById('startValue');
    var timerStartButton = document.getElementById('timerStart');
    var timerStopButton = document.getElementById('timerStop');
    var timerHolder = document.getElementById('timerHolder');

    
    timerStartButton.onclick = function(){
        var startValue = document.getElementById('startValue').value;
        timerHolder.innerHTML = startValue;

        if(timeOutStoper){
            clearTimeout(timeOutStoper);
        };

        timeOutStoper = stopWatch(timerHolder, startValue);

    };

    timerStopButton.onclick = function(){
        clearTimeout(timeOutStoper);
    };

};
