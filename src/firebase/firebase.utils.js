import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// sempre precisa importa o firease completo pra dps poder dar import no store e auth
const config  = {
    apiKey: "AIzaSyDuHTtUoxaEUp7Bc05pmaDE6Quukvp0k1A",
    authDomain: "udemy-crown-41095.firebaseapp.com",
    databaseURL: "https://udemy-crown-41095.firebaseio.com",
    projectId: "udemy-crown-41095",
    storageBucket: "udemy-crown-41095.appspot.com",
    messagingSenderId: "468641248743",
    appId: "1:468641248743:web:f2b938d84adb228955f942",
    measurementId: "G-H9HBJ6PSFX"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;