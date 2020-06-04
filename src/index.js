import React from 'react'
import 'react-native-gesture-handler'
import AppNavigator from './screens'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/createStore'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  )
}

export default App
