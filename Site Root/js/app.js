
$(document).ready(function() {


    $("#dropFileBox").dragover(function(event){
        event.preventDefault();
    }).drop(function(event){
        event.preventDefault();

        var files = event.dataTransfer.files;

        if(files.length){
            var file = files[0];
        
            var reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onloadend =  function(event){
                onLoadReaderHandlingFunction(event,file);
            }

            formData = new FormData();

            formData.append('file', file);

            var xhr = new XMLHttpRequest();

            xhr.open('POST','upload_file.php', true);

            xhr.onload = function(){
                if(xhr.status =200){
                    alert(xhr.responseText)
                }
                else{
                    alert("something went wrong")
                }
            }

            xhr.send(formData);
        }
    });

    function onLoadReaderHandlingFunction(event){
        $("#previewImage").attr("src", event.target.result);
        $("#previewImage").attr("width", '200');
        $("#previewImage").attr("height", '200');


        $("#fileName").text("name: "+file.name);
        $("#fileSize").text("size: "+file.size);
        $("#fileType").text("type: "+file.type);

        var fileSize 
    }

});

