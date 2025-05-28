import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Article from "../pages/article/Article";
import Blog from "../pages/blog/Blog";
import Details from "../pages/details/Details";
import Pricing from "../pages/pricing/Pricing";
import RequestADemo from "../pages/requestADemo/RequestADemo";
import AddBlog from "../pages/addBlog/AddBlog";

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
    </Routes>
  );
};

export default AppRoutes;
