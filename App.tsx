import React from 'react';
import {SafeAreaView} from 'react-native';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {HolaScreen} from './src/screens/HolaScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DimensionesScreen />
    </SafeAreaView>
  );
};

export default App;
