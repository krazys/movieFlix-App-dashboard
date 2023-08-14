import "../../styles/heroBanner.scss";

const HeroBanner = () => {
  return (
    <div className="OuterContainer">
      <div className="backgroundOpacity">
        <div className="centraltextSec">
          <h1>Browse through top trending Movies & Shows</h1>
          <p>Scroll down to view latest content</p>
        </div>

        <div className="signup"></div>
        <div className="scrollDown">
          <div className="mouse"></div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
