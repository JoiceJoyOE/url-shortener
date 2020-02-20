const ip = require('ip');

module.exports = {
    async initialize() {
        SHORTURL.config.cors = {
            credentials: false,
            maxAge: 600,
            methods: 'GET,POST',
            origin: true
        };
        SHORTURL.config.serverPort = 8081;
        SHORTURL.config.serverIP = ip.address();
    }
}