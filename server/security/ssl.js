const router = express.Router();
const _ = require('lodash');
const queryString = require('queryString');

router.all('/*', (req, res, next) => {
    let query = (!_.isEmpty(req.query)) ? `?${queryString.stringify(req.query)}` : ``;
    return res.redirect(`https://${req.hostname}${req.originalUrl}${query}`);
})

module.exports = router;
