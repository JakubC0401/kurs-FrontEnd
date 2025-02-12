
$(document).ready(function() {
    // Your code here

    // $("div > b").css("background-color", "red"); //pobranie bezpośredni tag b w tagu div
   // $("div.a, li.b").css("color", "blue"); //pobranie tagu div z klasą a oraz tagu li z klasą b

   //$("#amazing + div").css("color", "red"); //pobranie tagu div po tagu z id amazing

   //$("#amazing ~ div").css("color", "red"); //pobranie tagów div po tagu z id amazing


   $("div").click(function(){
       $(this).css("font-weight", "bold");
   });


});

