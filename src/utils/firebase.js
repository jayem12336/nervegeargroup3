import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBVr9kEzquKUh_QkxHiXCVES-JjBjawzBg",
  authDomain: "group3nervegear.firebaseapp.com",
  projectId: "group3nervegear",
  storageBucket: "group3nervegear.appspot.com",
  messagingSenderId: "1016634611942",
  appId: "1:1016634611942:web:7ecfb9be37716c58730327",
  measurementId: "G-TKMZ7CLM5L"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;