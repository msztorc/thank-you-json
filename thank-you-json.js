(function() {
    'use strict';

    var wXHR = window.XMLHttpRequest;
    var audio = new Audio('http://sztorc.com/thankyou-json.ogg');

    function handleXHR() {
        var oXHR = new wXHR();
        oXHR.addEventListener("readystatechange", function() {
            if(oXHR.status == 200 && oXHR.readyState == 4){
                console.log('thank you json');
                audio.play();
            }
        }, false);
        return oXHR;
    }
    window.XMLHttpRequest = handleXHR;
})();