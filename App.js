import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from './firebase';
import { AdminProvider } from './src/contexts/AdminContext';
import NotLoggedStack from './src/navigation/stackScreens/NotLoggedStack';
import LoggedStack from './src/navigation/stackScreens/LoggedStack';

export default App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  auth.onAuthStateChanged((user) => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  return (
    <AdminProvider>
      <NavigationContainer>
        {isLoggedIn === false ? <NotLoggedStack /> : <LoggedStack />}
      </NavigationContainer>
    </AdminProvider>
  );
};
