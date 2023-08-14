import { useState } from "react";
import "../../styles/Header.scss";
import { FcSearch } from "react-icons/fc";
import SearchWrapper from "./SearchWrapper";
import { Link } from "react-router-dom";
import MovieFlixLogo from "./MovieFlixLogo.png";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleNavigation = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // const redirectToSignup = () => {
  //   setIsSignupOpen(!isSignupOpen);
  //   navigate("/auth");
  // };

  return (
    <>
      <div className="outerContainer">
        <nav className="navigation">
          <div className="logo">
            <a href="/">
              <img src={MovieFlixLogo} alt="MovieFlix" />
            </a>
          </div>
          <div className="leftSection">
            <div className="searchBarSection">
              <button onClick={handleSearchOpen}>
                <FcSearch />
              </button>
            </div>
            <button className="hamBurger" onClick={handleNavigation}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className={`nav-menu ${isNavExpanded ? "expanded" : ""}`}>
              <ul className="buttonWrapper">
                <li>
                  <Link to="/signup">
                    <button className="signIn">Sign Up</button>
                  </Link>
                </li>
                <Link to="/login">
                  <li>
                    <button className="login">Login</button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        {isSearchOpen && <SearchWrapper />}
      </div>
    </>
  );
};

export default Header;
