
var nazwaZmiennej; //variable - etykieta(nazwa zmiennej) <- deklaracja zmiennej

nazwaZmiennej = 5; //przypisanie wartości

var vat_pl = (1 + 23 * 1/100);

var cenaNettoJava = 39;
var cenaNettoAjax = 34;

var cenaBruttoJava = cenaNettoJava * vat_pl;
var cenaBruttoAjax = cenaNettoAjax * vat_pl;

alert(cenaBruttoJava +" zł");
alert(cenaBruttoAjax + " zł");

/*
typy zmiennych:

1) liczby - number
2) ciąg znaków - string
3) wartości logiczne - true/false
4) tablice,obiekty - ....
5) null - pusta wartość
6) undefined - niezdefiniowana
*/