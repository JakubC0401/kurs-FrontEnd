
/*

    Events - zdarzenia - to co się dzieje w przeglądarce


    DHTML - Dynamic HTML - HTML + CSS + JS

    addEvetListener - metoda do dodawania zdarzeń do elementów
    removeEventListener - metoda do usuwania zdarzeń z elementów
*/


function movingImage(e, objectMove){
    objectMove.style.left = e.clientX - objectMove.width/2 + 'px';
    objectMove.style.top = e.clientY - objectMove.height/2 + 'px';
}

window.onload = function(){
    var wykrzyknik = document.getElementById('wykrzyknik');
    var toTopButton = document.getElementById('toTopButton');


    window.onscroll = function(){
        if(window.scrollY > 300){
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    }

    toTopButton.onclick = function(){
        window.scrollTo(0, 0);
    };

    wykrzyknik.onmousedown = function(){

        var tempSelf = this;

        document.onmousemove = function(e){

            movingImage(e, tempSelf);

        };
    };

    wykrzyknik.onmouseup = function(){
        document.onmousemove = null;
    };

    wykrzyknik.ondragstart = function(e){
        e.preventDefault();
    }
};
