import React, {useState} from 'react';
import {Text, View} from 'react-native';

export const ContadorScreen = () => {
  const [cont, setCont] = useState(10);
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
          top: -15,
        }}>
        Contador: {cont}
      </Text>
    </View>
  );
};
