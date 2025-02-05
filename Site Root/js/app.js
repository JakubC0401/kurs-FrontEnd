
/*

OBIEKT - to pojemnik do przechowywania zmiennych i funkcji tematycznie ze sobą  związanych do dalszego łatwiejszego ponownego użycia.
*/


var myDiv = document.getElementById("test");

myDiv.innerHTML = "nowa treść zmienona w JS";

/*
var personObject = {
    name:"John",
    surname:"Doe",
    age: 46,
    downloadInformation: function()
    {
        return this.name + " " + this.surname +" "+ this.age;
    },

    toString: function()
    {
        return this.name + " "+this.surname; //nadpisanie domyślnej metody toString()
    }

};
*/

function Person(name, surname, age){  ///konstruktor klasy Person

    this.name = name,
    this.surname = surname,
    this.age = age

    this.toString = function(){
       return this.name + " " + this.surname + " " + this.age;
    };
};

var x = new Person("Adrian", "Kowalski", 45);
var y = new Person("John","Doe",32);
var z = new Person("Krystyna","Kamionka",65);

myDiv.innerHTML = x + "<br>" + y + "<br>" + z; //działa bo nadpisałem domyślny toString();


