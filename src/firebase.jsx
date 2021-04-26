import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiByTao77dbcDXhyun89Zz7C9d8sp-G_A",
  authDomain: "reactor-pad.firebaseapp.com",
  projectId: "reactor-pad",
  storageBucket: "reactor-pad.appspot.com",
  messagingSenderId: "72088684880",
  appId: "1:72088684880:web:db60950b1f5a2f6e1d8455",
  measurementId: "G-675LX7WGY6",
};

firebase.initializeApp(firebaseConfig);
