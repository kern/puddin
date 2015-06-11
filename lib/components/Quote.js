import QuotesActions from '../actions/QuotesActions'
import React from 'react'
import Voter from './Voter'

export default class Quote extends React.Component {

  onVote(vote) {
    QuotesActions.vote({ id: this.props.id, vote: vote })
  }

  render() {
    return <div className="quote card">
      <Voter count={this.props.count} vote={this.props.vote} onVote={this.onVote.bind(this)} />
      <div className="text">{this.props.text}</div>
      <div className="speaker">{this.props.speaker}</div>
    </div>
  }

}
