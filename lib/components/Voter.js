import React from 'react'

export default class Voter extends React.Component {

  onUpvote(e) {
    this.props.onVote(1)
  }

  onDownvote(e) {
    this.props.onVote(-1)
  }

  render() {
    return <div className="voter">
      {this.props.vote > 0 ? '^' : null}
      {this.props.vote === 0 ? <span onClick={this.onUpvote.bind(this)}>^</span> : null}
      <strong>{this.props.count}</strong>
      {this.props.vote === 0 ? <span onClick={this.onDownvote.bind(this)}>v</span> : null}
      {this.props.vote < 0 ? 'v' : null}
    </div>
  }

}
