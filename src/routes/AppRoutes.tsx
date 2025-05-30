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
    </Routes>
  );
};

export default AppRoutes;
