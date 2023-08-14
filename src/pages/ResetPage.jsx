import { useEffect, useState } from "react";
import "../../styles/signup.scss";
import Header from "../components/Header";
import { auth } from "../config/firebase";
// import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email)
        .then((response) => {
          // console.log(response);
          navigate("/login");
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

  return (
    <div className="signupOuterContainer">
      <Header />
      <div className="signupInnerContainer">
        <div className="headerSection">
          <h3>Welcome to MovieFlix</h3>
          <p>Forgot Password ?</p>
          <p>
            We will send you an email with instructions on how to reset your
            password.
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
            <button onClick={onHandleSubmit}>Reset</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
