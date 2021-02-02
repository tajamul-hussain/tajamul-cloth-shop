import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBzsgpIXfOm82Y84B4M2BH12_ELdObuVIs",
  authDomain: "tajamulsclothshop.firebaseapp.com",
  projectId: "tajamulsclothshop",
  storageBucket: "tajamulsclothshop.appspot.com",
  messagingSenderId: "215228776716",
  appId: "1:215228776716:web:b84c514fa88d09a7c5c929",
  measurementId: "G-4WCYRXD7RZ",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
