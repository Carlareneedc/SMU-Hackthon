import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBUoVFG48SC4-8kD2BuWAUkWs9tsKpmXQY",
    authDomain: "unimarc-d83ac.firebaseapp.com",
    databaseURL: "https://unimarc-d83ac.firebaseio.com",
    projectId: "unimarc-d83ac",
    storageBucket: "unimarc-d83ac.appspot.com",
    messagingSenderId: "929064042116",
    appId: "1:929064042116:web:6d9b06f0912c29feba0cd1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth };