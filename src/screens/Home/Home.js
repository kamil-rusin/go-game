import React from 'react';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';

const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Button onPress={props.onPlay} title={'Play'} />
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
  }
});

export default Home;