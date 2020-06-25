import React, { useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Cell from './Cell';
import Constants from '../../_constants/constants';

const Board = props => {
  const { boardDimension, boardState, placeStone } = props;

  const cellSize = useMemo(() => {
    return Constants.BOARD_SIZE / boardDimension;
  }, [boardDimension]);

  const board = useMemo(() => {
    return Array.apply(null, Array(boardDimension)).map((el, rowIdx) => {
      let cellList = Array.apply(null, Array(boardDimension)).map(
        (element, colIdx) => {
          return (
            <TouchableOpacity
              key={`T' + ${rowIdx}${colIdx}`}
              onPress={() => placeStone(rowIdx, colIdx)}>
              <Cell
                boardDimension={boardDimension}
                key={`${rowIdx}${colIdx}`}
                x={rowIdx}
                y={colIdx}
                value={boardState[rowIdx][colIdx]}
                cellSize={cellSize}
              />
            </TouchableOpacity>
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
      {board}
    </View>
  );
};

export default Board;
