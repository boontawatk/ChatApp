import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputBar: React.FC = () => {
  return (
    <View style={styles.inputView}>
      <TextInput style={styles.inputText} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    // position: 'absolute',
    // bottom:0
  },
  inputText: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 15,
    height: 30,
    paddingHorizontal: 10,
  },
});

export default InputBar;
