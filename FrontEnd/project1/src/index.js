// import firebase from "firebase";
// firebase.initializeApp({
//   apiKey: "AIzaSyBDidRX_YI5b2zJB8nsZvqr_1hqYC2Ny-c",
//   authDomain: "ttmsa-11e7b.firebaseapp.com",
//   databaseURL: "https://ttmsa-11e7b-default-rtdb.firebaseio.com",
//   projectId: "ttmsa-11e7b",
//   storageBucket: "ttmsa-11e7b.appspot.com",
//   messagingSenderId: "816816976863",
//   appId: "1:816816976863:web:2f16ace212678f152e8a6a",
//   measurementId: "G-H737H4KHFT"
// });


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export var url = "http://localhost:3000/"

// export function regularRequest(handler, method, body, callback) {
//     const http = new XMLHttpRequest()
//     http.responseType = 'json'
//     http.open(method, url + handler, true)
//     if (body != null) {
//       http. setRequestHeader('Content-Type', 'application/json')
//     }
//     http.onload = function(){
//         callback(http. response)
//     }
//     http. send(JSON. stringify(body))
// }
