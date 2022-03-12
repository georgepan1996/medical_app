import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  topHeader: {
    height: '10%',
    backgroundColor: '#5091ee',
  },
  topHeaderSignUp: {
    height: '10%',
    backgroundColor: '#7FADEF',
  },
  headerContainer: {
    height: '35%',
    position: 'relative',
    paddingTop: '20%',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  loginSection: {
    height: '65%',
  },
  userConnectionInputs: {
    padding: 15,
  },
  userInfoInput: {
    borderBottomWidth: 1, //On Android use: underlineColorAndroid="transparent"
    borderColor: 'grey',
    fontSize: 18,
    paddingVertical: 8,
    margin: 12,
    marginHorizontal: 30,
  },
  //Buttons
  buttonsContainer: {
    height: '8%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'grey',
    // padding: '20%',
    paddingHorizontal: 10,
  },
  userSubmitButtonSignUp: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    width: '35%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    marginLeft: 25,
    // marginRight: 25,
    borderRadius: 15,
  },
  userSubmitButtonTextSignUp: {
    color: '#5091ee',
    fontSize: 18,
  },
  userSubmitButtonLogIn: {
    backgroundColor: '#5091ee',
    alignItems: 'center',
    height: '100%',
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    // marginLeft: 25,
    marginRight: 25,
    borderRadius: 15,
  },
  userSubmitButtonTextLogIn: {
    color: 'white',
    fontSize: 18,
  },
  loginFooter: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
  },
  logInForgot: {
    height: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  forgotTextButtonText: {
    fontWeight: '500',
    fontSize: 15,
    padding: 5,
    color: '#5091ee',
    textAlign: 'center',
  },
  orLoginTextButtonText: {
    // fontWeight: '500',
    color: '#5091ee',
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
  },
  logInIcons: {
    height: 'auto',
    flexDirection: 'row',
    backgroundColor: 'white',
    // padding: 20,
  },
  loginIcon: {
    fontSize: 24,
    color: '#5091EE',
    paddingHorizontal: 10,
  },
  // loginIcon: {
  //   width: 130,
  //   height: 130,
  //   borderRadius: 100,
  //   margin: 10,
  // },
  // loginLogoText: {
  //   fontWeight: '500',
  //   fontSize: 15,
  //   padding: 5,
  //   textAlign: 'center',
  //   fontStyle: 'italic',
  //   textShadowColor: 'rgba(0, 0, 0, 0.75)',
  //   textShadowOffset: { width: 0, height: 2 },
  //   textShadowRadius: 5,
  // },
  // loginHeaderText: {
  //   fontWeight: '500',
  //   fontSize: 15,
  //   fontFamily: 'sans-serif',
  //   textAlign: 'center',
  //   fontStyle: 'italic',
  //   paddingLeft: 60,
  //   paddingRight: 60,
  //   // color: '#95D7F1'
  //   color: '#0C528E',
  // },

  // loginTabs: {
  //   backgroundColor: '#95D7F1',
  // },

  // //login, signup

  // //other cases
  // onlyTextButton: {
  //   padding: 20,
  // },

  // shadowText: {
  //   color: 'black',
  //   textShadowColor: 'rgba(0, 0, 0, 0.5)',
  //   textShadowOffset: { width: 0, height: 0.5 },
  //   textShadowRadius: 2,
  // },

  // beforeFooterTextContainer: {
  //   marginTop: 'auto',
  // },
  // beforeFooterText: {
  //   fontWeight: 'bold',
  //   fontFamily: 'notoserif',
  //   textTransform: 'uppercase',
  //   textAlign: 'center',
  //   position: 'relative',
  //   bottom: 0,
  // },

  // iconsContainer: {
  //   height: '100%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  // },
  // iconStyle: {
  //   padding: 20,
  // },

  // sectionContainer: {
  //   height: '35%',
  // },
  // footerContainer: {
  //   height: '30%',
  // },
  // text: {
  //   color: '#101010',
  //   fontSize: 24,
  //   fontWeight: 'bold',
  // },
  // smallLinkText: {
  //   color: 'blue',
  //   fontSize: 12,
  //   paddingLeft: 20,
  // },
  // card: {
  //   width: 350,
  //   height: 100,
  //   borderRadius: 10,
  //   backgroundColor: '#101010',
  //   margin: 10,
  //   padding: 10,
  //   alignItems: 'center',
  // },
  // cardText: {
  //   fontSize: 18,
  //   color: '#ffd700',
  //   marginBottom: 5,
  // },
  // buttonContainer: {
  //   borderRadius: 5,
  //   padding: 20,
  //   paddingBottom: 0,
  // },
  // buttonText: {
  //   fontSize: 20,
  //   color: 'black',
  // },
  // input: {
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
  // inputContainer: {
  //   // width: '80%',
  //   padding: 10,
  //   paddingBottom: 0,
  // },
  // button: {
  //   backgroundColor: '#0782F9',
  //   width: '100%',
  //   padding: 15,
  //   borderRadius: 10,
  //   alignItems: 'center',
  // },
  // buttonOutline: {
  //   backgroundColor: 'white',
  //   marginTop: 5,
  //   borderColor: '#0782F9',
  //   borderWidth: 2,
  // },
  // buttonOutlineText: {
  //   color: '#0782F9',
  //   fontWeight: '700',
  //   fontSize: 16,
  // },
});
