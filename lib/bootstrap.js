var express = require('express')

var routes = module.exports = new express.Router()

routes.get('/', (req, res, next) => {

  res.locals.data = {
    QuotesStore: {
      quotes: [
        {
          id: 1,
          speaker: 'John Doe',
          text: 'Lorem ipsum dolor sit amet.',
          count: 5,
          vote: 1,
          posted_at: new Date('1994-01-13')
        },
        {
          id: 2,
          speaker: 'Abraham Lincoln',
          text: 'Four score and seven years ago...',
          count: -1,
          vote: -1,
          posted_at: new Date('1868-01-01')
        },
        {
          id: 3,
          speaker: 'Aviad Gamliel',
          text: 'I am founder and CEO of Achi Enterprises.',
          count: 2,
          vote: 0,
          posted_at: new Date('2015-04-01')
        }
      ]
    }
  }

  next()

})
