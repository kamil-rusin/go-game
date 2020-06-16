import React, { useMemo } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from '../../_constants/constants';

const areEqual = (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
};

const Cell = (props) => {
  const stoneColor = useMemo(() => {
    if (props.value === 'x') {
      return '#000';
    } else if (props.value === 'o') {
      return '#FFF';
    } else return 'transparent';
  }, [props.value]);

  const imageDetails = useMemo(() => {
    if (props.x === 0 && props.y === 0)
      return { path: Constants.CORNER_SQUARE_PATH, rotation: '0deg' };
    if (props.x === props.boardDimension - 1 && props.y === 0)
      return { path: Constants.CORNER_SQUARE_PATH, rotation: '-90deg' };
    if (
      props.x === props.boardDimension - 1 &&
      props.y === props.boardDimension - 1
    )
      return { path: Constants.CORNER_SQUARE_PATH, rotation: '180deg' };
    if (props.x === 0 && props.y === props.boardDimension - 1)
      return { path: Constants.CORNER_SQUARE_PATH, rotation: '90deg' };

    if (props.x === 0)
      return { path: Constants.SIDE_SQUARE_PATH, rotation: '90deg' };
    if (props.y === 0)
      return { path: Constants.SIDE_SQUARE_PATH, rotation: '0deg' };
    if (props.x === props.boardDimension - 1)
      return { path: Constants.SIDE_SQUARE_PATH, rotation: '-90deg' };
    if (props.y === props.boardDimension - 1)
      return { path: Constants.SIDE_SQUARE_PATH, rotation: '180deg' };

    return { path: Constants.FULL_SQUARE_PATH, rotation: '0deg' };
  }, [props.boardDimension, props.x, props.y]);

  return (
    <ImageBackground
      source={imageDetails.path}
      style={[
        styles.cell,
        {
          width: props.cellSize,
          height: props.cellSize,
          transform: [{ rotate: imageDetails.rotation }]
        }
      ]}>
      <TouchableOpacity
        onPress={() => props.onPress(props.x, props.y)}
        style={[styles.mainView, { backgroundColor: stoneColor }]}
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

export default React.memo(Cell, areEqual);
