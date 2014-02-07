var expect = require('chai').expect;
var config = require('../../../src/config');

describe("Config suite:", function() {

    describe("running in normal environment", function() {

        before(function() {
            process.env.NODE_ENV = '';
        });

        after(function() {
            process.env.NODE_ENV = 'travis';
        });

        it("should return the right portnumber", function() {
            expect(config().PORT).to.equal(process.env.PORT);
        });

        it("should return the right ip", function() {
            expect(config().IP).to.equal(process.env.IP);
        });

        it("should return the right serveradres", function() {
            expect(config().ServerAdres).to.equal(process.env.IP + ':' + process.env.PORT);
        });
    });

    describe("running in travis environment", function() {

        before(function() {
            process.env.NODE_ENV = 'travis';
        });

        after(function() {
            process.env.NODE_ENV = '';
        });

        it("should return the right portnumber", function() {
            expect(config().PORT).to.equal(3000);
        });

        it("should return the right ip", function() {
            expect(config().IP).to.equal('127.0.0.1');
        });

        it("should return the right serveradres", function() {
            expect(config().ServerAdres).to.equal('127.0.0.1:3000');
        });
    });

});