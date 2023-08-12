import { useState } from "react";
import "../../../styles/Header.scss";
import { FcSearch } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import MovieFlixLogo from "../MovieFlixLogo.png";

const DashBoardHeader = () => {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleNavigation = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                  <button className="logout" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
                <Link to="/login">
                  <li>
                    <button className="login">Profile</button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        {/* {isSearchOpen && <SearchWrapper />} */}
      </div>
    </>
  );
};

export default DashBoardHeader;
