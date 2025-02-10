
/*

    Events - zdarzenia - to co się dzieje w przeglądarce


    DHTML - Dynamic HTML - HTML + CSS + JS

    addEvetListener - metoda do dodawania zdarzeń do elementów
    removeEventListener - metoda do usuwania zdarzeń z elementów
*/



window.onload = function(){

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
};
