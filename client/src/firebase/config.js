import firebase from 'firebase/app';

import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB50Lnh2HJ9a5asBIebbXlDOd-1Sy9UJTE",
  authDomain: "imgkafriprint.firebaseapp.com",
  projectId: "imgkafriprint",
  storageBucket: "imgkafriprint.appspot.com",
  messagingSenderId: "801338896332",
  appId: "1:801338896332:web:242c38c0edc5e53cad7769"
};

// Initialize Firebase
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
export const storage= firebase.storage();