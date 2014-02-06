var expect = require('chai').expect;
var request = require('superagent');
var server = require('../../../src/server');

var instance;
var host = process.env.IP + ':' + process.env.PORT;

before(function(done) {
    instance = server.boot();
    instance.on("listening", function() {
        done();
    });
});

after(function(done) {
    instance.close();
    done();
});

describe("Server suite:", function() {
    it("should be available", function(done) {
        request.get(host).end(function(res) {
            expect(res).to.exist;
            done();
        });
    });
});