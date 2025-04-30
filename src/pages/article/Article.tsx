import "./ArticleStyles.css";
import articleImage1 from "../../assets/articleImage1.png";
import rightArrow from "../../assets/rightArrow.png";
import { blogDummyData } from "../../utils/DummyData";
import twitterIcon from "../../assets/twitter.png";
import facebookIcon from "../../assets/facebookIcon.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import instagramIcon from "../../assets/instagramIcon.png";
const Article = () => {
  const blogsData = blogDummyData.slice(0, 3);
  return (
    <div id="article-container">
      <div className="subheading" id="article-heading">
        How To Start Using Tesseract For Your Startup
      </div>
      <div className="text" id="article-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit
        amet nulla facilisi morbi.
      </div>
      <img src={articleImage1} alt="article image" id="article-image" />
      <div id="article-content-heading">Et malesuada fames ac turpis</div>
      <div id="article-content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus
        risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo
        odio. Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla
        posuere sollicitudin aliquam ultrices sagittis orci a. Fringilla ut
        morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus
        viverra.{" "}
      </div>
      <div id="article-content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus
        risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo
        odio. Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla
        posuere sollicitudin aliquam ultrices sagittis orci a. Fringilla ut
        morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus
        viverra.{" "}
      </div>
      <div id="article-content-heading">Et malesuada fames ac turpis</div>
      <div id="article-content-text">
        Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis orci a
        scelerisque purus semper eget duis at. Porta lorem mollis aliquam ut
        porttitor leo a diam. In fermentum et sollicitudin ac orci phasellus
        egestas tellus. Mauris cursus mattis molestie a iaculis at erat
        pellentesque adipiscing. Nascetur ridiculus mus mauris vitae ultricies.
        Dui nunc mattis enim ut tellus. Duis convallis convallis tellus id
        interdum. Quis ipsum suspendisse ultrices gravida dictum fusce.
        Scelerisque mauris pellentesque pulvinar pellentesque. Tincidunt augue
        interdum velit euismod. Nibh tortor id aliquet lectus. Amet commodo
        nulla facilisi nullam. Vulputate ut pharetra sit amet aliquam id diam
        maecenas. Tellus pellentesque eu tincidunt tortor. Ultrices vitae auctor
        eu augue ut lectus arcu bibendum.
      </div>
      <div id="article-share-container">
        <div id="article-share-text">Share article</div>
        <div id="article-share-icons">
          <img src={twitterIcon} alt="article image" id="article-icon" />
          <img src={facebookIcon} alt="article image" id="article-icon" />
          <img src={linkedinIcon} alt="article image" id="article-icon" />
          <img src={instagramIcon} alt="article image" id="article-icon" />
        </div>
      </div>
      <div id="related-articles-container">
        <div id="related-articles-header">
          <div id="related-articles-heading">Related Articles</div>
          <div id="related-articles-all">
            <div id="related-articles-all-text">All Articles</div>
            <img
              src={rightArrow}
              alt="right arrow"
              id="related-articles-arrow"
            />
          </div>
        </div>
        <div id="blog-card-container">
          {blogsData.map((blog, index) => (
            <div className="blog-card" key={index}>
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
    </div>
  );
};

export default Article;
