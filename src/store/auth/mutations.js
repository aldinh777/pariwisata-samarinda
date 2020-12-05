export function login (state, { token, csrf }) {
  state.loggedIn = true
  state.token = token
  state.csrf = csrf
}

export function logout (state) {
  state.loggedIn = false
  state.token = ''
  state.csrf = ''
}
