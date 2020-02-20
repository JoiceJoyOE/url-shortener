const path = require('path');

let SHORTURL = {
    name: 'URL Shortener',
    system: require('./core/system'),
    config: {}
}
global.SHORTURL = SHORTURL;
SHORTURL.system.start();
SHORTURL.system.startHttpServer();
