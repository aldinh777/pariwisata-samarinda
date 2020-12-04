export function login ({ commit }, token) {
  commit('login', token)
}

export function logout ({ commit }) {
  commit('logout')
}
