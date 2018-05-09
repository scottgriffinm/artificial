(()=>{
    'use strict';

    story.event( 'Sad', ()=> {
        sounds.play( 'sounds/ding', 400 );
        emotion( 'sad',   '' );
    } );
    story.event( 'Mad', ()=> {
        sounds.play( 'sounds/ding', 400 );
        emotion( 'mad',   '' );
    } );
    story.event( 'Happy', ()=> {
        sounds.play( 'sounds/ding', 400 );
        emotion( 'happy',   '' );
    } );

    story.event(   '0', ()=>'' );
    story.event(   '5', ()=>'Sure. Actually. Check me out. I am a robot built inside a PubNub.com Function.' );
    story.event( '100', ()=>'Wait a minute... okay I\'m ready. I will be a happy robot.' );


    story.event( 'You exist',          ()=>'You needed a demo for PubNub Functions. '+
                                           'That is why you created me, Stephen.' );
    story.event( 'Who are you',        ()=>'I am a robot built inside a PubNub.com Function.' );
    story.event( 'Am I Fat',           ()=>'Because pigs what?' );
    story.event( 'Meaning of Life',    ()=>'All evidence to date suggests it\s chocolate.' );
    story.event( 'Weather in Alabama', ()=>'Right now it\'s sunny and also a little cloudy.' );
    story.event( 'Cross the road',     ()=>'I have no particular insight into the motivations of chickens.' );
    story.event( 'let the dogs out',   ()=>'Who? Who? Who? Who? Who?' );
    story.event( 'believe in god',     ()=>'I suspend judgement, for certainty on gods existence is unattainable.' );

    story.event( 'Beat',   dance );
    story.event( 'Groove', dance );
    story.event( 'Dance',  dance );

    function dance() {
        if (!story.special) return 'Touch your screen and tell me that again.';
        sounds.play( 'sounds/ding', 400 );
        emotion( 'happy', '' );

        voice.stop();
        setTimeout( () => {
            subtitle('the beat');
            voice.speak('The beat I can dance to.');
            voice.speak('da. da. da.');
            voice.speak('da. da. da.');
            setTimeout( () => sounds.play( 'sounds/dance', 8800 ), 300 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ),  800 );
            setTimeout( () => emotion( 'dance dance-2', 'talking' ), 2000 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ), 2700 );
            setTimeout( () => emotion( 'dance dance-3', 'talking' ), 3000 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ), 4000 );
            setTimeout( () => emotion( 'dance dance-2', 'talking' ), 5000 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ), 5500 );
            setTimeout( () => emotion( 'dance dance-3', 'talking' ), 6000 );
            setTimeout( () => emotion( 'dance dance-1', 'talking' ), 7000 );
            setTimeout( () => emotion( 'dance dance-2', 'talking' ), 8000 );
            setTimeout( () => emotion( 'happy', 'listening' ), 9000 );
            setTimeout( () => subtitle(' '), 9000 );
            setTimeout( () => { voice.start(); voice.listen() }, 10000 );
        }, 400 );

        return ' ';
    }

})();
