import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { handleLogin } from '../../../firebase';
// import { AdminContext } from '../../contexts/AdminContext';

import SVGComponent from './ela';

import testSvg from '../../../assets/svgs/group.svg';
import Svg, { Path } from 'react-native-svg';

import styles from '../../styles/Styles';

const WIDTH = Dimensions.get('screen').width;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.loginContainer}>
      <View style={{ backgroundColor: '#5000ca', height: 20 }}>
        <Svg
          height='90%'
          width='100%'
          viewBox='0 0 1440 320'
          style={{ position: 'absolute', top: 3 }}
        >
          <Path
            fill='#5000ca'
            d='M0,96L48,112C96,128,192,160,288,186.7C384
            ,213,480,235,576,213.3C672,192,768,128,864,
            128C960,128,1056,192,1152,208C1248,224,1344,192,
            1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
            1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
            384,0,288,0C192,0,96,0,48,0L0,0Z'
          />
        </Svg>
      </View>
      <View style={styles.loginHeader}>
        <Image
          style={styles.loginLogo}
          source={require('../../../assets/skincare-logo-face-drop.jpg')}
        ></Image>

        <Text style={styles.loginHeaderText}>
          Stay informed about your skin's protection any time!
        </Text>
      </View>
      <View style={styles.loginSection}>
        <View style={styles.userConnectionInputs}>
          <TextInput
            placeholder='Email'
            style={styles.userInfoInput}
          ></TextInput>
          <TextInput
            placeholder='Password'
            style={styles.userInfoInput}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.userSubmitButton}>
          <Text style={styles.userSubmitButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.onlyTextButton}>
          <Text style={[styles.onlyTextButtonText, styles.shadowText]}>
            forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.beforeFooterTextContainer}>
          <Text style={[styles.beforeFooterText, styles.shadowText]}>
            Or sign up with
          </Text>
        </View>
      </View>
      <View style={styles.loginFooter}>
        <Icon style={styles.loginIcon} name='google' color='red' />
        <Icon style={styles.loginIcon} name='facebook-square' color='blue' />
        <Icon style={styles.loginIcon} name='instagram' color='purple' />
      </View>
    </View>
  );
};

export default LoginScreen;
