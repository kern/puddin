import React from 'react'
import { Route, DefaultRoute, NotFoundRoute } from 'react-router'

import App from './components/App'
import IndexPage from './components/IndexPage'
import ErrorPage from './components/ErrorPage'

export default (
  <Route handler={App}>
    <DefaultRoute handler={IndexPage} />
    <Route name="error" path="error" handler={ErrorPage} />
    <NotFoundRoute handler={ErrorPage} />
  </Route>
)
