
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


function Stopwatch(timerHolder){

    this.timerHolder = timerHolder;
    this.startValue;
    this.timeOutReference = undefined;

    this.run = function(startValue){

        this.startValue = startValue;

        if(this.timeOutReference ){
           this.stop();
        };
        this.startStoper();
    };
    this.startStoper = function()
    {
        if(this.startValue < 0){
            return;
        }

        this.timerHolder.innerHTML = this.startValue--;
        var self = this;
        
        this.timeOutReference = setTimeout(function(){
            self.startStoper();
        }, 1000);
    };
    this.stop = function(){
        clearTimeout(this.timeOutReference);
    }

    this.continue = function(){
        this.startStoper();
    }
}

window.onload = function(){

    
    var timerStartButtonVariable = document.getElementById('timerStart');
    var timerStopButtonVariable = document.getElementById('timerStop');
    var timerResumeButtonVariable = document.getElementById('timerResume');
    var timerHolderVariable = document.getElementById('timerHolder');
    
    var timeIntervalRef;

    var stopWatch = new Stopwatch(timerHolder);

    timerStartButtonVariable.onclick = function(){
        var startValueVariable = document.getElementById('startValue').value;
        stopWatch.run(startValueVariable);
    };
    timerStopButtonVariable.onclick = function(){
        stopWatch.stop();
    }
    timerResumeButtonVariable.onclick = function(){
        stopWatch.continue();
    };
};
