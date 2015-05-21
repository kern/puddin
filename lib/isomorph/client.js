var React = require('react')
var ReactRouter = require('react-router')
var alt = require('./alt')

module.exports = function (routes) {
  return function (data) {

    alt.bootstrap(data)

    ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Handler) {
      var element = React.createElement(Handler, { data: data })
      React.render(element, document)
    })

  }
}
