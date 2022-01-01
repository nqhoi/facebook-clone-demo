import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
import { getAnalytics } from "firebase/analytics";

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyCAH6mnHMv5DbI1D0w1cLSlEDCZhqrWNLI",
   authDomain: "facebook-clone-d5e9c.firebaseapp.com",
   projectId: "facebook-clone-d5e9c",
   storageBucket: "facebook-clone-d5e9c.appspot.com",
   messagingSenderId: "512383836829",
   appId: "1:512383836829:web:e812f4c0375bb7a737aa74",
   measurementId: "G-TEH8FFX4C2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);



