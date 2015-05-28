import React from 'react'

export default class OrderSelect extends React.Component {

  onLatest() {
    this.props.onChange('latest')
  }

  onPopular() {
    this.props.onChange('popular')
  }

  render() {
    if (this.props.value === 'latest') {
      return <div className="orderToggle">
        <strong>Latest</strong>
        <span onClick={this.onPopular.bind(this)}>Popular</span>
      </div>
    } else {
      return <div className="orderToggle">
        <span onClick={this.onLatest.bind(this)}>Latest</span>
        <strong>Popular</strong>
      </div>
    }
  }

}
