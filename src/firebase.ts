// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRJowj-KNO8rDNu0dOwt9zDTgMX1G-8l8",
  authDomain: "halalonlinemall.firebaseapp.com",
  projectId: "halalonlinemall",
  storageBucket: "halalonlinemall.appspot.com",
  messagingSenderId: "559878304830",
  appId: "1:559878304830:web:ce98208c9b3b9ad9a18d6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
