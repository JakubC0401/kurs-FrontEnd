
// function dragStart(event) {


//     event.dataTransfer.setData('id', event.target.id);

// }
// function dragOver(event) {
    
//     event.preventDefault();
    
// }
// function drop(event) {
        
//     event.preventDefault();
//     var id = event.dataTransfer.getData('id');
//     var element = document.getElementById(id);
//     event.target.appendChild(element);
        
// }
$(document).ready(function() {


    $('#wykrzyknik').dragstart(function(event) {
        var a = event.dataTransfer.setData('id', $(this).attr('id'));


    });

    $('#dropZone').dragover(function(event) {
        event.preventDefault();
    }).drop(function(event) {
        event.preventDefault();
        var id = event.dataTransfer.getData('id');
        var element = document.getElementById(id);
        event.target.appendChild(element);
    });

});

