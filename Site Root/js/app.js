
$(document).ready(function() {


    $("#myForm").submit(function(e){
        var searchValue = $("input[name='searchValue']").val();

        if(searchValue){
            window.location.href = "https://www.google.pl/search?q=" + searchValue;
        }
        else{
            alert("Please enter a search value");
        }
        e.preventDefault();
    })

    $("#rangeTest").change(function(){
        $("#rangeValue").attr("value", $(this).val());
    })

  
});

