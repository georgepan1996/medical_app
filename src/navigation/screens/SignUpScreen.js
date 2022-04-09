import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SVGComponent from '../../../assets/svgs/loginScreen/TopSvgBlueSignUp.js';
import styles from '../../styles/StylesLogInScreen';
import { handleSignUp } from '../../../firebase';

export default function ScreenOne() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container} keyboardShouldPersistTaps={'always'}>
      <View style={styles.topHeaderSignUp} />
      <SVGComponent style={styles.svgg} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Medical app</Text>
      </View>
      <View style={styles.loginSection}>
        <View style={styles.userConnectionInputs}>
          <TextInput
            placeholder='Full Name'
            style={styles.userInfoInput}
            value={userName}
            onChangeText={(text) => setUserName(text)}
          ></TextInput>
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
          <TextInput
            placeholder='Doctor ID (optional)'
            style={styles.userInfoInput}
            value={doctorId}
            onChangeText={(text) => setDoctorId(text)}
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
                handleSignUp(userName, email, password, doctorId);
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
