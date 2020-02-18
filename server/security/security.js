module.exports = function (req, res, next) {
    req.app.disable('x-powered-by')
    res.set('X-Content-Type-Options', 'nosniff')
    res.set('X-UA-Compatible', 'IE=edge')
    res.set('X-Frame-Options', 'deny')
    res.set('X-XSS-Protection', '1; mode=block')
    res.set('Referrer-Policy', 'same-origin')
    res.set('Strict-Transport-Security', `max-age=${WIKI.config.securityHSTSDuration}; includeSubDomains`)
  
    return next()
  }
  