import React, { useCallback, useEffect, useState } from 'react';
import Snackbar from 'react-native-snackbar';
import Puzzle from './Puzzle';
import GoEngine from '../_components/GoEngine';
import RNFS from 'react-native-fs';
import * as sgf from 'smartgame';

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

const PuzzleScreen = props => {
  const [boardDimension, setBoardDimension] = useState(9);
  const [goEngine, setGoEngine] = useState(new GoEngine(boardDimension));
  const [boardState, setBoardState] = useState(goEngine.serializeBoardState());
  const [currentPlayer, setCurrentPlayer] = useState(
    goEngine.getCurrentPlayer()
  );
  const [isLoading, setIsLoading] = useState(true);
  const [puzzle, setPuzzle] = useState(null);

  useEffect(() => {
    RNFS.readFileAssets('xl02.sgf').then(res => {
      let collection = sgf.parse(res);
      setPuzzle(collection);
      console.log(JSON.stringify(collection, getCircularReplacer(), 1));
      let dimension = collection.gameTrees[0].nodes[0].GN;
      console.log(dimension);
      let engine = new GoEngine(19);
      setGoEngine(engine);
      setBoardState(engine.serializeBoardState());
      dimension === 'XL' && setBoardDimension(19);
      setIsLoading(false);
    });
  }, []);

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

  return (
    <Puzzle
      isLoading={isLoading}
      boardDimension={boardDimension}
      boardState={boardState}
      currentPlayer={currentPlayer}
      goEngine={goEngine}
      placeStone={placeStone}
    />
  );
};

export default PuzzleScreen;
