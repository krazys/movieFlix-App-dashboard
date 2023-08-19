// import { useState, useEffect } from "react";
import DashboardHome from "./DashboardHome";
import { Navigate } from "react-router-dom";
// import ProfilePage from "./Profile";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../config/firebase.js";

const useAuth = () => {
  let userId = sessionStorage.getItem("userAuth");

  if (userId) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoutes = () => {
  const auth = useAuth();
  //   useEffect(() => {
  //     let userId = sessionStorage.getItem("userAuth");

  //     if (userId) {
  //       setUserAuthenticated(true);
  //     } else {
  //       setUserAuthenticated(false);
  //     }
  //   }, []);

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       setUserAuthenticated(true);
  //     } else {
  //       setUserAuthenticated(false);

  //       console.log("user is logged out");
  //     }
  //   });

  //   return userAuthenticated && <Outlet />;
  return (
    <>
      {auth ? (
        <>
          <DashboardHome />
          {/* <Outlet /> */}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
  // <Routes>
  //   <Route path="/*" element={<DashboardHome />} />
  //   <Route path="profile" element={<ProfilePage />} />
  // </Routes>
};

export default PrivateRoutes;
