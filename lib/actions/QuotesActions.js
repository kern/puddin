import alt from '../isomorph/alt'

export default alt.createActions(class QuotesActions {
  constructor() {
    this.generateActions(
      'submit',
      'vote',
      'reorder'
    )
  }
})
