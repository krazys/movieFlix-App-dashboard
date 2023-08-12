import React, { lazy, Suspense } from "react";
import "./App.css";
import AppLayoutContextWrapper from "./components/AppLayoutContextWrapper";
import HomePageWrappper from "./components/HomePageWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MoviePage = lazy(() => import("./components/MoviePage"));
import ShowPage from "./components/ShowPage";
import TrendingPage from "./components/TrendingPage";
const SearchResultsWrapper = lazy(() =>
  import("./components/SearchResultsWrapper")
);
import SignupPage from "./pages/SignupPage.jsx";
import DashboardHome from "./pages/DashboardHome";
import SignIn from "./pages/SignIn";
import ResetPage from "./pages/ResetPage.jsx";

const App = () => {
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
            <Route path="/profile" element={<DashboardHome />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/LoginHelp" element={<ResetPage />} />
          </Routes>
        </Suspense>
      </AppLayoutContextWrapper>
    </Router>
  );
};

export default App;
