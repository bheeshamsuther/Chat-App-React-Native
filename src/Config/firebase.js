import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyBQdwweJOeogxuGswshMmlAg_zn2CEwaMU",
    authDomain: "chatapplication2019.firebaseapp.com",
    databaseURL: "https://chatapplication2019.firebaseio.com",
    projectId: "chatapplication2019",
    storageBucket: "",
    messagingSenderId: "435053300854",
    appId: "1:435053300854:web:565cc0b02ae65663012357",
    measurementId: "G-NJGMHH2NGR"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export default firebase
