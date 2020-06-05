import React from 'react';
import { StyleSheet, View } from 'react-native';

const Cell = (props) => {
  const color = () => {
    if (props.value === 'x') {
      return '#000';
    } else if (props.value === 'o') {
      return '#FFF';
    } else return 'transparent';
  };

  return <View style={[styles.mainView, { backgroundColor: color() }]} />;
};

const styles = StyleSheet.create({
  mainView: {
    width: 24,
    height: 24,
    borderRadius: 15
  }
});

export default Cell;
