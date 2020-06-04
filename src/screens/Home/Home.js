import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

import i18next from '../../translation'

import api from '../../network/api'

const propTypes = {}

const Home = (props) => {
  return (
    <View style={styles.container}>
      <DefaultView goToScene={() => props.navigate('Tests')} />
    </View>
  )
}

const DefaultView = ({ store, goToScene }) => (
  <Fragment>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        accessible
        accessibilityLabel={'scrollView'}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        <View style={styles.engine}>
          {global.HermesInternal == null ? null : (
            <Text style={styles.footer}>Engine: Hermes</Text>
          )}
          <Text style={styles.footer}>
            Translation test: {i18next.t('key')}
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step One</Text>
            <Text style={styles.sectionDescription}>
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>See Your Changes</Text>
            <Text style={styles.sectionDescription}>
              <ReloadInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Debug</Text>
            <Text style={styles.sectionDescription}>
              <DebugInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Learn More</Text>
            <Text style={styles.sectionDescription}>
              Read the docs to discover what to do next:
            </Text>
          </View>
          <LearnMoreLinks />
          <Fragment>
            <View style={styles.separator} />
            <TouchableOpacity
              accessibilityRole={'button'}
              onPress={() => goToScene()}
              style={styles.linkContainer}>
              <Text
                accessible
                accessibilityLabel={'Welcome'}
                style={styles.link}>
                {`End-to-End \nTests`}
              </Text>
              <Text style={styles.description}>
                End-to-end tests exercise your entire application the way a user
                would, simulating taps and checking for components on the
                screen.
              </Text>
            </TouchableOpacity>
          </Fragment>
        </View>
      </ScrollView>
    </SafeAreaView>
  </Fragment>
)

Home.navigationOptions = {
  title: ' '
}

Home.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark
  },
  separator: {
    marginHorizontal: 24,
    backgroundColor: Colors.light,
    height: 1
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

export default Home
