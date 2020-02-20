const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const _ = require('lodash');
const http = require('http');

module.exports = {
    SYSTEM: {
        config: {}
    },
    async start() {
        await this.initializeConfig();
        const app = express();
        SHORTURL.app = app;
        // app.use(compression);
        const securityHeaders = require('../security/security');
        app.use(securityHeaders);
        app.use(cors(this.SYSTEM.config.cors));
        app.options('*', cors(this.SYSTEM.config.cors));

        // const ssl = require('../security/ssl');
        // app.use('/', ssl);
        // app.use(cookieParser);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.get('/hello', (req, res) => {
            console.log('Hello');
            res.status(200).send({
                message: SHORTURL.name
            })
        })
        SHORTURL.system.startHttpServer();
    },
    async startHttpServer() {
        await SHORTURL.app.listen(SHORTURL.config.serverPort, SHORTURL.config.serverIP, () => {
            console.log('server running on port: ' + SHORTURL.config.serverPort);
        });
    },
    async initializeConfig() {
        require('./config').initialize();
    }
}
