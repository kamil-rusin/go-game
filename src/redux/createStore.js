import { applyMiddleware, compose } from 'redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import AsyncStorage from '@react-native-community/async-storage'
import logger from 'redux-logger'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = (initialState = {}) => {
  const enhancer = compose(applyMiddleware(thunk, logger))
  return createStore(persistedReducer, initialState, enhancer)
}

export const store = configureStore()
export const persistor = persistStore(store)
