import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCKk0QAWLdJqxYixgS7UD83ImuCWAf2chs",
    authDomain: "reactnativefirst-615e9.firebaseapp.com",
    databaseURL: "https://reactnativefirst-615e9.firebaseio.com",
    projectId: "reactnativefirst-615e9",
    storageBucket: "",
    messagingSenderId: "767718283472",
    appId: "1:767718283472:web:42ac81b4cc44fbc15d66d5",
    measurementId: "G-2SW3LKLHKS"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase