import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";

firebase.initializeApp({
  apiKey: "AIzaSyCtNekO5fBP_kSwV7FELpXQb-HCJo5ceOw",
  authDomain: "internship-kemkes.firebaseapp.com",
  projectId: "internship-kemkes",
  storageBucket: "internship-kemkes.appspot.com",
  messagingSenderId: "788158258872",
  appId: "1:788158258872:web:25f59ddcb171abbaea1e4d"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
