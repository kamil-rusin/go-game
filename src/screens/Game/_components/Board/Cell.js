import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
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
    <TouchableOpacity
      onPress={() => props.onPress(props.x, props.y)}
      style={[styles.mainView, { backgroundColor: color() }]}
    />
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: Constants.CELL_SIZE,
    height: Constants.CELL_SIZE,
    borderRadius: 15
  }
});

export default Cell;
