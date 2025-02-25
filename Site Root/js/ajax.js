

window.onload = ajaxInit;

function ajaxInit(){
    
    document.getElementById('tekst').onmouseover = function(event){

       // event.target.style.cursor = "pointer";

        var obj = (event) ? event.target : window.event.srcElement;

        obj.style.cursor = "pointer";
    }

    var XHR = null;


    try{

        XHR = new XMLHttpRequest();
    }
    catch(exception){
        try{
            XHR = new ActiveXObject("Msxm12.XMLHTTP");
        }
        catch(exception2){
            try{
                XHR = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(exception3){
                alert("Ajax doesn't work correctly with your browser :(");
            }
        }
    }

    return XHR;

}
function fileToDiv(id, URL){

    XHR = ajaxInit();

    if(XHR != null){

        XHR.open("GET", URL, true);

        XHR.onreadystatechange = function(){

            if(XHR.readyState == 4){
                if(XHR.status == 200){

                    document.getElementById("tekst").innerHTML = XHR.responseText;
                
                }
                else{

                    alert("wystąpił błąd" + XHR.status);
                    
                }
            }


        };

        XHR.send(null);
    }

}