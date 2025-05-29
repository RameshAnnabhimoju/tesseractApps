import "./AboutSelectedToolStyles.css";
import { aboutSelectedToolDummyData } from "../../utils/DummyData";
const AboutSelectedToolComponent = ({
  data = {
    sectionTitle2: "",
    sectionDescription2: "",
    sectionPoints2: aboutSelectedToolDummyData,
  },
}: {
  data?: {
    sectionTitle2: string;
    sectionDescription2: string;
    sectionPoints2: {
      dot: { outer: string; middle: string; inner: string };
      title: string;
      description: string;
    }[];
  };
}) => {
  return (
    <div id="selected-tool-container">
      <div id="selected-tool-heading">
        {data.sectionTitle2 || "About Selected Tool"}
      </div>
      <div id="selected-tool-subheading">
        {data.sectionDescription2 ||
          "A comprehensive, user-friendly platform that handles everything from care management to compliance."}
      </div>
      {/* <div id="selected-tool-text">
        An all-in-one, seamless platform designed for NDIS businesses,
        simplifying care management, rostering, invoicing, and compliance –
        delivering efficiency, security, and affordability in one solution.
      </div> */}
      <div id="selected-tool-data-container">
        {data.sectionPoints2 &&
          data.sectionPoints2?.map((data, index) => {
            return (
              <div key={index} className="selected-tool-data">
                <svg viewBox="0 0 40 40" width="40" height="40">
                  <circle cx="20" cy="20" r="16" fill={data.dot.outer} />
                  <circle cx="20" cy="20" r="11" fill={data.dot.middle} />
                  <circle cx="20" cy="20" r="6" fill={data.dot.inner} />
                </svg>
                <div className="selected-tool-title">{data.title}</div>
                <div className="selected-tool-description">
                  {data.description}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AboutSelectedToolComponent;
