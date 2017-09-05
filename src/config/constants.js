import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBSA57ykEaK-o4Hl11w8ZVbGptOdZOQEX4",
    authDomain: "plucky-zodiac-132011.firebaseapp.com",
    databaseURL: "https://plucky-zodiac-132011.firebaseio.com",
    projectId: "plucky-zodiac-132011",
    storageBucket: "plucky-zodiac-132011.appspot.com",
    messagingSenderId: "551724543239"
  };
  firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth


