
/*FUNKCJE



*/

function add(x, y){
    
    return x + y;
}

function minus(x, y){
    
    return x - y;
}
function divide(x, y){

    if(y != 0){

        return x / y;
    }
    else{
        return "nie dziel przez 0!"
    }
    
}

function poleTrojkata(wysokoscT, dlugoscPodstawy){
    
    poleT = (wysokoscT*dlugoscPodstawy)/2;

    return poleT;
}

var a = add(10,2);

var b = minus(10,8);

var c = divide(10,5);

var d = divide(10,0);

var e = divide(7, 3);

alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
