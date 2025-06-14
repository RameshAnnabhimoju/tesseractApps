import { useNavigate } from "react-router-dom";
import "./productsDataStyles.css";
import { appNavigate } from "../../routes/AppRoutes";
interface ProductsDataTypes {
  data: {
    title: string;
    description: string;
    productsData: { title: string; description: string; image: string }[];
  };
}
const ProductsDataComponent = ({ data }: ProductsDataTypes) => {
  const navigate = useNavigate();
  function handleProductDataClick(name: string) {
    // console.log(name);
    appNavigate(name, navigate, false);
  }
  return (
    <div id="products-data-container">
      <div id="product-data-title" className="heading">
        {data.title}
      </div>
      <div id="product-data-description" className="subheading">
        {data.description}
      </div>
      <div id="product-data-card-container">
        {data.productsData.map((subData) => (
          <div
            className="product-data-card"
            key={subData.title}
            onClick={() => handleProductDataClick(subData.title)}
          >
            {/* <img
              src={subData.image}
              alt="product-data-card-image"
              className="product-data-card-image"
            /> */}
            <div className="product-data-card-title">{subData.title}</div>
            <div className="product-data-card-description">
              {subData.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDataComponent;
