import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SVGComponent from '../../../assets/svgs/loginScreen/TopSvgBlueSignUp';
import styles from '../../styles/StylesLogInScreen';
import { handleForgotPassword } from '../../../firebase';
import ConfirmModal from '../../components/ConfirmModal';

export default function ScreenOne() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState();
  const [emailToSendIsOk, setEmailToSendIsOk] = useState(false);

  const modalTextSetter = (email) => {
    if (email.length <= 5) {
      setModalText('Please enter a valid email');
    } else if (email.length > 5) {
      setModalText(
        'An email has been sent to reset your password. Please check your inbox.'
      );
      setEmailToSendIsOk(true);
    }
  };
  function closeModal() {
    setModalVisible(!modalVisible);
  }

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
              value={email}
              autoCapitalize='none'
              keyboardType='email-address'
              autoCorrect={false}
              onPress={() => {
                modalTextSetter(email), setModalVisible(!modalVisible);
              }}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ConfirmModal
        children
        visible={modalVisible}
        email={email}
        emailToSendIsOk={emailToSendIsOk}
        closeModal={closeModal}
      >
        {modalText}
      </ConfirmModal>
    </View>
  );
}
