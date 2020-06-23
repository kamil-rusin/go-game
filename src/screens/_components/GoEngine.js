const Weiqi = require('weiqi').default;

export default class GoEngine {
  constructor(dimension) {
    this.game = null;
    this.createGame(dimension);
  }

  getGame() {
    return this.game;
  }

  createGame(boardSize) {
    this.game = Weiqi.createGame(boardSize);
  }

  placeStone(x, y) {
    this.game = Weiqi.play(this.game, this.getCurrentPlayer(), [x, y]);
  }

  getCurrentPlayer() {
    return this.game.get('currentPlayer');
  }

  placeStoneAndReturnBoardState(x, y) {
    this.placeStone(x, y);
    return this.serializeBoardState();
  }

  passTurn() {
    this.game = Weiqi.pass(this.game, this.getCurrentPlayer());
  }

  isOver() {
    return Weiqi.isOver(this.game);
  }

  computeScore(komi) {
    return Weiqi.areaScore(this.game, komi);
  }

  serializeBoardState = () => {
    const size = this.getBoardSize();
    const boardArray = Array.apply(null, Array(size)).map(() =>
      Array(size).fill('.')
    );
    const boardState = this.getBoardState();
    boardState.forEach((stoneColor, position) => {
      const character = stoneColor === 'black' ? 'x' : 'o';
      boardArray[position.get('i')][position.get('j')] = character;
    });
    return boardArray;
  };

  getBoardState = () => {
    return this.game.get('board').get('stones');
  };

  getBoardSize() {
    return this.game.get('board').get('size');
  }
}