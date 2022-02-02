import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { handleLogin } from '../../../firebase';
// import { AdminContext } from '../../contexts/AdminContext';

import styles from '../../styles/Styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  // const userData = useContext(AdminContext);

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleLogin(email, password)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.replace('Signup')}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Create an account</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <View style={styles.iconsContainer}>
            <Icon name='google' color='black' />
            <Icon
              name='facebook-square'
              color='black'
              onPress={() => console.log('pressed')}
            />
            <Icon
              name='instagram'
              color='black'
              onPress={() => {
                () => console.log('pressed');
              }}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
