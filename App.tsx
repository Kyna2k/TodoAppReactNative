

import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import NavigationContainer from './src/navigation/NavigationContainer'
const App: React.FC = () => {
  return (
    <View style={{ flex:1 }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <NavigationContainer/>

    </View>
  );
};

export default App;
