import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFaymnF5q5Cm-ybWVblSfJMO0v0ZepPiU",

  authDomain: "crwn-clothing-db-c19d2.firebaseapp.com",

  projectId: "crwn-clothing-db-c19d2",

  storageBucket: "crwn-clothing-db-c19d2.appspot.com",

  messagingSenderId: "1026615009124",

  appId: "1:1026615009124:web:61f31c3baba5bc32ec2471",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", "userAtuh.uid");
  console.log(userDocRef);
};
