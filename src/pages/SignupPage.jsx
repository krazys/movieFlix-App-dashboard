import { useEffect, useState } from "react";
import "../../styles/signup.scss";
import Header from "../components/Header";
import { auth } from "../config/firebase";
// import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(email, password);
      console.log(auth);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log(response);
          navigate("/profile");
        })
        .catch((err) => {
          setErrorMsg(err.message);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const onHandleEmail = (e) => {
    setEmail(e.target.value);
  };
  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="signupOuterContainer">
      <Header />
      <div className="signupInnerContainer">
        <div className="headerSection">
          <h3>Welcome to MovieFlix</h3>
          <p>
            Create a new account to access your Favourite lists, Rate shows,
            Movies & much more..
          </p>
        </div>
        <div className="formSection">
          <p>{errorMsg}</p>
          <form>
            <label>Email </label>
            <input
              type="email"
              onChange={(e) => onHandleEmail(e)}
              value={email}
              placeholder="Email"
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => onHandlePassword(e)}
              value={password}
              placeholder="Password"
            />
            <button onClick={onHandleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
