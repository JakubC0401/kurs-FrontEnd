
/*

OBIEKT - to pojemnik do przechowywania zmiennych i funkcji tematycznie ze sobą  związanych do dalszego łatwiejszego ponownego użycia.
*/


var myDiv = document.getElementById("test");

myDiv.innerHTML = "nowa treść zmienona w JS";

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

myDiv.innerHTML = personObject; //działa pod nadpisałem domyślny toString();
/*
var osoba = new Object({
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
})
*/