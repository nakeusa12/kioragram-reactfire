import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDDgNbxDLEtNaKlkEElJ57qaIRg2dW5vlM",
    authDomain: "kioragram.firebaseapp.com",
    databaseURL: "https://kioragram.firebaseio.com",
    projectId: "kioragram",
    storageBucket: "kioragram.appspot.com",
    messagingSenderId: "240435993360",
    appId: "1:240435993360:web:4684080c76aa0463cba395",
    measurementId: "G-NSWCGYYFPB"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };