import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Cell from './Cell';

const BOARD_SIZE = 9;
const CELL_SIZE = 24;
const BOARD_WIDTH = CELL_SIZE * BOARD_SIZE;

const Board = (props) => {
  const { goEngine } = props;
  const [boardState, setBoardState] = useState(goEngine.serializeBoardState());

  const placeStone = useCallback(
    (x, y) => {
      setBoardState(goEngine.placeStoneAndReturnBoardState(x, y));
    },
    [goEngine]
  );

  const renderBoard = useCallback(() => {
    return Array.apply(null, Array(BOARD_SIZE)).map((el, rowIdx) => {
      let cellList = Array.apply(null, Array(BOARD_SIZE)).map(
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
            width: BOARD_WIDTH,
            height: CELL_SIZE,
            flexDirection: 'row'
          }}>
          {cellList}
        </View>
      );
    });
  }, [boardState, placeStone]);

  return (
    <View
      style={{
        width: BOARD_WIDTH,
        height: BOARD_WIDTH,
        backgroundColor: '#888888',
        flexDirection: 'column'
      }}>
      {renderBoard()}
    </View>
  );
};

export default Board;
