import React from 'react';
import {Text, View} from 'react-native';

export const HolaScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
          textAlign: 'center',
        }}>
        Hola desde React Native
      </Text>
    </View>
  );
};
