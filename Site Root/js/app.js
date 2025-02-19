$(document).ready(function() {

    $(".header span").each(function(i) {
        $(this).addClass("gh" + i);
        $(this).data("index", i); // Przechowujemy indeks w atrybucie data
    });

    $(".hidden_text").each(function(i) {
        $(this).addClass("gh" + i);
    });

    $(".header span").on("click", function() {
        let index = $(this).data("index"); // Pobieramy indeks klikniętego span
        $(".gh" + index + ".hidden_text").slideToggle(300); // Tylko odpowiedni element się rozwija
        
        if ($(this).text() === "więcej info") {
            $(this).text("schowaj");
        } else {
            $(this).text("więcej info");
        }
    });

});
