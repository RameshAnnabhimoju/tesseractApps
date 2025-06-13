import { Route, Routes, NavigateFunction } from "react-router-dom";
import Home from "../pages/home/Home";
import Article from "../pages/article/Article";
import Blog from "../pages/blog/Blog";
import Details from "../pages/details/Details";
import Pricing from "../pages/pricing/Pricing";
import RequestADemo from "../pages/requestADemo/RequestADemo";
import AddBlog from "../pages/addBlog/AddBlog";
import SubPage from "../pages/SubPage/SubPage";
import ItemsPage from "../pages/ItemsPage/ItemsPage";
import FAQ from "../pages/faq/FAQ";
import AboutUsSubPage from "../pages/AboutUsSubPages/AboutUsSubPage";
import Teams from "../pages/teams/Teams";
import Careers from "../pages/careers/Careers";
import ContactInformation from "../pages/contactInformation/ContactInformation";
import Blogpost from "../pages/blogPost/Blogpost";
import ByRole from "../pages/byRole/ByRole";
import ByIndustry from "../pages/byIndustry/ByIndustry";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ComingSoon from "../pages/comingSoon/ComingSoon";
import FutureProofingBlog from "../pages/blogPost/FutureProofingBlog";
import {
  aboutUsPageData,
  byIndustryData,
  byRoleData,
  itemsPageDummyData,
  productsDetailsData,
  SubPagesDummyData,
} from "../utils/DummyData";
import OutStory from "../pages/ourStory/OutStory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/article" element={<Article />} />
      <Route path="/details" element={<Details />} />
      <Route path="/requestDemo" element={<RequestADemo />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/addBlog" element={<AddBlog />} />
      <Route path="/product" element={<SubPage />} />
      <Route path="/scheduling" element={<SubPage />} />
      <Route path="/time-management" element={<SubPage />} />
      <Route path="/hr-management" element={<SubPage />} />
      <Route path="/communication" element={<SubPage />} />
      <Route path="/blogs" element={<ItemsPage />} />
      <Route path="/case-studies" element={<ItemsPage />} />
      <Route path="/whitepapers" element={<ItemsPage />} />
      <Route path="/support-documentation" element={<ItemsPage />} />
      <Route path="/our-story" element={<OutStory />} />
      <Route path="/our-mission" element={<AboutUsSubPage />} />
      <Route path="/our-vision" element={<AboutUsSubPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/team" element={<Teams />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact-information" element={<ContactInformation />} />
      <Route path="/blogPost" element={<Blogpost />} />
      <Route path="/blogPost2" element={<FutureProofingBlog />} />

      <Route path="/administrator" element={<ByRole />} />
      <Route path="/roster-manager" element={<ByRole />} />
      <Route path="/ndis-staff" element={<ByRole />} />
      <Route path="/hr-manager" element={<ByRole />} />
      <Route path="/accountant" element={<ByRole />} />
      <Route path="/participant" element={<ByRole />} />

      <Route path="/ndis-industry" element={<ByIndustry />} />
      <Route path="/ict-industry" element={<ByIndustry />} />

      <Route path="/roster-management" element={<ProductDetails />} />
      <Route path="/timesheet" element={<ProductDetails />} />
      <Route path="/admin-console" element={<ProductDetails />} />
      <Route path="/access-control-panel" element={<ProductDetails />} />
      <Route path="/hr-operations" element={<ProductDetails />} />
      <Route path="/t-sign" element={<ProductDetails />} />
      <Route path="/clock-in-and-clock-out" element={<ProductDetails />} />
      <Route path="/participant-management" element={<ProductDetails />} />
      <Route path="/incident-management" element={<ProductDetails />} />
      <Route path="/role-based-dashboard" element={<ProductDetails />} />
      <Route path="/chat" element={<ProductDetails />} />
      <Route path="/my-profile" element={<ProductDetails />} />
      <Route path="/forms" element={<ProductDetails />} />
      <Route path="/accounting" element={<ProductDetails />} />
      <Route path="/t-learning-hub" element={<ProductDetails />} />

      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
};

export default AppRoutes;

// eslint-disable-next-line react-refresh/only-export-components
export const appNavigate = (
  navigate: NavigateFunction,
  route: string,
  defalut = true
) => {
  switch (route) {
    // case "Case Studies":
    //   navigate("/case-studies", {
    //     state: { data: itemsPageDummyData["Case Studies"] },
    //   });
    //   break;
    // case "Whitepapers":
    //   navigate("/whitepapers", {
    //     state: { data: itemsPageDummyData["Whitepapers"] },
    //   });
    //   break;
    // case "Support Documentation":
    //   navigate("/support-documentation", {
    //     state: { data: itemsPageDummyData["Support Documentation"] },
    //   });
    //   break;
    case "Pricing":
      navigate("/pricing");
      break;
    case "Blog":
      navigate("/blogs", {
        state: { data: itemsPageDummyData["Blog"] },
      });
      break;
    case "Product":
      navigate("/product", {
        state: { data: SubPagesDummyData["Product"] },
      });
      break;
    case "Scheduling":
      navigate("/scheduling", {
        state: { data: SubPagesDummyData["Scheduling"] },
      });
      break;
    case "Time Management":
      navigate("/time-management", {
        state: { data: SubPagesDummyData["Time Management"] },
      });
      break;
    case "HR Management":
      navigate("/hr-management", {
        state: { data: SubPagesDummyData["HR Management"] },
      });
      break;
    case "Communication":
      navigate("/communication", {
        state: { data: SubPagesDummyData["Communication"] },
      });
      break;
    case "FAQs":
      navigate("/faq");
      break;
    case "Team":
      navigate("/team");
      break;
    case "Our Story":
      navigate("/our-story", {
        state: { data: aboutUsPageData["Our Story"] },
      });
      break;
    case "Our Mission":
      navigate("/our-mission", {
        state: { data: aboutUsPageData["Our mission"] },
      });
      break;
    case "Our Vision":
      navigate("/our-vision", {
        state: { data: aboutUsPageData["Our Vision"] },
      });
      break;
    case "Careers":
      navigate("/careers");
      break;
    case "Contact Information":
      navigate("/contact-information");
      break;
    case "Administrator":
      navigate("/administrator", {
        state: { data: byRoleData["Administrator"] },
      });
      break;
    case "Participant":
      navigate("/participant", {
        state: { data: byRoleData["Participant"] },
      });
      break;
    case "Roster Manager":
      navigate("/roster-manager", {
        state: { data: byRoleData["Roster Manager"] },
      });
      break;
    case "NDIS Staff":
      navigate("/ndis-staff", {
        state: { data: byRoleData["NDIS Staff"] },
      });
      break;
    case "HR Manager":
      navigate("/hr-manager", {
        state: { data: byRoleData["HR Manager"] },
      });
      break;
    case "Accountant":
      navigate("/accountant", {
        state: { data: byRoleData["Accountant"] },
      });
      break;
    case "NDIS Industry":
      navigate("/ndis-industry", {
        state: { data: byIndustryData["NDIS Industry"] },
      });
      break;
    case "ICT Industry":
      navigate("/ict-industry", {
        state: { data: byIndustryData["ICT Industry"] },
      });
      break;
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
      navigate("/t-sign", {
        state: { data: productsDetailsData["T-sign"] },
      });
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
    case "ChaT & Notifications":
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
      if (defalut) navigate("/coming-soon");
      break;
  }
};
