import { initializeApp } from "firebase/app";
import Auth from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUHqZxyrvNPUhhWeJABHb526rSinis4BA",
  authDomain: "fir-ef269.firebaseapp.com",
  databaseURL: "https://fir-ef269-default-rtdb.firebaseio.com",
  projectId: "fir-ef269",
  storageBucket: "fir-ef269.appspot.com",
  messagingSenderId: "1032763725233",
  appId: "1:1032763725233:web:7d376dd924c499c50d5990",
  measurementId: "G-LMRP0S80MM"
};

const app = initializeApp(firebaseConfig);

const auth = Auth;

export { app, auth };