var express = require('express');

var server = function Server() {

    var boot = function() {
        var app = express();

        var server = app.listen(process.env.PORT, process.env.IP, function(error) {

        });
        
        var close = function(){
            server.close();
        };
        
        var on = function(eventName, callback){
          server.on(eventName,callback);
        };
        
        return {
            close: close,
            on : on
        }
    };
    
    return {
        boot : boot
    };
};

module.exports = server();