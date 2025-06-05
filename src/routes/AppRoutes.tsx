import { Route, Routes } from "react-router-dom";
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
      <Route path="/our-story" element={<AboutUsSubPage />} />
      <Route path="/our-mission" element={<AboutUsSubPage />} />
      <Route path="/our-vision" element={<AboutUsSubPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/team" element={<Teams />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact-information" element={<ContactInformation />} />
      <Route path="/blogPost" element={<Blogpost />} />

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
    </Routes>
  );
};

export default AppRoutes;
