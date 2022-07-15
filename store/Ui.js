export const state = () => ({
  isSidebarOpen: false,
})

export const getters = {
  isSidebarOpen(state) {
    return state.isSidebarOpen
  }
}

export const mutations = {
  TOGGLE_SIDEBAR(state, payload) {
    state.isSidebarOpen = payload
  },
}

export const actions = {
  toggleSidebar({ commit }, payload) {
    commit('TOGGLE_SIDEBAR', payload)
    !payload && commit('Cards/SET_CURRENT_SHIFT_CARD', false, { root: true })
  },
}
