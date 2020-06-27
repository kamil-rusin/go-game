import React, { useCallback, useState } from 'react';
import Home from './Home';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [dimension, setDimension] = useState(9);

  const onPuzzle = useCallback(() => {
    navigate('Puzzle');
  }, [navigate]);

  const onPlay = useCallback(() => {
    navigate('Game', { boardDimension: dimension });
  }, [dimension, navigate]);

  const props = {
    dimension,
    setDimension,
    onPlay,
    onPuzzle
  };
  return <Home {...props} />;
};

export default HomeScreen;
