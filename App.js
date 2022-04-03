import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from './firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendsReducer from './redux/reducers/ModalStateReducer';
import NotLoggedStack from './src/navigation/stackScreens/NotLoggedStack';
import LoggedStack from './src/navigation/stackScreens/LoggedStack';

const store = createStore(friendsReducer);

export default App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  auth.onAuthStateChanged((user) => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn === false ? <NotLoggedStack /> : <LoggedStack />}
      </NavigationContainer>
    </Provider>
  );
};
