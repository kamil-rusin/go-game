import React from 'react';
import Game from './Game';
import GoEngine from './_components/GoEngine';

const GameScreen = () => {
  const goEngine = new GoEngine();
  goEngine.createGame(9);
  goEngine.placeStone(2, 2);
  goEngine.placeStone(4, 2);

  return <Game goEngine={goEngine} />;
};

export default GameScreen;
