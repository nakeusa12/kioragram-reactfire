import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBqhUjeZ0quIlFd93H4Wxk9zFGe_Pbf6T0",
  authDomain: "pro-kiogram.firebaseapp.com",
  databaseURL: "https://pro-kiogram.firebaseio.com",
  projectId: "pro-kiogram",
  storageBucket: "pro-kiogram.appspot.com",
  messagingSenderId: "1062047362040",
  appId: "1:1062047362040:web:315d5e2e91807a5540440d",
  measurementId: "G-J8GCC0RSF2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };