var React = require('react')
var ReactRouter = require('react-router')
var alt = require('../alt')

function isNotFound(state) {
  for (var r of state.routes) {
    if (r.isNotFound) return true
  }

  return false
}

module.exports = function (routes, bootstrap) {
  return [

    // Bootstrap
    bootstrap || function (req, res, next) { next() },

    // Error-handling
    function (err, req, res, next) {

      var status = err.status || 500
      var message = err.message || ''
      var stack = process.env.NODE_ENV === 'production' ? null : err.stack || null

      req.url = '/error'
      res.status(status)
      res.locals.data = {
        ErrorStore: {
          status: status,
          message: message,
          stack: stack
        }
      }

      next()

    },

    // Rendering
    function (req, res) {
      alt.bootstrap(JSON.stringify(res.locals.data || {}))

      ReactRouter.run(routes, req.url, function (Handler, state) {

        var element = React.createElement(Handler, { data: alt.takeSnapshot() })
        var html = React.renderToString(element)
        alt.flush()

        if (isNotFound(state)) res.status(404)
        res.write('<!DOCTYPE html>\n')
        res.end(html)

      })
    }

  ]
}
