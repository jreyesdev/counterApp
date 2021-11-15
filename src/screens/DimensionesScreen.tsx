import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

// const {height, width} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.morada, width: width * 0.6}} />
        <View style={styles.naranja} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    backgroundColor: 'red',
  },
  morada: {
    backgroundColor: '#5856D6',
  },
  naranja: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
