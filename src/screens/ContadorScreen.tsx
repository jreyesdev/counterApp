import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [cont, setCont] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {cont}</Text>
      <Fab title="-1" position="bl" onPress={() => setCont(cont - 1)} />
      <Fab title="+1" onPress={() => setCont(cont + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    top: -15,
  },
});
