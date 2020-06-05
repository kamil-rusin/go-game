import React, { useCallback } from 'react';
import { View } from 'react-native';
import Cell from './Cell';

const BOARD_SIZE = 9;
const CELL_SIZE = 24;
const BOARD_WIDTH = CELL_SIZE * BOARD_SIZE;

const serializeBoardState = (gameState) => {
  const size = gameState.get('board').get('size');
  const boardArray = Array.apply(null, Array(size)).map(() =>
    Array(size).fill('.')
  );
  const boardState = gameState.get('board').get('stones');
  boardState.forEach((stoneColor, position) => {
    const character = stoneColor === 'black' ? 'x' : 'o';
    boardArray[position.get('i')][position.get('j')] = character;
  });
  return boardArray;
};

const Board = () => {
  const Weiqi = require('weiqi').default;
  let game = Weiqi.createGame(BOARD_SIZE);
  game = Weiqi.play(game, 'black', [2, 2]);
  game = Weiqi.play(game, 'white', [4, 2]);
  game = Weiqi.play(game, 'black', [5, 2]);
  game = Weiqi.play(game, 'white', [6, 2]);
  game = Weiqi.play(game, 'black', [1, 2]);
  game = Weiqi.play(game, 'white', [5, 1]);
  game = Weiqi.play(game, 'black', [1, 5]);
  game = Weiqi.play(game, 'white', [5, 3]);

  const renderBoard = useCallback(() => {
    return Array.apply(null, Array(BOARD_SIZE)).map((el, rowIdx) => {
      let boardState = serializeBoardState(game);
      console.log(boardState);
      let cellList = Array.apply(null, Array(BOARD_SIZE)).map(
        (element, colIdx) => {
          return (
            <Cell
              key={colIdx}
              x={colIdx}
              y={rowIdx}
              value={boardState[rowIdx][colIdx]}
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
  }, [game]);

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
