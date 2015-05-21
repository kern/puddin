import DraftActions from '../actions/DraftActions'
import QuotesStore from './QuotesStore'
import alt from '../isomorph/alt'

export default alt.createStore(class DraftStore {

  constructor() {
    this.bindActions(DraftActions)
    this.resetDraft()
  }

  resetDraft() {
    this.draft = {
      speaker: '',
      text: ''
    }
  }

  onChange(newDraft) {
    this.draft = newDraft
  }

  onSubmit() {
    this.waitFor(QuotesStore.dispatchToken)
    this.resetDraft()
  }

  static getDraft() {
    return this.getState().draft
  }

}, 'DraftStore')
