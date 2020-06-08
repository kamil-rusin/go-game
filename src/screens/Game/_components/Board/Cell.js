import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

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
    width: 24,
    height: 24,
    borderRadius: 15
  }
});

export default Cell;
