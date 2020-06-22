import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';

const Home = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Button onPress={props.onPlay} title={'Player vs Player'} />
        <Button onPress={props.testPuzzle} title={'Puzzles'} />
        <Text style={styles.text}>Choose board dimension:</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => {
              props.setDimension(9);
            }}
            style={[
              styles.button,
              { backgroundColor: props.dimension === 9 ? '#2196F3' : '#FFF' }
            ]}>
            <Text>9x9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.setDimension(13);
            }}
            style={[
              styles.button,
              { backgroundColor: props.dimension === 13 ? '#2196F3' : '#FFF' }
            ]}>
            <Text>13x13</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.setDimension(19);
            }}
            style={[
              styles.button,
              { backgroundColor: props.dimension === 19 ? '#2196F3' : '#FFF' }
            ]}>
            <Text>19x19</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    margin: 10
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 3
  }
});

export default Home;
