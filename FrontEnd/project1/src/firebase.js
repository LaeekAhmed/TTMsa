import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBDidRX_YI5b2zJB8nsZvqr_1hqYC2Ny-c",
    authDomain: "ttmsa-11e7b.firebaseapp.com",
    databaseURL: "https://ttmsa-11e7b-default-rtdb.firebaseio.com",
    projectId: "ttmsa-11e7b",
    storageBucket: "ttmsa-11e7b.appspot.com",
    messagingSenderId: "816816976863",
    appId: "1:816816976863:web:2f16ace212678f152e8a6a",
    measurementId: "G-H737H4KHFT"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
