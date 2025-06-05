import { useLocation } from "react-router-dom";
import "./ByRoleStyles.css";
import DetailsHeroComponent from "../../components/detailsHeroComponent/DetailsHeroComponent";
import DetailsDataComponent from "../../components/detailsDataComponent/DetailsDataComponent";
interface byroleTypes {
  data: {
    hero: {
      image: string;
      title: string;
      description: string;
    };
    "details-1": {
      images: string[];
      title: string;
      description: string;
    };
    "details-2": {
      images: string[];
      title: string;
      description: string;
    };
  };
}

const ByRole = () => {
  const location = useLocation();
  const { data }: byroleTypes = location.state || {};
  return (
    <div id="byrole-container">
      {data.hero && <DetailsHeroComponent data={data.hero} />}
      {data["details-1"] && (
        <DetailsDataComponent data={data["details-1"]} componentType={1} />
      )}
      {data["details-2"] && (
        <DetailsDataComponent data={data["details-2"]} componentType={2} />
      )}
    </div>
  );
};

export default ByRole;
