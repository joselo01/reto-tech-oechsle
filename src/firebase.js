import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC73opmUbZJwu7PcIcr7Ba5I0VToQnFLRA",
    authDomain: "reto-tech-oeshle.firebaseapp.com",
    projectId: "reto-tech-oeshle",
    storageBucket: "reto-tech-oeshle.appspot.com",
    messagingSenderId: "1019642605211",
    appId: "1:1019642605211:web:2bcfd3af54b0e72c3f203e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}