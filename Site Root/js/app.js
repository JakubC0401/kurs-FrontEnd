
/*FUNKCJE


function test(f){
    f(y+10);
}

test(function(x) {
    alert("coś tam coś" + x);
});
*/


var hi = function(type)
{
    if(type ==="szef")
    
        return function(name)
        {
            alert("cześć szefie " + name +" !");
        };
    else{
        return function(name){
            alert("Cześć" + name + " !");
        };
    }
}


var zwroconaFunkcja = hi("szef");

zwroconaFunkcja("Arek");
