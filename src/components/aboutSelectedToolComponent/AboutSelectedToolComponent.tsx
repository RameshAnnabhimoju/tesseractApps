import "./AboutSelectedToolStyles.css";
import { aboutSelectedToolDummyData } from "../../utils/DummyData";
const AboutSelectedToolComponent = () => {
  return (
    <div id="selected-tool-container">
      <div id="selected-tool-heading">About Selected Tool</div>
      <div id="selected-tool-subheading">
        A comprehensive, user-friendly platform that handles everything from
        care management to compliance.{" "}
      </div>
      <div id="selected-tool-text">
        An all-in-one, seamless platform designed for NDIS businesses,
        simplifying care management, rostering, invoicing, and compliance –
        delivering efficiency, security, and affordability in one solution.
      </div>
      <div id="selected-tool-data-container">
        {aboutSelectedToolDummyData?.map((data, index) => {
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
