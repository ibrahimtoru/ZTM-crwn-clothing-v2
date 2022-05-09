import SignUpForm from "../../components/signUpForm/SignUpForm";
import SignInForm from "../../components/signInForm/SignInForm";
import "./auth.scss";

const Auth = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
