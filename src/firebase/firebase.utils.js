import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCxJdj0AYTFI9HIio0cD5p8nDK2xYk0mag',
  authDomain: 'crwn-db-4848e.firebaseapp.com',
  databaseURL: 'https://crwn-db-4848e.firebaseio.com',
  projectId: 'crwn-db-4848e',
  storageBucket: '',
  messagingSenderId: '671242129257',
  appId: '1:671242129257:web:ea46dc10c815a311'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const forestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
