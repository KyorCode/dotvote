require.config({
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        chai: './lib/chai/chai',
        sinon: './lib/sinon/lib/sinon'
    }
});

require([
    'chai',
    'sinon'
], function (chai) {
    "use strict";
    window.expect = chai.expect;
    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    }
    else {
        mocha.run();
    }
});
