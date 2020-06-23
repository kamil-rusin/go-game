import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Board from '../_components/Board/Board';

const Puzzle = props => {
  return (
    <SafeAreaView style={styles.container}>
      {props.isLoading ? (
        <View style={styles.mainView}>
          <ActivityIndicator size="large" color="#2196F3" />
        </View>
      ) : (
        <View style={styles.mainView}>
          <Text style={styles.text}>Current turn: {props.currentPlayer}</Text>
          <Board
            boardDimension={props.boardDimension}
            placeStone={props.placeStone}
            boardState={props.boardState}
          />
        </View>
      )}
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
  },
  text: {
    fontSize: 17,
    margin: 10
  }
});

export default Puzzle;
