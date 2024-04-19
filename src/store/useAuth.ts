import { computed, reactive } from 'vue'

const state = reactive({
  token: <Token | null>null
})

export function useAuth() {
  const token = computed((): Token | null => {
    return state.token
  })

  function setToken(token: Token) {
    localStorage.setItem('token', token)
    state.token = token
  }

  function removeToken() {
    localStorage.removeItem('token')
    state.token = null
  }

  function getTokenInStorage() {
    return localStorage.getItem('token')
  }

  return {
    token,
    setToken,
    removeToken,
    getTokenInStorage
  }
}