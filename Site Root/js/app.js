
$(document).ready(function() {

    $('#play_pauseBTN').click(function() {

       var videoElement = $('#testVideo')[0];
        
        if(videoElement.paused) 
        {
           videoElement.play();
           $('#play_pauseBTN').html('Pause');
        } 
        else
        {
           videoElement.pause();
           $('#play_pauseBTN').html('Play');
        };

    });

    $('#mute_unmuteBTN').click(function() {

        var videoElement = $('#testVideo')[0];
         
         if(!videoElement.muted) 
         {
            videoElement.muted = true;
            $('#mute_unmuteBTN').html('Unmute');
         } 
         else
         {
            videoElement.muted = false;
            $('#mute_unmuteBTN').html('Mute');
         };
 
     });

     $('#resizePlus').click(function() {

        var videoElement = $('#testVideo')[0];
        videoElement.width += 3;
        videoElement.height += 3;

        
     });

     $('#resizeMinus').click(function() {

        var videoElement = $('#testVideo')[0];
        videoElement.width -= 3;
        videoElement.height -= 3;

        
     });

     $('#loopButton').click(function() {
            
            var videoElement = $('#testVideo')[0];
            videoElement.loop = !videoElement.loop;
            
            if(videoElement.loop)
            {
                $('#loopButton').html('Loop: On');
            }
            else
            {
                $('#loopButton').html('Loop: Off');
            }
            
    });


    $('#fullscreenBTN').click(function() {
            
            var videoElement = $('#testVideo')[0];
            videoElement.requestFullscreen();
            
    });
});

