import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB142m0AymuG0S6aAUxISeizUsz0BuBP2k",
  authDomain: "marvelcharactersapp-37eee.firebaseapp.com",
  projectId: "marvelcharactersapp-37eee",
  storageBucket: "marvelcharactersapp-37eee.appspot.com",
  messagingSenderId: "1064518006865",
  appId: "1:1064518006865:web:c791980cfc99c79ddca070"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.firestore();

export { db };