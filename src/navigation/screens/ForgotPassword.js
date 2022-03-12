import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SVGComponent from '../../../assets/svgs/loginScreen/TopSvgBlueSignUp';
import styles from '../../styles/StylesLogInScreen';
import { handleForgotPassword } from '../../../firebase';

export default function ScreenOne() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topHeaderSignUp} />
      <SVGComponent style={styles.svgg} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Medical app logo</Text>
      </View>
      <View style={styles.loginSection}>
        <View style={styles.userConnectionInputs}>
          <TextInput
            placeholder='Email to reset password'
            style={styles.userInfoInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.userSubmitButtonSignUp}>
            <Text
              style={styles.userSubmitButtonTextSignUp}
              onPress={() => {
                navigation.navigate('Login');
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userSubmitButtonLogIn}>
            <Text
              style={styles.userSubmitButtonTextLogIn}
              onPress={() => {
                handleForgotPassword(email), navigation.navigate('Login');
              }}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
