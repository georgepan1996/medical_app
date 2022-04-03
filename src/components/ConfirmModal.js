import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { handleForgotPassword } from '../../firebase';

const ConfirmModal = ({
  children,
  visible,
  email,
  emailToSendIsOk,
  closeModal,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{children}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                emailToSendIsOk
                  ? (closeModal(),
                    navigation.navigate('Login'),
                    handleForgotPassword(email))
                  : closeModal();
              }}
            >
              <Text style={styles.textStyle}>Ok, log in</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ConfirmModal;
