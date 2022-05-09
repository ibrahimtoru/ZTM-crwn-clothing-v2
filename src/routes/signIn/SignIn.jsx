import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

import {
  auth,
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/signUpForm/SignUpForm";

const SignIn = () => {
  useEffect(() => {
    const createUser = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await creatUserDocumentFromAuth(response.user);
      }
    };
    createUser();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
