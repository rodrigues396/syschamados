import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBaPkSYOa16DFaQd9aIFg1cRooYpkCc79Y",
    authDomain: "syschamados-9cbe1.firebaseapp.com",
    projectId: "syschamados-9cbe1",
    storageBucket: "syschamados-9cbe1.appspot.com",
    messagingSenderId: "855974594140",
    appId: "1:855974594140:web:388f348c44389c9ec34899",
    measurementId: "G-6K7YZP72RS"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export {auth , db, storage}