import "./WhitepapersStyles.css";
import pdf from "../../assets/Digital Transformation in Disability Services A Roadmap for 2025–2030.pdf";
import whitepaper1 from "../../assets/whitepaper1.png";
import { useLocation } from "react-router-dom";
const Whitepapers = () => {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data);
  const handleClick = () => {
    window.open(pdf, "_blank");
  };
  return (
    <div id="whitepapers-page-container">
      <div className="heading">{data?.heading}</div>
      <div id="whitepapers-subheading" className="subheading">
        {data?.subHeading}
      </div>
      <div id="whitepapers-text" className="text">
        {data?.text}
      </div>

      <div id="whitepapers-item-container">
        <img
          src={whitepaper1}
          alt="whitepaper-1"
          onClick={handleClick}
          className="whitepaper-item"
        />
      </div>
      {/* <object data={pdf} type="application/pdf" width="50%" height="600px" /> */}
    </div>
  );
};

export default Whitepapers;
