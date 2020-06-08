import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Board from './_components/Board/Board';

const Game = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Board goEngine={props.goEngine} />
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
