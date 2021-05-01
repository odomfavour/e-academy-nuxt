// config for firebase

import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALFTzEUzDkXRd0ByBLi9dE3EZCRKSwESw",
    authDomain: "e-academy-nuxtapp.firebaseapp.com",
    projectId: "e-academy-nuxtapp",
    databaseURL: 'https://e-academy-nuxtapp.firebaseio.com',
    storageBucket: "e-academy-nuxtapp.appspot.com",
    messagingSenderId: "31987207229",
    appId: "1:31987207229:web:1c9064442f738f30de6e54"
  };
  // Initialize Firebase

  
  

  let app = null;
  if(!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);
  }

  export default firebase;