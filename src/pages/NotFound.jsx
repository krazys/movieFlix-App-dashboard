import Header from "../components/Header";
import NotFoundPic from "../assets/NotFoundPic.png";
import "../../styles/variables.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="notfoundContainer">
        <img src={NotFoundPic} alt="love" />
      </div>
    </>
  );
};

export default NotFound;
