export function login (state, token) {
  state.loggedIn = true
  state.token = token
}

export function logout (state) {
  state.loggedIn = false
  state.token = ''
}
