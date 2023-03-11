/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.text}>Here are Some Boxes of Different Colors</Text>
        <View style={[styles.box, styles.cyanBox]}>
          <Text style={styles.boxText}>CYAN BOX:#242141</Text>
        </View>
        <View style={[styles.box, styles.blueBox]}>
          <Text style={styles.boxText}>BLUE BOX:#242141</Text>
        </View>
      </View>
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyanBox: {
    backgroundColor: '#2aa198',
  },
  blueBox: {
    backgroundColor: 'blue',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  }

});

export default App;
