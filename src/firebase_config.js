import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBcx1vpMSRKl63BhewTsNjYbgQNEaw6pOY",
    authDomain: "fir-todo-b588b.firebaseapp.com",
    projectId: "fir-todo-b588b",
    storageBucket: "fir-todo-b588b.appspot.com",
    messagingSenderId: "573377811011",
    appId: "1:573377811011:web:c0b4d3fbb45faf579bfaf6"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export {db};