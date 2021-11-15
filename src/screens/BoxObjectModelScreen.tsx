import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 25,
    backgroundColor: 'red',
    color: 'white',
    borderWidth: 5,
    paddingHorizontal: 50,
    paddingVertical: 70,
    marginHorizontal: 10,
    marginVertical: 30,
  },
});
