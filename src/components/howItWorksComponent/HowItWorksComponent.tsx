import "./HowItWorksStyles.css";
import { howItWorksDummyData } from "../../utils/DummyData";
import dividerLine from "../../assets/divider_line.jpg";
import { useEffect, useState } from "react";
const HowItWorksComponent = () => {
  const divderRowsInitialValues = [2, 3, 5, 6];
  const [dividerRows, setDividerRows] = useState(divderRowsInitialValues);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 1480) {
        setDividerRows([2, 4, 6]);
      } else {
        setDividerRows(divderRowsInitialValues);
      }
    };

    handleResize(); // Run initially on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="howItWorks-container">
      <div className="heading ">HOW IT WORKS</div>
      <div className="subheading subheading-howItWorks">
        From onboarding to compliance — TesseractApps simplifies every step of
        care delivery and operations.
      </div>
      <div id="howItWorks-content">
        {howItWorksDummyData.map((data, index) => {
          return (
            <div key={data.id + index} className="howItWorks-card">
              {dividerRows.includes(data.id) && (
                <img
                  src={dividerLine}
                  alt="dividerLine"
                  className="howItWorks-dividerLine"
                />
              )}
              <img
                src={data.image}
                alt="howItWorks-card-image"
                className="howItWorks-card-image"
              />
              <div className="howItWorks-card-data">
                <div className="howItWorks-card-title-number">0{data.id}</div>
                <div className="howItWorks-card-title">{data.title}</div>
                <div className="howItWorks-card-description">
                  {data.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorksComponent;
