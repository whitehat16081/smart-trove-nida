import { firebase } from '@firebase/app';
import '@firebase/firestore'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyADq-HbuoDII1pjrLWJlaGjDx_nt8sc7yE",
    authDomain: "smarttrove-36a74.firebaseapp.com",
    projectId: "smarttrove-36a74",
    storageBucket: "smarttrove-36a74.appspot.com",
    messagingSenderId: "832873773319",
    appId: "1:832873773319:web:178ed35af9610db147eda2"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
