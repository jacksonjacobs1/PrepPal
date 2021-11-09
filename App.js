import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './app/components/Container'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Container/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;