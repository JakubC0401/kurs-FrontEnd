(function($) {
  $.fn.truncate = function() {
    return this.each(function() {
      var moreVariable = " MORE...";
      var lessVariable = " LESS...";

      var actualObject = $(this);
      var message = actualObject.html();
      var messageLength = message.length;

      if (messageLength > 400) {
        
        var splitLocation = message.indexOf(" ", 400);
        var visiblePart = message.substring(0, splitLocation);
        var hiddenPart = message.substring(splitLocation, message.length);

        actualObject.html(
          "<span class='visiblePart'>" + visiblePart + "</span>" +
          "<span class='moreText'>"+ moreVariable +"</span>" +
          "<span class='hiddenPart' style='display: none;'>" + hiddenPart + "</span>" + "<span class='lessText'>" +lessVariable+"</span>"
        );

        $(".lessText", actualObject).hide();

        $(".moreText", actualObject).click(function() {
          $(".hiddenPart", actualObject).toggle();
          $(".moreText", actualObject).hide();
          $(".lessText", actualObject).show();
        });

        $(".moreText", actualObject).hover(function() {
          $(this).css({
            "color": "green",
            "cursor": "pointer"
          });
        }, function() {
          $(this).css({
            "color": "black",
            "cursor": "pointer"
          });

        });
        $(".lessText", actualObject).click(function(){
          $(".hiddenPart", actualObject).hide();
          $(".moreText", actualObject).show();
          $(".lessText", actualObject).hide();
        })

        $(".lessText", actualObject).hover(function() {
          $(this).css({
            "color": "green",
            "cursor": "pointer"
          });
        }, function() {
          $(this).css({
            "color": "black",
            "cursor": "pointer"
          });

        });
        
      }
    });
  };
})(jQuery);

$(document).ready(function() {
  $(".news").truncate();
});
