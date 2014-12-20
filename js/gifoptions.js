/*
 * Provides all the needed data for the gifspot lib
 */
gify.factory('gifoptions',function(){
	gifoptionsObj = {};

	gifoptionsObj.data = {
        'gifWidth': 200,
        'gifHeight': 200,
        // 'images': ['http://i.telegraph.co.uk/multimedia/archive/02296/animal4c_2296997i.jpg'],
        'images': [],
        'interval': 0.1,
        'numFrames': 10,
        'text': '',
        'fontWeight': 'normal',
        'fontSize': '48px',
        'fontFamily': 'sans-serif',
        'fontColor': '#FFFFFF',
        'textAlign': 'center',
        'textBaseline': 'bottom',
        'sampleInterval': 10,
        'numWorkers': 2
	};

    return gifoptionsObj;
})