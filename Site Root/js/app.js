
$(document).ready(function() {

    // ------ FILTRY - PODSTAWOWE -------------------------------

    //$("div:first").css("border", "2px solid red");  // dodanie bordera do pierwszego diva z użyciem filtra :first
    //$("div:last").css("border", "2px solid green");  // dodanie bordera do ostatniego diva z użyciem filtra :last


    //$("div:even").css("border", "2px solid blue");  // dodanie bordera do parzystych divów z użyciem filtra :even

    //$("div:odd").css("border", "2px solid yellow");  // dodanie bordera do nieparzystych divów z użyciem filtra :odd

    //$("div:eq(2)").css("border", "2px solid orange");  // dodanie bordera do diva o indeksie 2 z użyciem filtra :eq

    //$("div:gt(2)").css("border", "2px solid purple");  // dodanie bordera do divów o indeksie większym niż 2 z użyciem filtra :gt...greater than

    //$("div:lt(2)").css("border", "2px solid pink");  // dodanie bordera do divów o indeksie mniejszym niż 2 z użyciem filtra :lt...less than

    //$("div:not(:first)").css("border", "2px solid brown");  // dodanie bordera do wszystkich divów oprócz pierwszego z użyciem filtra :not
    
    //$("*:header").css("background-color", "yellow");  // dodanie tła do wszystkich nagłówków z użyciem filtra :header

    //:animated - tylko gdy jest akutalnie animowany 


    // ------ FILTRY - ZAWARTOŚĆ -------------------------------

    //$("div:contains('Interesting')").css("border", "2px solid red");  // dodanie bordera do divów zawierających tekst 'Interesting' z użyciem filtra :contains

    //$("div:empty").text("To jest pusty div");  // dodanie tekstu do pustych divów z użyciem filtra :empty
    //$("div:has(b)").text("to jest ten div z boldem").css("font-weight","bold"); // dodanie bordera do divów zawierających element b z użyciem filtra :has

    //------ FILTRY WIDOCZNOŚCI -------------------------------
    //$("div:visible").css("border", "2px solid green");  // dodanie bordera do widocznych divów z użyciem filtra :visible

   // $(":visible").css("border", "2px solid green");  // dodanie bordera do widocznych divów z użyciem filtra :visible

    // ------ FILTRY DZIECI -------------------------------

    $("div:first-child").css("border", "2px solid blue");  // dodanie bordera do pierwszego dziecka diva z użyciem filtra :first-child

    $("ol li:nth-child(1)").css("border", "2px solid red");  // dodanie bordera do drugiego dziecka listy z użyciem filtra :nth-child

    $("ol li:nth-child(even)").css("border", "2px solid green");  // dodanie bordera do parzystych dzieci listy z użyciem filtra :nth-child

});

