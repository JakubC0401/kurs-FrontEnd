
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

    var email = document.getElementById('email');
    var submitFormButton = document.querySelector("#newsletter input[type='submit']");

    submitFormButton.onclick = function(e){

        var tmp = document.getElementById("tmp");
        e.preventDefault();


        tmp.innerHTML = email.value;

        if(email.value === 'jc@gmail.com'){
            this.parentNode.submit();
        }
        else{
            alert("Niepoprawny email");
        }

        
    }
};
