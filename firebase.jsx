import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA0htFdLzY2Q9XyAhTrXqgdOxA6hcp1oRA",
  authDomain: "nextjs-twitter-firebase.firebaseapp.com",
  projectId: "nextjs-twitter-firebase",
  storageBucket: "nextjs-twitter-firebase.appspot.com",
  messagingSenderId: "129076896658",
  appId: "1:129076896658:web:09f2439b30aabcfb8a574b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };
