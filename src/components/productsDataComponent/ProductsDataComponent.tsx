import { useNavigate } from "react-router-dom";
import "./productsDataStyles.css";
import { productsDetailsData } from "../../utils/DummyData";
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
    switch (name) {
      case "Roster Management":
        navigate("/roster-management", {
          state: { data: productsDetailsData["Roster Management"] },
        });
        break;

      case "Timesheet":
        navigate("/timesheet", {
          state: { data: productsDetailsData["Timesheet"] },
        });
        break;

      case "Admin Console":
        navigate("/admin-console", {
          state: { data: productsDetailsData["Admin Console"] },
        });
        break;

      case "Access Control Panel":
        navigate("/access-control-panel", {
          state: { data: productsDetailsData["Access Control Panel"] },
        });
        break;

      case "HR Operations":
        navigate("/hr-operations", {
          state: { data: productsDetailsData["HR Operations"] },
        });
        break;

      case "T-sign":
        navigate("/t-sign", { state: { data: productsDetailsData["T-sign"] } });
        break;

      case "Clock In & Clock Out":
        navigate("/clock-in-and-clock-out", {
          state: { data: productsDetailsData["Clock In & Clock Out"] },
        });
        break;

      case "Participant Management":
        navigate("/participant-management", {
          state: { data: productsDetailsData["Participant Management"] },
        });
        break;

      case "Incident Management":
        navigate("/incident-management", {
          state: { data: productsDetailsData["Incident Management"] },
        });
        break;

      case "Role based Dashboards":
        navigate("/role-based-dashboard", {
          state: { data: productsDetailsData["Role Based Dashboard"] },
        });
        break;

      case "ChaT - Secure Internal Messaging":
        navigate("/chat", {
          state: {
            data: productsDetailsData["ChaT - Secure Internal Messaging"],
          },
        });
        break;

      case "My Profile":
        navigate("/my-profile", {
          state: { data: productsDetailsData["My Profile"] },
        });
        break;

      case "Forms":
        navigate("/forms", {
          state: { data: productsDetailsData["Forms"] },
        });
        break;

      case "Accounting":
        navigate("/accounting", {
          state: { data: productsDetailsData["Accounting"] },
        });
        break;

      case "T Learning Hub":
        navigate("/t-learning-hub", {
          state: { data: productsDetailsData["T Learning Hub"] },
        });
        break;

      default:
        break;
    }
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
            <img
              src={subData.image}
              alt="product-data-card-image"
              className="product-data-card-image"
            />
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
