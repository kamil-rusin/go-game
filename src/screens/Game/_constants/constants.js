import { Dimensions } from 'react-native';

const boardSize = (Dimensions.get('window').width * 0.9).toFixed(0);

export default {
  BOARD_SIZE: boardSize,
  KOMI: 2.5,
  CORNER_SQUARE_PATH: require('../../../../assets/board/square_corner.png'),
  FULL_SQUARE_PATH: require('../../../../assets/board/square_full.png'),
  SIDE_SQUARE_PATH: require('../../../../assets/board/square_side.png')
};
