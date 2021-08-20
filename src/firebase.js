import firebase from "firebase/app"
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBX7PJ7a0ZPxSo-FxpJeEzRc7KDShysyoc",
    authDomain: "united-52671.firebaseapp.com",
    projectId: "united-52671",
    storageBucket: "united-52671.appspot.com",
    messagingSenderId: "429638802542",
    appId: "1:429638802542:web:349e659affa642859b5a7f"
  }).auth();