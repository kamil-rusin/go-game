import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import TestsScreen from './Tests';
import GameScreen from './Game';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Game" component={GameScreen} />
      <RootStack.Screen name="Tests" component={TestsScreen} />
    </RootStack.Navigator>
  );
};

export default App;
