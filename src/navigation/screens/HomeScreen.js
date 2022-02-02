import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { auth, db, handleSignOut } from '../../../firebase';
import styles from '../../styles/Styles';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [perms, setPerms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth.currentUser) {
      const docRef = db.collection('users').doc(auth.currentUser.uid);
      docRef.get().then((results) => {
        const data = results.data();
        setData(data);

        const docRefforPerms = db
          .collection('roles')
          .where('roleId', '==', data.roleId);
        docRefforPerms.get().then((queryResult) => {
          queryResult.forEach((doc) => {
            const roleData = doc.data();
            setPerms(roleData.perms[0].actions);
          });
        });
        setLoading(false);
      });
    } else {
    }
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size='large'
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      ) : (
        <Text>Email: {data.email}</Text>
      )}
      {data.roleId === 1 ? <Text>Admin text</Text> : null}
      {Object.entries(perms).map(([key, v]) => {
        return (
          <Text key={key}>
            {key}: {v ? 'true' : 'false'}
          </Text>
        );
      })}
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
