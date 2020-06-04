export const RESET_REDUCER = 'RESET_REDUCER'
export const LOGIN = 'LOGIN'

export const login = payload => ({
  type: LOGIN,
  payload
})

export const resetReducer = () => ({
  type: RESET_REDUCER
})
