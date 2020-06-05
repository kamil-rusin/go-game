import React from 'react';
import Game from './Game';

const GameScreen = () => {
  const Weiqi = require('weiqi').default;
  var game = Weiqi.createGame(9);
  console.log(game);
  game = Weiqi.play(game, 'black', [2, 2]);
  console.log(game);

  return <Game />;
};

export default GameScreen;
