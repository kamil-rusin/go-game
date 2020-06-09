import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from '../../_constants/constants';

const Cell = (props) => {
  const color = () => {
    if (props.value === 'x') {
      return '#000';
    } else if (props.value === 'o') {
      return '#FFF';
    } else return 'transparent';
  };

  return (
    <ImageBackground
      source={Constants.FULL_SQUARE_PATH}
      style={[styles.cell, { width: props.cellSize, height: props.cellSize }]}>
      <TouchableOpacity
        onPress={() => props.onPress(props.x, props.y)}
        style={[styles.mainView, { backgroundColor: color() }]}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cell: {
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  mainView: {
    height: '80%',
    width: '80%',
    borderRadius: 15,
    alignSelf: 'center'
  }
});

export default Cell;
