import React from 'react'

export default class QuoteEditor extends React.Component {

  onChangeSpeaker(e) {
    this.props.onChange({
      speaker: e.target.value,
      text: this.props.text
    })
  }

  onChangeText(e) {
    this.props.onChange({
      speaker: this.props.speaker,
      text: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit()
  }

  render() {
    const valid = this.props.speaker.length > 0 && this.props.text.length > 0

    return <form method="post" action="#" onSubmit={this.onSubmit.bind(this)}>
      <div className="left">
        <div className="card">
          <textarea value={this.props.text} placeholder="What was said?" onChange={this.onChangeText.bind(this)} />
          <div className="dash" />
          <input type="text" value={this.props.speaker} placeholder="Who said it?" onChange={this.onChangeSpeaker.bind(this)} />
        </div>
      </div>

      <div className="right">
        <button type="submit" disabled={!valid}>Submit Quote</button>
      </div>
    </form>
  }

}
