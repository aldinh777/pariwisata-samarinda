export function login ({ commit }, { token, csrf }) {
  commit('login', { token, csrf })
}

export function logout ({ commit }) {
  commit('logout')
}
