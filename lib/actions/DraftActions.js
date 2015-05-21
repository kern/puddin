import alt from '../isomorph/alt'

export default alt.createActions(class DraftActions {
  constructor() {
    this.generateActions(
      'change',
      'submit'
    )
  }
})
