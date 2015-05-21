import Bootstrap from './Bootstrap'
import FrozenHead from 'react-frozenhead'
import React from 'react'
import { RouteHandler } from 'react-router'

export default class App extends React.Component {

  render() {
    return <html lang="en">
      <FrozenHead>

        <meta charSet="utf-8" />
        <title>pudd.in</title>

        <link rel="stylesheet" href="/css" />
        <script src="/js" />

      </FrozenHead>

      <body>
        <RouteHandler />
        <Bootstrap data={this.props.data} />
      </body>
    </html>
  }

}
