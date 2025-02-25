
var XHR = null;

function ajaxInit(){
    



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