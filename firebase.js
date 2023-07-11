import firebase from "firebase/app";
import "firebase/compat/database";

var config = {
    apiKey: "AIzaSyBtrU7ws4Xg_bx1SYeFT1CSIcz3WdMasDA",
    authDomain: "books-task-a613d.firebaseapp.com",
    databaseURL: "https://books-task-a613d-default-rtdb.firebaseio.com/",
    projectId: "books-task-a613d",
    storageBucket: "books-task-a613d.appspot.com",
    messagingSenderId: "986267204465",
    appId: "1:986267204465:web:6c86f5bb65551ca5e554d0"
  };
  firebase.initializeApp(config);
//   const database = firebase.database();