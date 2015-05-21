import DraftActions from '../actions/DraftActions'
import DraftStore from '../stores/DraftStore'
import Quote from './Quote'
import QuoteEditor from './QuoteEditor'
import QuotesStore from '../stores/QuotesStore'
import React from 'react'

function getState() {
  return {
    quotes: QuotesStore.getQuotes(),
    draft: DraftStore.getDraft()
  }
}

export default class IndexPage extends React.Component {

  constructor() {
    this.state = getState()
    this._onChange = () => this.setState(getState())
  }

  componentDidMount() {
    DraftStore.listen(this._onChange)
    QuotesStore.listen(this._onChange)
  }

  componentDidUnmount() {
    DraftStore.unlisten(this._onChange)
    QuotesStore.unlisten(this._onChange)
  }

  onChangeDraft(newDraft) {
    DraftActions.change(newDraft)
  }

  onSubmit() {
    DraftActions.submit(DraftStore.getDraft())
  }

  render() {
    return <div>
      <h1>pudd.in</h1>
      <QuoteEditor {...this.state.draft} onChange={this.onChangeDraft.bind(this)} onSubmit={this.onSubmit} />
      {this.state.quotes.map((q) => <Quote key={q.id} {...q} />)}
    </div>
  }

}
