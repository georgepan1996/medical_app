import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SVGComponent from '../../../assets/svgs/loginScreen/TopSvgBlue.js';
import styles from '../../styles/StylesLogInScreen';
import { handleLogin } from '../../../firebase';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container} keyboardShouldPersistTaps={'always'}>
      <View style={styles.topHeader} />
      <SVGComponent style={styles.svgg} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Medical app</Text>
      </View>
      <View style={styles.loginSection}>
        <View style={styles.userConnectionInputs}>
          <TextInput
            placeholder='Email'
            style={styles.userInfoInput}
            value={email}
            autoCapitalize='none'
            keyboardType='email-address'
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <TextInput
            placeholder='Password'
            style={styles.userInfoInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.userSubmitButtonSignUp}>
            <Text
              style={styles.userSubmitButtonTextSignUp}
              onPress={() => {
                navigation.navigate('Signup');
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userSubmitButtonLogIn}>
            <Text
              style={styles.userSubmitButtonTextLogIn}
              onPress={() => {
                handleLogin(email, password);
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginFooter}>
          <View style={styles.logInForgot}>
            <TouchableOpacity>
              <Text
                style={styles.forgotTextButtonText}
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}
              >
                I forgot my password
              </Text>
            </TouchableOpacity>
            <Text style={styles.orLoginTextButtonText}>or log in with </Text>
          </View>
          <View>
            <View style={styles.logInIcons}>
              <TouchableOpacity>
                <Icon style={styles.loginIcon} name='google' />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon style={styles.loginIcon} name='facebook-square' />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon style={styles.loginIcon} name='instagram' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
