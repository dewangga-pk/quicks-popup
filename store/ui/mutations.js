export default {
  // TOGGLE_TODO (state, value) {
  //   state.isTodo = !state.isTodo
  //   state.isChat = false
  // },
  TOGGLE_TODO (state) {
    state.isTodo = !state.isTodo
    state.isChat = false
  },
  TOGGLE_CHAT (state) {
    state.isChat = !state.isChat
    state.isTodo = false
  }
}
