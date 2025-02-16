
$(document).ready(function() {

    $('.item').hover(function () {
            // over

            $(".description",this).fadeIn();
            
        }, function () {
            // out
            $(".description",this).fadeOut();
        }
    ).dragstart(function(event) {
        var a = event.dataTransfer.setData('text', $(this).attr('id'));
        
        $('#info_drag').fadeIn();
    }).dragend(function() {
        $('#info_drag').fadeOut();
    });

    var defaultColor = $("#basket_container").css("background-color");

    $("#basket_container").dragover(function(event) {
        event.preventDefault();
        $(this).css("background-color", "teal");
    }).dragleave(function() {
    
        $(this).css("background-color", defaultColor);
    }).drop(function(event) {
        event.preventDefault();
        $(this).css("background-color", defaultColor);
        var clothes_id = event.dataTransfer.getData('text');

        var name = $("#"+ clothes_id).find(".name").text();
        var price = $("#"+ clothes_id).find(".price").text();

        alert("You have added " + name + " to the basket. It costs " + price + " PLN.");
   
    
        var listItem = `<li class='product_in_basket'> <b>${name}</b> <span class='price_in_basket'>${price}PLN</span> </li>`;
        $("#basketList").append(listItem);


        var summaryPrice = 0;

        $('#basketList .price_in_basket').each(function()
        {
            summaryPrice += parseFloat($(this).text());
        });

        $('#price span').text(summaryPrice.toFixed(2));
    });


});

