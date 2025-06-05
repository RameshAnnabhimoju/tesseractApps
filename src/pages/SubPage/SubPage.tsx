import AboutSelectedToolComponent from "../../components/aboutSelectedToolComponent/AboutSelectedToolComponent";
import DetailsDataComponent from "../../components/detailsDataComponent/DetailsDataComponent";
import DetailsHeroComponent from "../../components/detailsHeroComponent/DetailsHeroComponent";
import ProductsDataComponent from "../../components/productsDataComponent/ProductsDataComponent";
import "./SubPage.css";
import { useLocation } from "react-router-dom";
const SubPage = () => {
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <div id="sub-page-container">
      {data.section1 && <DetailsHeroComponent data={data.section1} />}
      {data.section2 && <AboutSelectedToolComponent data={data.section2} />}
      {data.section3 && (
        <DetailsDataComponent data={data.section3} componentType={1} />
      )}
      {data.products && <ProductsDataComponent data={data.products} />}
    </div>
  );
};

export default SubPage;
