import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../../styles/signIn.scss";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onHandleEmail = (e) => {
    setEmail(e.target.value);
  };
  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const userId = userCredential.user;
          sessionStorage.setItem("userAuth", userId.uid);
          navigate("/dashboard");
        })
        .catch((err) => {
          const errorCode = err.code;
          setErrorMsg(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="signInOuterContainer">
        <Header />
        <div className="signInInnerContainer">
          <div className="signInContainer">
            <div className="headerSection">
              <h3>Welcome to MovieFlix</h3>
              <p>Login to access your list, favourites..</p>
            </div>
            <div className="formSection">
              <p>{errorMsg}</p>
              <form>
                <label>Email </label>
                <input
                  type="email"
                  onChange={(e) => onHandleEmail(e)}
                  value={email}
                  name="email"
                  placeholder="Email"
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => onHandlePassword(e)}
                  value={password}
                  placeholder="Password"
                />
                <button onClick={onHandleSubmit}>Sign In</button>
              </form>
              <div className="forgotPassword">
                <p>Forgot Password ?</p>

                <Link to="/LoginHelp">
                  <button>Reset</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
