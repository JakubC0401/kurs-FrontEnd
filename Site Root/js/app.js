
$(document).ready(function() 
{

    var worker = new Worker("js/task.js")//stworzenie 2-go wątku

    //worker.postMessage("test"); //wysłanie wiadomości test do drugiego wątku

    worker.onmessage = function(event){

        if(event.data=="end"){
            $("#start_counting").removeAttr("disabled");
        }
        else{
            $("#counter").html(event.data);
        }
       
        //alert(event.data); //odebranie wiadomości z drugiego wątku w pierwszem i jej wyświetlenie z pomoca alert
        worker.onerror = function(event){
            alert(event.message +"linia"+event.lineno +" "+event.filename)
        }
    }
    $("#start_counting").click(function(){

        $(this).attr("disabled","disabled");
        var countValue = $("#count_from").val();

        //JSON = KEY - VALUE
        worker.postMessage({
            "cmd": "start",
            "count_from": countValue
        });
    })
});

