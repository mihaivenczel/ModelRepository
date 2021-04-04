import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {MainStackNavigator} from './src/navigation';
import {store, persistor} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <MainStackNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
