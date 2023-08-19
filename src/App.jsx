import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import AppLayoutContextWrapper from "./components/AppLayoutContextWrapper";
import HomePageWrappper from "./components/HomePageWrapper";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

const MoviePage = lazy(() => import("./components/MoviePage"));
import ShowPage from "./components/ShowPage";
import TrendingPage from "./components/TrendingPage";
const SearchResultsWrapper = lazy(() =>
  import("./components/SearchResultsWrapper")
);
import SignupPage from "./pages/SignupPage.jsx";
import DashboardHome from "./components/dashboard/DashboardHome.jsx";
import SignIn from "./pages/SignIn";
import ResetPage from "./pages/ResetPage.jsx";
import PrivateRoutes from "./components/dashboard/PrivateRoutes.tsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase.js";
import ProfilePage from "./components/dashboard/Profile.tsx";

const App = () => {
  // const navigate = useNavigate();

  // const [authStatus, setAuthStatus] = useState(false);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       setAuthStatus(true);
  //       // console.log("uid", uid);
  //     } else {
  //       setAuthStatus(false);
  //     }
  //     //  else {
  //     //   navigate("/login");

  //     //   console.log("user is logged out");
  //     // }
  //   });
  // });
  return (
    <Router>
      <AppLayoutContextWrapper>
        <Suspense
          fallback={
            <div>
              <h1>Loading...</h1>
            </div>
          }
        >
          <Routes>
            <Route exact path="*" element={<HomePageWrappper />} />
            <Route path="/movie" element={<MoviePage movie="movie" />} />
            <Route path="/shows" element={<ShowPage tv="tv" />} />
            <Route
              path="/trending"
              element={<TrendingPage trending="trending" />}
            />
            <Route path="/search/:data" element={<SearchResultsWrapper />} />
            <Route path="/login" element={<SignIn />} />

            {/* {authStatus ? (
              <Route path="/dashboard" element={<PrivateRoutes />} />
            ) : (
              <Route path="/login" element={<SignIn />} />
            )} */}

            <Route path="dashboard" element={<PrivateRoutes />}>
              {/* <Route path="/dashboard" element={<DashboardHome />}> */}
              <Route path="profile" element={<ProfilePage />} />
              {/* </Route> */}
            </Route>
            {/* <Route path="/profile" element={<DashboardHome />} /> */}
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/LoginHelp" element={<ResetPage />} />
          </Routes>
        </Suspense>
      </AppLayoutContextWrapper>
    </Router>
  );
};

export default App;
