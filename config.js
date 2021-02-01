import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC8Z2otpapG1RwEWscG8HC7BbSzBokgyow",
  authDomain: "bedtime-stories-4c598.firebaseapp.com",
  databaseURL: "https://bedtime-stories-4c598-default-rtdb.firebaseio.com",
  projectId: "bedtime-stories-4c598",
  storageBucket: "bedtime-stories-4c598.appspot.com",
  messagingSenderId: "605667840257",
  appId: "1:605667840257:web:66b7f418edc06aef7c0b00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
