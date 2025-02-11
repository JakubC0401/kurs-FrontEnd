
/*

    Events - zdarzenia - to co się dzieje w przeglądarce


    DHTML - Dynamic HTML - HTML + CSS + JS

    addEvetListener - metoda do dodawania zdarzeń do elementów
    removeEventListener - metoda do usuwania zdarzeń z elementów
*/
window.onload = function() {

    var mainImageVar = document.getElementById('mainImage');

    var image = new Image();

    mainImageVar.appendChild(image);

    var thumbnails = document.getElementsByClassName('thumbnail');
    
    var currentthumbnail = thumbnails[0];
    currentthumbnail.className += " current";
    image.src = currentthumbnail.src;

    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].onmouseover = function() {
            currentthumbnail.className += " current";
            currentthumbnail.className = currentthumbnail.className.replace(" current", "");
            image.src = this.src;
            
            currentthumbnail = this;
        };
    }
};
