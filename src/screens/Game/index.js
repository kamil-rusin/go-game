import React, { useCallback, useState } from 'react';
import Game from './Game';
import GoEngine from './_components/GoEngine';
import Constants from './_constants/constants';

const GameScreen = () => {
  const goEngine = new GoEngine();
  goEngine.createGame(9);
  goEngine.placeStone(2, 2);
  goEngine.placeStone(4, 2);

  const [boardState, setBoardState] = useState(goEngine.serializeBoardState());
  const [currentPlayer, setCurrentPlayer] = useState(
    goEngine.getCurrentPlayer()
  );

  const placeStone = useCallback((x, y) => {
    setBoardState(goEngine.placeStoneAndReturnBoardState(x, y));
    setCurrentPlayer(goEngine.getCurrentPlayer());
  }, []);

  const passTurn = useCallback(() => {
    goEngine.passTurn();
    setCurrentPlayer(goEngine.getCurrentPlayer());
  }, []);

  const onFinish = useCallback(() => {
    console.log(goEngine.computeScore(Constants.KOMI));
  }, []);

  return (
    <Game
      goEngine={goEngine}
      currentPlayer={currentPlayer}
      onFinish={onFinish}
      placeStone={placeStone}
      passTurn={passTurn}
      boardState={boardState}
    />
  );
};

export default GameScreen;
