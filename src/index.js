import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";

firebase.initializeApp({
  apiKey: "AIzaSyCT68CmIASPdimIGi81iQEL3qZ281ibhtg",
  authDomain: "internship-kemkes-100ab.firebaseapp.com",
  projectId: "internship-kemkes-100ab",
  storageBucket: "internship-kemkes-100ab.appspot.com",
  messagingSenderId: "1016363755663",
  appId: "1:1016363755663:web:b9c86de42396841c80e8fa"
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
