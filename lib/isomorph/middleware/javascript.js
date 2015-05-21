var browserify = require('browserify-middleware')

module.exports = function (client) {
  return browserify(client, {
    transform: 'babelify'
  })
}
