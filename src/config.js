var config = function Config() {
    "use strict";

    var expressSettings = {
        PORT: process.env.PORT,
        IP: process.env.IP
    };

    if (process.env.NODE_ENV === 'travis') {
        expressSettings = {
            PORT: 3000,
            IP: "127.0.0.1"
        }
    }

    return {
        ServerAdres: expressSettings.IP + ':' + expressSettings.PORT,
        IP: expressSettings.IP,
        PORT: expressSettings.PORT
    };

};

module.exports = config;