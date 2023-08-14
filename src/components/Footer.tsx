import "../../styles/footer.scss";
import hearty from "../assets/hearty.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <p>
        Built with Love <img src={hearty} alt="love" /> Login to view the
        documentation & functionality.
      </p>
    </div>
  );
};
export default Footer;
