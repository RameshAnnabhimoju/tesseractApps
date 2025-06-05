import { useLocation } from "react-router-dom";
import "./ByIndustryStyles.css";
import DetailsHeroComponent from "../../components/detailsHeroComponent/DetailsHeroComponent";
import DetailsDataComponent from "../../components/detailsDataComponent/DetailsDataComponent";
interface byroleTypes {
  data: {
    hero: {
      image: string;
      title: string;
      description: string;
    };
    details: {
      title: string;
      description: string;
      images: string[];
    }[];
  };
}
const ByIndustry = () => {
  const location = useLocation();
  const { data }: byroleTypes = location.state || {};
  return (
    <div id="byindustry-container">
      {data.hero && <DetailsHeroComponent data={data.hero} />}
      {data.details &&
        data.details.map((item, index) => {
          return (
            <DetailsDataComponent
              data={item}
              componentType={index % 2 == 0 ? 1 : 2}
            />
          );
        })}
    </div>
  );
};

export default ByIndustry;
