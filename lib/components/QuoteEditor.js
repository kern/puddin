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
      <textarea value={this.props.text} onChange={this.onChangeText.bind(this)} />
      <input type="text" value={this.props.speaker} onChange={this.onChangeSpeaker.bind(this)} />
      <button type="submit" disabled={!valid}>Submit Quote</button>
    </form>
  }

}
