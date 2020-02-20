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
const ip = require('ip');

module.exports = {
    async init() {
        const SYSTEM = {
            config: {}
        };
        SYSTEM.config.cors = {
            credentials: false,
            maxAge: 600,
            methods: 'GET,POST',
            origin: true
        }
        const app = express();
        SYSTEM.app = app;
        app.use(compression);
        const securityHeaders = require('../security/security');
        // app.use(securityHeaders);
        // app.use(cors(SYSTEM.config.cors));
        // app.options('*', cors(SYSTEM.config.cors));

        // const ssl = require('../security/ssl');
        // app.use('/', ssl);
        // app.use(cookieParser);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.get('/hello', (req, res) => {
            res.status(200).send({
                message: 'Hello World!'
            })
        })
        
        app.listen(8080, ip.address(), () => {
            console.log('server running on port: ' + 8080);
        });
        return SYSTEM;
    }
}
