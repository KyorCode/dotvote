var expect = require('chai').expect;
var request = require('superagent');
var server = require('../../../src/server');
var config = require('../../../src/config');

var instance;
var host = config().ServerAdres;

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
    describe("the server", function() {
        it("should be available", function(done) {
            request.get(host).end(function(res) {
                expect(res).to.exist;
                done();
            });
        });
    });
});