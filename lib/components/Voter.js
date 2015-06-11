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
      {this.props.vote > 0 ? <div className="up-vote" /> : null}
      {this.props.vote === 0 ? <div className="up-vote clickable" onClick={this.onUpvote.bind(this)} /> : null}
      <div className="count">{this.props.count}</div>
      {this.props.vote === 0 ? <div className="down-vote clickable" onClick={this.onDownvote.bind(this)} /> : null}
      {this.props.vote < 0 ? <div className="down-vote" /> : null}
    </div>
  }

}
