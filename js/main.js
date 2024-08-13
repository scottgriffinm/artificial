(()=>{
    'use strict';
    visibility( e => { if (visibility()) location.reload() } );
})();

(()=>{
    'use strict';
    const output   = document.querySelector('subtitle');
    const subtitle = window.subtitle = (text) => {
        if (!speechSynthesis.speaking) output.innerHTML = text;
    };
})();

(()=>{
    'use strict';

    voice.onInterim = (transcript) => {
        console.log( 'Interim:', transcript );
        subtitle(transcript);
    };

    voice.onFinal = (transcript) => {
        console.log( 'Final:', transcript );
        subtitle(transcript);
        let message = story(transcript);
    };

    voice.noMatch = () => {
        console.log('No match.');
        subtitle('...');
        setTimeout( voice.listen, 100 );
    };

    voice.onStart = () => {
        console.log('Started listening.');
    };
    voice.onEnd = () => {
        console.log('End listening.');
        if (!voice.finalResult) setTimeout( voice.listen, 300 );
    };
    voice.onError = () => { 
        console.log('Error listening.');
    };
       
    setTimeout( voice.listen, 1000 );


})();
