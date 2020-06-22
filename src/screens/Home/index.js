import React, { useCallback, useState } from 'react';
import Home from './Home';
import { useNavigation } from '@react-navigation/native';
import * as sgf from 'smartgame';
import RNFS from 'react-native-fs';

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

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [dimension, setDimension] = useState(9);

  const testPuzzle = useCallback(() => {
    RNFS.readFileAssets('xl02.sgf').then(res => {
      const collection = sgf.parse(res);
      console.log(JSON.stringify(collection, getCircularReplacer(), 1));
    });
  }, []);

  const onPlay = useCallback(() => {
    navigate('Game', { boardDimension: dimension });
  }, [dimension, navigate]);

  const props = {
    dimension,
    setDimension,
    onPlay,
    testPuzzle
  };
  return <Home {...props} />;
};

export default HomeScreen;
