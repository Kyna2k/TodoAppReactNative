import React from 'react';
import {StatusBar, View} from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import NavigationContainer from './src/navigation/NavigationContainer';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <NavigationContainer />
      </View>
    </Provider>
  );
};

export default App;
