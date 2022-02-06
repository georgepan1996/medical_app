// import React, { useEffect, useState } from 'react';

// import { db } from './firebase';

// const fetchUserData = (uid) => {
//   console.log(`current id: ${uid}`);

//   const docRef = db.collection('users').doc(uid);
//   docRef
//     .get()
//     .then((doc) => {
//       console.log('ie');
//       if (doc.exists) {
//         return doc.data();
//       } else {
//         console.log('No such document!');
//       }
//     })
//     .catch((error) => {
//       console.log('Error getting document:', error);
//     });
// };

// exports.fetchUserData = fetchUserData;
