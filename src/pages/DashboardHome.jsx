import React, { useEffect, useState } from "react";
import "../../styles/dashboardHome.scss";

import DashBoardHeader from "../components/dashboard/DashBoardHeader.tsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.js";
import { useNavigate } from "react-router-dom";
import ReadMe from "./ReadMe.tsx";
import heartBeat from "../assets/heartBeat.gif";

const DashboardHome = () => {
  const navigate = useNavigate();

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // console.log("uid", uid);
      } else {
        navigate("/login");

        console.log("user is logged out");
      }
    });
  });

  const showContent = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>
      <div className="dashboardOuterContainer">
        <DashBoardHeader />
        <div className="dashboardInnerContainer">
          <div className="contentSection">
            <h4>Your Dashboard will be coming soon...</h4>
            <p>
              Meanwhile have a look at the Project documentaion{" "}
              <button onClick={showContent}>Read Me</button>, built with{" "}
            </p>
            <img src={heartBeat} alt="love" />
          </div>
        </div>
      </div>

      {showDetails && <ReadMe />}
    </>
  );
};

export default DashboardHome;
