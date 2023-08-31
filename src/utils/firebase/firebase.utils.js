import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
 } from 'firebase/auth'

 import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
  } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPhoxBfT6-XYM4xizM0BPKo79m2PS4HpQ",
    authDomain: "clothing-c-db.firebaseapp.com",
    projectId: "clothing-c-db",
    storageBucket: "clothing-c-db.appspot.com",
    messagingSenderId: "577706722414",
    appId: "1:577706722414:web:6f0bbd084d5189da2a927f"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);


    if(!userSnapShot.exists()) {
      const {  displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error) {
        console.log(  'error creating the user' , error.message);
      }
    }

    return userDocRef;

  }