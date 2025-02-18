//drugi wątek
function count_down(count_from){
    postMessage(count_from--);

    if(count_from < 0){
        postMessage("end");
        return;
    }
    setTimeout("count_down(" + count_from +")", 1000)
}

self.onmessage = function(event){

    switch(event.data.cmd)
    {
        case "start":
            count_down(event.data.count_from)
            break;
        default:
            postMessage("nieznana komenda");
    }
    //var test = event.data +" to jest coś innego";

    //self.postMessage(test); //wysłanie wiadomości do innego wątku z drugiego wątku

}