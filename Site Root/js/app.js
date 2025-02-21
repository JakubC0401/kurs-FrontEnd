$(document).ready(function() {
    swapImage();
});

function swapImage() {
    var firstImage = $(".images_swapper:first-child");
    firstImage.addClass("current_image").css("opacity", 1);

    swap();
}

function swap() {
    var current = $(".current_image");
    var next = current.next(".images_swapper");

    if (next.length === 0) {
        next = $(".images_swapper:first-child");
    }

    next.addClass("next_image").css("opacity", 0);

    current.animate({"opacity": 0}, 2000, function() {
        $(this).removeClass("current_image");
        next.removeClass("next_image").addClass("current_image");
    });

    next.animate({"opacity": 1}, 2000, swap);
}
