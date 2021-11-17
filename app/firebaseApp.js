// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { getFirestore, doc, setDoc, collection, getDocs, query, where} from 'firebase/firestore';
import { useState, useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAGkdGQMV2auP3-8hQtU6ym3rCUr5lh1lY",
  authDomain: "preppal-e1485.firebaseapp.com",
  projectId: "preppal-e1485",
  storageBucket: "preppal-e1485.appspot.com",
  messagingSenderId: "1081363137635",
  appId: "1:1081363137635:web:b08d2777694088e7406456",
  measurementId: "G-Y5XF10DW0P"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)

function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}

function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password).then(cred => {
      setDoc(doc(db, 'users', cred.user.uid), 
      {
        email: email,
        password: password
      })
    });
}

function logout(){
  return signOut(auth)
}

async function getUserRecipes(user){
  output = []

  const q = query(collection(db, 'recipes'), where('uid', '==', user.uid));

  const querySnapshot = await getDocs(q); // might need await here
  console.log('datasize = ' + querySnapshot.size)
  querySnapshot.forEach((doc) => {
    output.push(doc.data());
  })

  console.log(output[0])
  return output;
}

function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])


  return currentUser;
}

export {firebaseApp, auth, onAuthStateChanged, db, signUp, signIn, useAuth, logout, getUserRecipes};