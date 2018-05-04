(()=>{
    'use strict';
    const orbiter = document.getElementById('artificial');
    let   mood    = orbiter.className;
    let   ting    = ['', 'listening', 'talking'];
    let   pose    = 0;
    //setInterval( ()=> orbiter.className = mood + ' '+ ting[pose++%3], 2000 );
    const emotion = window.emotion = ( mood='mood-happy', mode='' ) => {
        orbiter.className = 'mood-' + mood + ' '+ mode;
    };
})();

(()=>{
    'use strict';
    const output   = document.querySelector('subtitle');
    const subtitle = window.subtitle = (text) => output.innerHTML = text;
})();

(()=>{
    'use strict';
    const subkey      = 'sub-c-af8fe1f6-4f09-11e8-9b53-6e008aa3b186';
    const chatbot_url = 'https://pubsub.pubnub.com/v1/blocks/sub-key/'
                        + subkey + '/chatbot?message=';

    const chatbot = requester({
        success : chatbot_reply
    ,   fail    : chatbot_error
    });

    function chatbot_reply(result) {
        console.log('Success', result);
        subtitle(result.response);
        voice.speak(result.response);
        emotion( 'happy', 'talking' );
        setTimeout( voice.listen, 300 );
    }

    function chatbot_error(error) {
        console.log( 'Error: ', error );
        voice.listen();
    }

    voice.onInterim = (transcript) => {
        console.log( 'Interim:', transcript );
        subtitle(transcript);
    };

    voice.onFinal = (transcript) => {
        console.log( 'Final:', transcript );
        subtitle(transcript);
        // TODO send to Functions for sentament
        // TODO get result from subscribes.....
        chatbot({ url : chatbot_url + transcript });
    };

    voice.noMatch = () => {
        console.log('No match.');
        subtitle('...');
        setTimeout( voice.listen, 100 );
    };

    voice.onStart = () => {
        console.log('Started listening.');
        emotion( 'happy', 'listening' );
    };
    voice.onEnd = () => {
        emotion( 'happy', '' );
        console.log('End listening.');
        if (!voice.finalResult)
            setTimeout( voice.listen, 300 );
    };
    voice.onError = () => { 
        console.log('Error listening.');
    };

    // Greating
    voice.speak('Hi.')
    subtitle('Hi.');
    emotion( 'happy', 'talking' );
    setTimeout( voice.listen, 1000 );

})();
