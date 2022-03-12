import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword';

const NotLoggedStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Signup'
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ForgotPassword'
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NotLoggedStack;
