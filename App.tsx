/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import ColorBox from './components/ColorBox';

const App = () => {

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.text}>Here are Some Boxes of Different Colors</Text>
        <ColorBox colorName="Component Box C" colorHex="#2aa198" />
        <ColorBox colorName="Component Box B" colorHex="#268bd2" />
        <ColorBox colorName="Component Box M" colorHex="#d33682" />
        <ColorBox colorName="Component Box O" colorHex="#cb4b16" />

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

});

export default App;
