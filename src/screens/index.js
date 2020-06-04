import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Home'
import TestsScreen from './Tests'

const RootStack = createStackNavigator()

const App = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Tests" component={TestsScreen} />
    </RootStack.Navigator>
  )
}

export default App
