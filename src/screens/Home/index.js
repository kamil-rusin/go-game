import React, { useCallback } from 'react';
import Home from './Home';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const onPlay = useCallback(() => {
    navigate('Game');
  }, [navigate]);

  const props = {
    onPlay
  };
  return <Home {...props} />;
};

export default HomeScreen;
