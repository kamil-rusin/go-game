import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const Game = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text>Board</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Game;
