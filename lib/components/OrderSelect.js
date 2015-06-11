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
      return <div className="order-select">
        <div className="latest selected">Latest</div>
        <div className="popular" onClick={this.onPopular.bind(this)}>Popular</div>
      </div>
    } else {
      return <div className="order-select">
        <div className="latest" onClick={this.onLatest.bind(this)}>Latest</div>
        <div className="popular selected">Popular</div>
      </div>
    }
  }

}
