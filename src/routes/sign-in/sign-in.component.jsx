// import { useEffect } from 'react';
// import {getRedirectResult } from 'firebase/auth'
import SignUpForm from '../../components/sign-up-form/sign-up-form.components.jsx';
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils.js'


const SignIn = () => {

//  useEffect(() => {
//     const fetchGoogleAuth =
//     async () => {
//     const response = await getRedirectResult(auth);
//     if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
// }
//     fetchGoogleAuth();
//  }, []

//  )

const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
}


    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with GooglePopup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm/>
        </div>
    )
}

export default SignIn; 