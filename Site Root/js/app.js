$(document).ready(function() {

    var stos = new Array();

   $(":header").each(function(i){

        stos.push($(this)[0].nodeName);
        $(this).html("<a href='#top' name='etykieta"+(i+1)+"'>" + $(this).html());
   })

   prepareMenu(stos);
   $("body").prepend($("<a name='top'</a>"));


});


function prepareMenu(stos){

    // tab = new Array();
    // tab['nazwa'+1] = 6;

    // window.ala = 5;
    // alert(window.ala);
    for(var i=0; i <stos.length; i++){
        
        window['item' + i] = new Array();
        window['item' + i].push(stos[i]);
        window['item' + i].wartosci = new Array();
    }

    createMenu(stos);
}

function createMenu(stos){

    while(stos.length){
        var searched = stos.pop().chatAt(1);

        for (var i = stos.length-1; i>=0; i--){
            if(parseInt((stos[i].charAt(1)) + 1) == searched) {
                window['item'+i].wartosci.push(stos.length);
                break;
            }
        }
    }

    alert(item0);
}