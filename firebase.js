import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDdWmIpS3hKq4jBIMzOYWw8GNVXPxjmIi8',
  authDomain: 'thestorycreatorapp-6085f.firebaseapp.com',
  projectId: 'thestorycreatorapp-6085f',
  storageBucket: 'thestorycreatorapp-6085f.appspot.com',
  messagingSenderId: '998849769569',
  appId: '1:998849769569:web:e2463d76e434ad6c9efa20',
  measurementId: 'G-SRTFB39YF2',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const auth = firebase.auth();

export const db = firebase.firestore();

const handleSignOut = () => {
  auth.signOut().catch((error) => alert(error.message));
};

const handleSignUp = (userName, email, password, doctorId = 'none') => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const currentUser = firebase.auth().currentUser;
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
      console.log('id:', currentUser.uid);

      db.collection('users').doc(currentUser.uid).set({
        userName,
        email,
        password,
        doctorId,
        roleId: 0,
        isAdmin: false,
        isVerified: false,
      });
    })
    .catch((error) => alert(error.message));

  firebase.auth().onAuthStateChanged(function (user) {
    user.sendEmailVerification();
  });
};

function fetchUserData(id) {
  const docRef = db.collection('users').doc(id);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        data = doc.data();
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}

function fetchRolesData(roleId) {
  const docRef = db.collection('roles').where('roleId', '==', roleId);
  console.log('roleId', roleId);
  console.log('docRef', docRef);
  docRef
    .get()
    .then((queryResult) => {
      queryResult.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        roleData = doc.data();
        console.log('roleData', roleData);
      });
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}

const handleLogin = (email, password) => {
  let uid;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const currentUser = firebase.auth().currentUser;
      const user = userCredentials.user;
      uid = currentUser.uid;
      const ver = currentUser.emailVerified;

      fetchUserData(currentUser.uid);

      console.log('Logged in with:', currentUser.email, ' Verified:', ver);
    })
    .catch((error) => alert(error.message));
};

const handleForgotPassword = (email) => {
  auth
    .sendPasswordResetEmail(email)
    .then(console.log('forgotten password email sent'))
    .catch((error) => alert(error.message));
  // - Set a message through context with info about the
  // proceess and the next steps.
  // - First run the validators, set a message if any and
  // then navigate to the login page.
};

export {
  handleSignUp,
  handleLogin,
  handleSignOut,
  fetchRolesData,
  handleForgotPassword,
};
