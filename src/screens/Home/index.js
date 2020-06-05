import React from 'react'
import Home from './Home'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'ramda'
import { login } from '../../redux/reducers/session/actions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const reduxState = useSelector((state) => state)
  const { navigate } = useNavigation()

  const Weiqi = require('weiqi').default;
  var game = Weiqi.createGame(9);
  console.log(game);
  game = Weiqi.play(game, 'black', [2,2]);
  console.log(game);

  const props = {
    login: compose(dispatch, login),
    navigate,
    reduxState
  }
  return <Home {...props} />
}

export default HomeScreen
