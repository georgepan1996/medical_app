import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import SVGComponent from '../../../assets/svgs/loginScreen/TopSvgBlue.js';
import styles from '../../styles/StylesLogInScreen';

export default function ScreenOne() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <SVGComponent style={styles.svgCurve} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Medical app</Text>
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
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   // rest of the styles
//   svgCurve: {
//     // position: 'absolute',
//     width: Dimensions.get('window').width,
//   },
//   headerText: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     // change the color property for better output
//     color: '#fff',
//     textAlign: 'center',
//     marginTop: 35,
//   },
// });
