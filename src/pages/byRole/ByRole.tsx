import { useLocation } from "react-router-dom";
import "./ByRoleStyles.css";
import DetailsHeroComponent from "../../components/detailsHeroComponent/DetailsHeroComponent";
import AboutSelectedToolComponent from "../../components/aboutSelectedToolComponent/AboutSelectedToolComponent";
interface byroleTypes {
  data: {
    hero: {
      image: string;
      title: string;
      description: string;
      page: string;
    };
    details: {
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
  };
}

const ByRole = () => {
  const location = useLocation();
  const { data }: byroleTypes = location.state || {};
  return (
    <div id="byrole-container">
      {data.hero && <DetailsHeroComponent data={data.hero} />}
      {data.details && <AboutSelectedToolComponent data={data.details} />}
    </div>
  );
};

export default ByRole;
