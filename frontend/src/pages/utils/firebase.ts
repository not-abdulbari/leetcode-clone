// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import dotenv from "dotenv";

dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.Apikey,
  authDomain: process.env.AuthDomain,
  projectId:  process.env.ProjectId,
  storageBucket: process.env.StorageBucket,
  messagingSenderId: process.env.MessagingSenderId,
  appId: process.env.AppId,
  measurementId: process.env.MeasurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
