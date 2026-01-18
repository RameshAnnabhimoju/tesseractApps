import "./BlogStyles.css";
import { ourBlogDummyData } from "../../utils/DummyData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [blogsData, setBlogsData] = useState(ourBlogDummyData);
  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category);
  };
  useEffect(() => {
    const filteredData = (
      categoryFilter === "All"
        ? ourBlogDummyData
        : ourBlogDummyData.filter((blog) =>
            blog?.categories?.includes(categoryFilter)
          )
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    // Sort by date in descending order
    setBlogsData(filteredData);
  }, [categoryFilter]); //
  const categories = ["All", "NDIS", "Aged Care", "Events", "Business"];
  return (
    <div id="blog-container">
      <div className="heading">BLOG</div>
      <div className="subheading" id="blog-sub-heading">
        Insights, industry updates, and practical tips.
      </div>
      <div className="text" id="blog-text">
        Stay informed with expert articles on NDIS compliance, workforce
        management, digital transformation, and care sector innovation.
      </div>

      <div id="blog-category-filters">
        <div id="category-text">Category</div>

        {categories.map((category) => (
          <div
            key={category}
            className={`category-filter ${
              categoryFilter === category ? "active-filter" : ""
            }`}
            onClick={() => handleCategoryFilter(category)}
          >
            {category}
          </div>
        ))}

        {/* <div id="add-blog-button" onClick={() => navigate("/addBlog")}>
    New Blog
  </div> */}
      </div>
      <div id="blog-page-card-container">
        {blogsData.map((blog, index) => (
          <div
            onClick={() => {
              if (blog.id == 1) {
                navigate("/blogpost");
              } else if (blog.id == 2) {
                navigate("/blogpost2");
              } else if (blog.id == 3) {
                navigate("/blogpost3");
              } else if (blog.id == 4) {
                navigate("/blogpost4");
              } else if (blog.id == 5) {
                navigate("/blogpost5");
              } else if (blog.id == 6) {
                navigate("/blogpost6");
              } else if (blog.id == 7) {
                navigate("/blogpost7");
              } else if (blog.id == 8) {
                navigate("/blogpost8");
              } else if (blog.id == 9) {
                navigate("/blogpost9");
              } else if (blog.id == 10) {
                navigate("/blogpost10");
              } else if (blog.id == 11) {
                navigate("/blogPost11");
              } else if (blog.id == 12) {
                navigate("/ndis-compliance-audit-failures-2026");
              }
            }}
            className="blog-page-card"
            key={index}
          >
            {typeof blog.image === "string" ? (
              <img src={blog.image} alt="Blog" className="blog-page-image" />
            ) : (
              ""
            )}
            <div className="blog-page-title">{blog.title}</div>
            <div className="blog-page-description">{blog.description}</div>
            <div className="blog-page-categories">
              {blog.categories.map((category, index) => (
                <span className="category-filter" key={index}>
                  {category}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
