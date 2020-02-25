import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "stock-5ff95.firebaseapp.com",
    databaseURL: "https://stock-5ff95.firebaseio.com",
    projectId: "stock-5ff95",
    storageBucket: "stock-5ff95.appspot.com",
    messagingSenderId: "414068649261",
    appId: "1:414068649261:web:a548c6a405e321f87a77a4",
    measurementId: "G-P3M0QV5D6H"
}

firebase.initializeApp(config)
firebase.firestore()

export default firebase