var express = require('express')
var morgan = require('morgan')

var javascriptMiddleware = require('./middleware/javascript')
var cssMiddleware = require('./middleware/css')
var reactMiddleware = require('./middleware/react')

module.exports = function (options) {

  var app = express()

  app.use(morgan('dev'))
  app.get('/js', require('./middleware/javascript')(options.client))
  app.get('/css', require('./middleware/css')(options.css))
  app.use(express.static(options.static))
  app.use(reactMiddleware(options.routes, options.bootstrap))

  return app

}
