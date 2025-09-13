import "./WhitepapersStyles.css";
import pdf from "../../assets/Digital Transformation in Disability Services A Roadmap for 2025–2030.pdf";
import pdf2 from "../../assets/White Paper Aug 2025.pdf";
import pdf3 from "../../assets/White Paper Sep 2025.pdf";
// import whitepaper1 from "../../assets/whitepaper1.png";
import whitepaper2 from "../../assets/White Paper Aug 2025_page-0001.jpg";
import whitepaper3 from "../../assets/whitepaper-3.png";
import { useLocation } from "react-router-dom";
const Whitepapers = () => {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id;
    switch (id) {
      case "whitepaper-1":
        window.open(pdf, "_blank");
        break;
      case "whitepaper-2":
        window.open(pdf2, "_blank");
        break;
      case "whitepaper-3":
        window.open(pdf3, "_blank");
        break;
      default:
        break;
    }
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
        {/* <img
          id="whitepaper-1"
          src={whitepaper1}
          alt="whitepaper-1"
          onClick={handleClick}
          className="whitepaper-item"
        /> */}
        <img
          id="whitepaper-2"
          src={whitepaper2}
          alt="whitepaper-2"
          onClick={handleClick}
          className="whitepaper-item"
        />
        <img
          id="whitepaper-3"
          src={whitepaper3}
          alt="whitepaper-2"
          onClick={handleClick}
          className="whitepaper-item"
        />
      </div>
      {/* <object data={pdf} type="application/pdf" width="50%" height="600px" /> */}
    </div>
  );
};

export default Whitepapers;
