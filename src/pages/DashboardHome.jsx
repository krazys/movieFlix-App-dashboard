import React, { useEffect } from "react";
import "../../styles/dashboardHome.scss";

import DashBoardHeader from "../components/dashboard/DashBoardHeader.tsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.js";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();

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
  return (
    <>
      <div className="dashboardOuterContainer">
        <DashBoardHeader />
        <div className="dashboardInnerContainer">
          <h4>Your Dashboard will be coming soon...</h4>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
