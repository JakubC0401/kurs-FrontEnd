
$(document).ready(function() {

    var value = $('#AG input[data-type="name"]').attr('data-type');
    //or
    var value2 = $('#AG input[data-type="email"]').data('required');
    //or
    var value3 = $('#BC input[data-type="phone"]').attr('type');

    alert(value);
    alert(value2);
    alert(value3);


    //bez jQuery

    var value4 = document.getElementById('AG').getElementsByTagName('input')[0].getAttribute('data-type');
    alert(value4);
});

