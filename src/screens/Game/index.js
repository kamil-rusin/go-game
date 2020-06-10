import React, { useCallback, useState } from 'react';
import Snackbar from 'react-native-snackbar';
import Game from './Game';
import GoEngine from './_components/GoEngine';
import Constants from './_constants/constants';

const GameScreen = () => {
  const boardDimension = 13;
  const [goEngine, setGoEngine] = useState(new GoEngine(boardDimension));
  const [boardState, setBoardState] = useState(goEngine.serializeBoardState());
  const [currentPlayer, setCurrentPlayer] = useState(
    goEngine.getCurrentPlayer()
  );
  const [isOver, setIsOver] = useState(false);
  const [result, setResult] = useState(null);

  const placeStone = useCallback(
    (x, y) => {
      try {
        setBoardState(goEngine.placeStoneAndReturnBoardState(x, y));
        setCurrentPlayer(goEngine.getCurrentPlayer());
      } catch (error) {
        Snackbar.show({
          text: error.message,
          duration: Snackbar.LENGTH_SHORT
        });
      }
    },
    [goEngine]
  );

  const onFinish = useCallback(() => {
    setIsOver(true);
    let score = goEngine.computeScore(Constants.KOMI);
    score < 0
      ? setResult('white - ' + Math.abs(score))
      : setResult('black - ' + score);
  }, [goEngine]);

  const passTurn = useCallback(() => {
    goEngine.passTurn();
    setCurrentPlayer(goEngine.getCurrentPlayer());
    goEngine.isOver() && onFinish();
  }, [goEngine, onFinish]);

  return (
    <Game
      boardDimension={boardDimension}
      boardState={boardState}
      currentPlayer={currentPlayer}
      goEngine={goEngine}
      isOver={isOver}
      onFinish={onFinish}
      placeStone={placeStone}
      passTurn={passTurn}
      result={result}
    />
  );
};

export default GameScreen;
