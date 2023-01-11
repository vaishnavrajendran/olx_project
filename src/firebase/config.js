import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDF28QPoyn-G8Nk004quVT5lMlz2-4AJdY",
    authDomain: "olx-project-8f99b.firebaseapp.com",
    projectId: "olx-project-8f99b",
    storageBucket: "olx-project-8f99b.appspot.com",
    messagingSenderId: "495413673181",
    appId: "1:495413673181:web:154b50fada3ca017936f34",
    measurementId: "G-XNGHDDWE9F"
  };

 export default firebase.initializeApp(firebaseConfig)