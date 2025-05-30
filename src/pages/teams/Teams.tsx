import "./TeamsStyles.css";
import { teamsPageData } from "../../utils/DummyData";
const Teams = () => {
  return (
    <div id="teams-container">
      <div className="heading">Team</div>
      <div className="subheading">The people behind the platform.</div>
      <div className="text" id="team-text">
        TesseractApps is led by a diverse team of technologists, product
        specialists, and industry experts committed to solving real-world
        challenges. Their collective experience in workforce management,
        compliance, and innovative technology ensures that our solutions stay
        ahead of the curve.
      </div>
      <div id="team-images-container">
        {teamsPageData.map((data, index) => {
          return (
            <div key={index} className="team-image-card">
              <img src={data.image} alt="person" className="team-image" />
              <div className="team-name">{data.name}</div>
              <div className="team-designation">{data.designation}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
