import "./AboutSelectedToolStyles.css";
import { aboutSelectedToolDummyData } from "../../utils/DummyData";
interface aboutSelectedToolType {
  data?: {
    title: string;
    description: string;
    points: {
      dot: { outer: string; middle: string; inner: string };
      title: string;
      description: string;
    }[];
  };
}
const AboutSelectedToolComponent = ({
  data = {
    title: "About Selected Tool",
    description:
      "A comprehensive, user-friendly platform that handles everything from care management to compliance.",
    points: aboutSelectedToolDummyData,
  },
}: aboutSelectedToolType) => {
  return (
    <div id="selected-tool-container">
      <div id="selected-tool-heading">{data.title}</div>
      <div id="selected-tool-subheading">{data.description}</div>
      {/* <div id="selected-tool-text">
        An all-in-one, seamless platform designed for NDIS businesses,
        simplifying care management, rostering, invoicing, and compliance –
        delivering efficiency, security, and affordability in one solution.
      </div> */}
      <div id="selected-tool-data-container">
        {data.points &&
          data.points?.map((subdata, index) => {
            return (
              <div key={index} className={"selected-tool-data"}>
                <svg viewBox="0 0 40 40" width="40" height="40">
                  <circle cx="20" cy="20" r="16" fill={subdata.dot.outer} />
                  <circle cx="20" cy="20" r="11" fill={subdata.dot.middle} />
                  <circle cx="20" cy="20" r="6" fill={subdata.dot.inner} />
                </svg>
                <div className="selected-tool-title">{subdata.title}</div>
                <div className="selected-tool-description">
                  {subdata.description}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AboutSelectedToolComponent;
