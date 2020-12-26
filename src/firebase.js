import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtFiaPBZhxNEhxaka9eE4fcDNxcGgwU2I",
    authDomain: "tinder-clone-1bdcd.firebaseapp.com",
    databaseURL: "https://tinder-clone-1bdcd.firebaseio.com",
    projectId: "tinder-clone-1bdcd",
    storageBucket: "tinder-clone-1bdcd.appspot.com",
    messagingSenderId: "742533583274",
    appId: "1:742533583274:web:5964871fd7dc18e82adbd3",
    measurementId: "G-4GQ4S96465"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;