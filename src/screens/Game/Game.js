import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Board from '../_components/Board/Board';

const Game = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        {props.isOver ? (
          <Text style={styles.text}>Winner is {props.result}</Text>
        ) : (
          <Text style={styles.text}>Current turn: {props.currentPlayer}</Text>
        )}
        <Board
          boardDimension={props.boardDimension}
          placeStone={props.placeStone}
          boardState={props.boardState}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            disabled={props.isOver}
            onPress={props.passTurn}
            style={styles.button}>
            <Text style={styles.buttonText}>Pass</Text>
          </TouchableOpacity>
        </View>
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
  },
  text: {
    fontSize: 17,
    margin: 10
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#2196F3',
    margin: 10,
    padding: 5
  },
  buttonText: {
    color: '#fff'
  }
});

export default Game;
