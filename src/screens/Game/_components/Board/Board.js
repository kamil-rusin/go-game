import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Cell from './Cell';
import Constants from '../../_constants/constants';

const Board = (props) => {
  const { goEngine } = props;
  const [boardState, setBoardState] = useState(goEngine.serializeBoardState());
  const boardSize = goEngine.getBoardSize();

  const placeStone = useCallback(
    (x, y) => {
      setBoardState(goEngine.placeStoneAndReturnBoardState(x, y));
    },
    [goEngine]
  );

  const renderBoard = useCallback(() => {
    return Array.apply(null, Array(boardSize)).map((el, rowIdx) => {
      let cellList = Array.apply(null, Array(boardSize)).map(
        (element, colIdx) => {
          return (
            <Cell
              key={colIdx}
              x={rowIdx}
              y={colIdx}
              value={boardState[rowIdx][colIdx]}
              onPress={placeStone}
            />
          );
        }
      );

      return (
        <View
          key={rowIdx}
          style={{
            width: Constants.CELL_SIZE * boardSize,
            height: Constants.CELL_SIZE,
            flexDirection: 'row'
          }}>
          {cellList}
        </View>
      );
    });
  }, [boardSize, boardState, placeStone]);

  return (
    <View
      style={{
        width: Constants.CELL_SIZE * boardSize,
        height: Constants.CELL_SIZE * boardSize,
        backgroundColor: '#888888',
        flexDirection: 'column'
      }}>
      {renderBoard()}
    </View>
  );
};

export default Board;
