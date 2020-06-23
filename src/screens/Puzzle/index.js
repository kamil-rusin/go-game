import React, { useCallback, useEffect, useState } from 'react';
import Snackbar from 'react-native-snackbar';
import RNFS from 'react-native-fs';
import * as sgf from 'smartgame';
import _get from 'lodash/get';
import Puzzle from './Puzzle';
import GoEngine from '../_components/GoEngine';

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

const convertCharToNumber = character =>
  character.toLowerCase().charCodeAt(0) - 97;

const convertDimensionStringToNumber = size => {
  switch (size) {
    case 'XL':
      return 19;
    case 'L':
      return 13;
    case 'M':
    default:
      return 9;
  }
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
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [sequences, setSequences] = useState([]);

  useEffect(() => {
    RNFS.readFileAssets('xl02.sgf').then(res => {
      let collection = sgf.parse(res);
      setPuzzle(collection);
      console.log(JSON.stringify(collection, getCircularReplacer(), 1));
      let dimension = convertDimensionStringToNumber(
        _get(collection, 'gameTrees[0].nodes[0].GN', 'M')
      );
      let blackStones = _get(collection, 'gameTrees[0].nodes[0].AB', []);
      let whiteStones = _get(collection, 'gameTrees[0].nodes[0].AW', []);
      let engine = new GoEngine(dimension);

      if (blackStones.length === whiteStones.length) {
        for (let i = 0; i < blackStones.length; i++) {
          engine.placeStone(
            convertCharToNumber(blackStones[i].charAt(1)),
            convertCharToNumber(blackStones[i].charAt(0))
          );
          engine.placeStone(
            convertCharToNumber(whiteStones[i].charAt(1)),
            convertCharToNumber(whiteStones[i].charAt(0))
          );
        }
      }

      let tempSequences = _get(collection, 'gameTrees[0].sequences', []);
      let tempPossibleMoves = [];
      tempSequences.forEach(seq => {
        let move = _get(seq, 'nodes[0]', null);
        move && tempPossibleMoves.push(move);
      });

      setSequences(tempSequences);
      setPossibleMoves(tempPossibleMoves);
      setGoEngine(engine);
      setBoardDimension(dimension);
      setBoardState(engine.serializeBoardState());
      setIsLoading(false);
    });
  }, []);

  const isPossibleMove = useCallback(
    (x, y) => {
      let turn = currentPlayer === 'black' ? 'B' : 'W';
      let possible = false;
      possibleMoves.forEach(move => {
        if (
          convertCharToNumber(move[turn].charAt(1)) === x &&
          convertCharToNumber(move[turn].charAt(0)) === y
        )
          possible = true;
      });
      return possible;
    },
    [currentPlayer, possibleMoves]
  );

  const placeStone = useCallback(
    (x, y) => {
      try {
        if (isPossibleMove(x, y)) {
          setBoardState(goEngine.placeStoneAndReturnBoardState(x, y));
          setCurrentPlayer(goEngine.getCurrentPlayer());
        } else {
          Snackbar.show({
            text: 'Wrong. Try again!',
            duration: Snackbar.LENGTH_SHORT
          });
        }
      } catch (error) {
        Snackbar.show({
          text: error.message,
          duration: Snackbar.LENGTH_SHORT
        });
      }
    },
    [goEngine, isPossibleMove]
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
