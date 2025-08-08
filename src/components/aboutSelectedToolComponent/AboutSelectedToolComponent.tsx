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
      conclusion?: string;
      descriptionPoints?: string[];
      pointsData?: string[];
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
  type PointObject = { pointTitle: string; pointDescription: string };

  function isOfType(value: unknown, type: "stringArray"): value is string[];
  function isOfType(
    value: unknown,
    type: "pointObjectArray"
  ): value is PointObject[];
  function isOfType(
    value: unknown,
    type: "stringArray" | "pointObjectArray"
  ): boolean {
    if (!Array.isArray(value)) return false;

    if (type === "stringArray") {
      return value.every((item: unknown) => typeof item === "string");
    }

    if (type === "pointObjectArray") {
      return value.every((item: unknown) => {
        if (typeof item !== "object" || item === null) return false;
        const obj = item as Record<string, unknown>;
        return (
          typeof obj.pointTitle === "string" &&
          typeof obj.pointDescription === "string"
        );
      });
    }

    return false;
  }
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
                {subdata.descriptionPoints &&
                  subdata.descriptionPoints.map((point, index) => {
                    return (
                      <div className="selected-tool-description" key={index}>
                        {point}
                      </div>
                    );
                  })}
                {subdata.pointsData &&
                  isOfType(subdata.pointsData, "stringArray") && (
                    <ul>
                      {subdata.pointsData.map((point: string, index) => {
                        return (
                          <li className="selected-tool-description" key={index}>
                            {point}
                          </li>
                        );
                      })}{" "}
                    </ul>
                  )}
                {subdata.pointsData &&
                  isOfType(subdata.pointsData, "pointObjectArray") && (
                    <ul>
                      {subdata.pointsData.map((point: PointObject, index) => {
                        return (
                          <li className="selected-tool-description" key={index}>
                            <div className="selected-tool-description-point-title">
                              {point.pointTitle}
                            </div>
                            <div className="selected-tool-description-point-description">
                              {point.pointDescription}
                            </div>
                          </li>
                        );
                      })}{" "}
                    </ul>
                  )}
                <div className="selected-tool-description">
                  {subdata.conclusion}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AboutSelectedToolComponent;
