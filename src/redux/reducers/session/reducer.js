import { LOGIN, LOGOUT } from './actions'

const initialState = () => ({
  token: null
})

const keepDataState = currentState => ({})

export const resetState = state => ({
  ...initialState(),
  ...keepDataState(state)
})

export default function reducer(state = initialState(), action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload }

    default:
      return state
  }
}
