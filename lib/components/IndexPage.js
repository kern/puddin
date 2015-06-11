import DraftActions from '../actions/DraftActions'
import DraftStore from '../stores/DraftStore'
import OrderSelect from './OrderSelect'
import Quote from './Quote'
import QuoteEditor from './QuoteEditor'
import QuotesActions from '../actions/QuotesActions'
import QuotesStore from '../stores/QuotesStore'
import React from 'react'

function getState() {
  return {
    ordering: QuotesStore.getOrdering(),
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

  onReorder(ordering) {
    QuotesActions.reorder({ ordering: ordering })
  }

  render() {
    return <div className="page">
      <h1>pudd.in</h1>
      <QuoteEditor {...this.state.draft} onChange={this.onChangeDraft.bind(this)} onSubmit={this.onSubmit} />
      <OrderSelect value={this.state.ordering} onChange={this.onReorder.bind(this)} />
      {this.state.quotes.map((q) => <Quote key={q.id} {...q} />)}
    </div>
  }

}
