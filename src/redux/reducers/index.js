import { combineReducers } from 'redux'
import session, { resetState as resetStateSession } from './session/reducer'
import { RESET_REDUCER } from './session/actions'

const reducers = combineReducers({
  session
})

const rootReducer = (state, action) => {
  if (action.type === RESET_REDUCER) {
    state = {
      session: {
        ...resetStateSession(state.session)
      }
    }
  }

  return reducers(state, action)
}

export default rootReducer
