import DraftActions from '../actions/DraftActions'
import QuotesActions from '../actions/QuotesActions'
import _ from 'underscore'
import alt from '../isomorph/alt'
import uuid from 'node-uuid'

export default alt.createStore(class QuotesStore {

  constructor() {
    this.bindActions(DraftActions)
    this.bindActions(QuotesActions)
    this.quotes = []
    this.ordering = 'latest'
  }

  onSubmit(draft) {
    this.quotes.push({
      id: uuid.v1(),
      speaker: draft.speaker,
      text: draft.text,
      count: 0,
      vote: 0,
      posted_at: new Date().toISOString()
    })
  }

  onVote(o) {
    for (let q of this.quotes) {
      if (o.id === q.id && q.vote === 0) {
        q.count += o.vote
        q.vote = o.vote
      }
    }
  }

  onReorder(o) {
    this.ordering = o.ordering
  }

  static getOrdering() {
    return this.getState().ordering
  }

  static getQuotes() {
    const state = this.getState()
    return _.sortBy(state.quotes, (q) => {
      return state.ordering === 'latest' ? q.posted_at : q.count
    }).reverse()
  }

}, 'QuotesStore')
