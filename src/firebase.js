import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyBEa1J8wZgz1QGeKMLOrI-8Xuvzibt03FA",
  authDomain: "mush-bd937.firebaseapp.com",
  databaseURL: "https://mush-bd937-default-rtdb.firebaseio.com",
  projectId: "mush-bd937",
  storageBucket: "mush-bd937.appspot.com",
  messagingSenderId: "1021497352049",
  appId: "1:1021497352049:web:37b784abc20677d866e0d0",
  measurementId: "G-HC3684F0J4"
};


const firebaseApp = initializeApp(firebaseConfig)
const database = getFirestore(firebaseApp)



export default database;