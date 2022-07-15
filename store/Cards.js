export const state = () => ({
  shiftCards: [],
  currentShiftCard: ''
})

export const getters = {
  //
}

export const mutations = {
  ADD_SHIFT_CARD(state, payload) {
    const isCurrent = payload.id === state.currentShiftCard
    if (isCurrent) Object.assign(state.shiftCards.find(el => el.id === payload.id), payload)
    else state.shiftCards.push(payload)
  },
  UPDATE_SHIFT_CARD(state, payload) {
    const index = state.shiftCards.findIndex(el => el.id === payload.id)
    state.shiftCards.splice(index, 1, payload)
  },
  DELETE_SHIFT_CARD(state, payload) {
    state.shiftCards = state.shiftCards.filter(el => el.id !== payload.id)
  },
  SET_CURRENT_SHIFT_CARD(state, payload) {
    state.currentShiftCard = payload
  },
}

export const actions = {
  addShiftCard({ commit, dispatch }, payload) {
    commit('ADD_SHIFT_CARD', payload)
    dispatch('Ui/toggleSidebar', false, { root: true })
  },
  updateShiftCard({ commit }, payload) {
    commit('UPDATE_SHIFT_CARD', payload)
  },
  deleteShiftCard({ commit, dispatch }, payload) {
    commit('DELETE_SHIFT_CARD', payload)
    dispatch('Ui/toggleSidebar', false, { root: true })
  },
  editShiftCard({ commit, dispatch }, payload) {
    commit('SET_CURRENT_SHIFT_CARD', payload)
    dispatch('Ui/toggleSidebar', true, { root: true })
  }
}
