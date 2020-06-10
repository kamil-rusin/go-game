import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import Cell from './Cell';
import Constants from '../../_constants/constants';

const Board = (props) => {
  const { boardDimension, boardState, placeStone } = props;

  const cellSize = useMemo(() => {
    return Constants.BOARD_SIZE / boardDimension;
  }, [boardDimension]);

  const renderBoard = useCallback(() => {
    return Array.apply(null, Array(boardDimension)).map((el, rowIdx) => {
      let cellList = Array.apply(null, Array(boardDimension)).map(
        (element, colIdx) => {
          return (
            <Cell
              boardDimension={boardDimension}
              key={colIdx}
              x={rowIdx}
              y={colIdx}
              value={boardState[rowIdx][colIdx]}
              onPress={placeStone}
              cellSize={cellSize}
            />
          );
        }
      );

      return (
        <View
          key={rowIdx}
          style={{
            width: cellSize * boardDimension,
            height: cellSize,
            flexDirection: 'row'
          }}>
          {cellList}
        </View>
      );
    });
  }, [boardDimension, boardState, cellSize, placeStone]);

  return (
    <View
      style={{
        width: cellSize * boardDimension,
        height: cellSize * boardDimension,
        backgroundColor: '#dcb35c',
        flexDirection: 'column'
      }}>
      {renderBoard()}
    </View>
  );
};

export default Board;
