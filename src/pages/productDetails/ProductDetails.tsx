import { useLocation } from "react-router-dom";
import "./ProductDetailsStyles.css";
import DetailsDataComponent from "../../components/detailsDataComponent/DetailsDataComponent";
import DetailsHeroComponent from "../../components/detailsHeroComponent/DetailsHeroComponent";
import AboutSelectedToolComponent from "../../components/aboutSelectedToolComponent/AboutSelectedToolComponent";
import FaqProductComponent from "../../components/faqProductComponent/faqProductComponent";
interface productDetailsTypes {
  data: {
    hero: {
      title: string;
      description: string;
      image: string;
    };
    section2: {
      title: string;
      description: string;
      points: {
        dot: { outer: string; middle: string; inner: string };
        title: string;
        description: string;
      }[];
    };
    section3: {
      title: string;
      description: string;
      points: string[];
      images: string[];
    }[];
    faqSection: {
      title: string;
      faqData: {
        question: string;
        answer: string;
        points?: string[];
      }[];
    };
  };
}
const ProductDetails = () => {
  const location = useLocation();
  const { data }: productDetailsTypes = location.state || {};
  return (
    <div id="product-details-container">
      {data.hero && <DetailsHeroComponent data={data.hero} />}
      {data.section2 && <AboutSelectedToolComponent data={data.section2} />}
      {data.section3 &&
        data.section3.map((item, index) => {
          return (
            <DetailsDataComponent
              data={item}
              componentType={index % 2 == 0 ? 1 : 2}
            />
          );
        })}
      <div id="faq-product-title" className="subheading">
        {data.faqSection.title}
      </div>
      {data.faqSection && (
        <FaqProductComponent data={data.faqSection.faqData} />
      )}
    </div>
  );
};

export default ProductDetails;
