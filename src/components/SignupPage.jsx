import { useEffect, useState } from "react";
import "../../styles/signup.scss";
import Header from "./Header";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const SignupPage = async () => {
  // const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSubmit = async () => {
    e.preventDefault();
    const authentication = getAuth();
    // createUserWithEmailAndPassword(authentication, email, password).then(
    //   (response) => {
    //     console.log(response);
    //   }
    // );
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("user", user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("errorMessage", errorMessage);
        // ..
      });
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
          <form onSubmit={onHandleSubmit}>
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
            <input className="submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
