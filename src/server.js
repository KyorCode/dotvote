var express = require('express');
var config = require('./config')();

var server = function Server() {
    "use strict";

    var boot = function() {
        var app = express();

        var server = app.listen(config.PORT, config.IP, function(error) {

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