import DraftActions from '../actions/DraftActions'
import QuotesActions from '../actions/QuotesActions'
import alt from '../isomorph/alt'
import uuid from 'node-uuid'

export default alt.createStore(class QuotesStore {

  constructor() {
    this.bindActions(DraftActions)
    this.bindActions(QuotesActions)
    this.quotes = []
  }

  onSubmit(draft) {
    this.quotes.unshift({
      id: uuid.v1(),
      speaker: draft.speaker,
      text: draft.text,
      count: 0,
      vote: 0
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

  static getQuotes() {
    // TODO: Sort quotes by latest/popular
    return this.getState().quotes
  }

}, 'QuotesStore')
