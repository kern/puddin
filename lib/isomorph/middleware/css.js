var express = require('express')
var nib = require('nib')
var path = require('path')
var stylus = require('stylus')

module.exports = function (src) {

  var dir = path.dirname(src)
  var destBasename = path.basename(src, 'styl') + 'css'
  var dest = path.resolve(dir, destBasename)

  var routes = new express.Router()

  routes.use(function (req, res, next) {
    req.url = '/' + destBasename
    next()
  }, stylus.middleware({
    src: dir,
    dest: dir,
    compile: function (str, path) {
      return stylus(str)
      .set('filename', path)
      .set('compress', true)
      .use(nib())
      .import('nib')
    }
  }), function (req, res) {
    res.sendFile(dest)
  })

  return routes

}
