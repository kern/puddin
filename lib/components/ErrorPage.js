import ErrorStore from '../stores/ErrorStore'
import React from 'react'

function getState() {
  return ErrorStore.getState()
}

export default class ErrorPage extends React.Component {

  constructor() {
    this.state = getState()
    this._onChange = () => this.setState(getState())
  }

  componentDidMount() {
    ErrorStore.listen(this._onChange)
  }

  componentDidUnmount() {
    ErrorStore.unlisten(this._onChange)
  }

  render() {
    return <div>

      <h1>pudd.in</h1>
      <p>
        <strong>{this.state.status}:</strong> {this.state.message}
      </p>

      {this.state.stack
        ? <pre>{this.state.stack}</pre>
        : null}

    </div>
  }

}
