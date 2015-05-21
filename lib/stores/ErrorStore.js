import alt from '../isomorph/alt'

export default alt.createStore(class ErrorStore {

  constructor() {
    this.status = 404
    this.message = 'Not Found'
    this.stack = null
  }

}, 'ErrorStore')
