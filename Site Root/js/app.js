
$(document).ready(function() 
{

    function init(){

        $("form input.stored").each(function(){

            var form = $(this).parent();

            var formId = form.attr("id");
    
            var type = $(this).data("type");

            if(localStorage.getItem( "#"+formId + "input[data-type='" + type + "']", $(this).val()))
            {

                $(this).val(localStorage.getItem( "#"+formId + "input[data-type='" + type + "']", $(this).val()));
            }

        });

        $("form input[type='submit']").click(function(event){

            event.preventDefault();
            $("input.stored", event.target.parentNode).each(function(){

                
            var form = $(this).parent();

            var formId = form.attr("id");
    
            var type = $(this).data("type");
            
            localStorage.removeItem( "#"+formId + "input[data-type='" + type + "']");

            $("#"+formId + "input[data-type='" + type + "']").val("");
            });
            
        });

    };
    
    init();
    $("input.stored").keyup(function(){
       
        var form = $(this).parent();

        var formId = form.attr("id");

        var type = $(this).data("type");
        
        localStorage.setItem( "#"+formId + "input[data-type='" + type + "']", $(this).val())
    });

});

