(function($) {
  $.fn.truncate = function() {
    alert("aaa");
  };
})(jQuery); // Użyj bezpośrednio jQuery

$(document).ready(function() {
  $(".news").truncate(); // Teraz powinno działać poprawnie
});
