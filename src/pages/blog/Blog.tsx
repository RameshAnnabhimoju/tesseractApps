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
    const filteredData = ourBlogDummyData.filter(
      (blog) =>
        blog?.categories?.includes(categoryFilter) || categoryFilter === "All"
    );
    setBlogsData(filteredData);
  }, [categoryFilter]); //

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
        <div
          className={
            "category-filter " +
            (categoryFilter == "All" ? "active-filter" : "")
          }
          onClick={() => handleCategoryFilter("All")}
        >
          All
        </div>
        <div
          className={
            "category-filter " +
            (categoryFilter == "Product" ? "active-filter" : "")
          }
          onClick={() => handleCategoryFilter("Product")}
        >
          Product
        </div>
        <div
          className={
            "category-filter " +
            (categoryFilter == "Technology" ? "active-filter" : "")
          }
          onClick={() => handleCategoryFilter("Technology")}
        >
          Technology
        </div>
        <div
          className={
            "category-filter " +
            (categoryFilter == "App" ? "active-filter" : "")
          }
          onClick={() => handleCategoryFilter("App")}
        >
          App
        </div>
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
              } else {
                navigate("/blogpost2");
              }
            }}
            className="blog-page-card"
            key={index}
          >
            <img src={blog.image} alt="Blog" className="blog-page-image" />
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
