/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import InputBar from './components/ChatPage/InputBar';
import {Dimensions} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={{...styles.pageContainer}}>
      <ScrollView style={{backgroundColor:'green'}}>
        <Text>fsad</Text>
        <Text>fsad</Text>
      </ScrollView>
      <InputBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default App;
