var expect = require('chai').expect;
var request = require('superagent');

describe("Server suite:", function() {
    it("should be available",function(done){
       request.get(process.env.IP + ':' + process.env.PORT).end(function(res){
          expect(res).to.exist;
          done();
       });
    });
});