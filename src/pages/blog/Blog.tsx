import "./BlogStyles.css";
import { blogDummyData } from "../../utils/DummyData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [blogsData, setBlogsData] = useState(blogDummyData);
  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category);
  };
  useEffect(() => {
    const filteredData = blogDummyData.filter(
      (blog) =>
        blog?.categories?.includes(categoryFilter) || categoryFilter === "All"
    );
    setBlogsData(filteredData);
  }, [categoryFilter]); //

  return (
    <div id="blog-container">
      <div className="subheading" id="blog-heading">
        Blog
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
        <div id="add-blog-button" onClick={() => navigate("/addBlog")}>
          New Blog
        </div>
      </div>
      <div id="blog-card-container">
        {blogsData.map((blog, index) => (
          <div
            onClick={() => {
              navigate("/article");
            }}
            className="blog-card"
            key={index}
          >
            <img src={blog.image} alt="Blog" className="blog-image" />
            <div className="blog-title">{blog.title}</div>
            <div className="blog-description">{blog.description}</div>
            <div className="blog-categories">
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
