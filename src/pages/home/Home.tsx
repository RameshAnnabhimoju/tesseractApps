import FaqComponent from "../../components/faqComponent/FaqComponent";
import FeaturesComponent from "../../components/featuresComponent/FeaturesComponent";
import HomeHeroComponent from "../../components/homeHeroComponent/HomeHeroComponent";
import HowItWorksComponent from "../../components/howItWorksComponent/HowItWorksComponent";
import OurBlogComponent from "../../components/ourBlogComponent/OurBlogComponent";
import ResultsComponent from "../../components/resultsComponent/ResultsComponent";
import TestimonialComponent from "../../components/testimonialComponent/TestimonialComponent";
import TrustedClientsComponent from "../../components/trustedClients/TrustedClientsComponent";
import "./HomeStyles.css";

const Home = () => {
  return (
    <div>
      <HomeHeroComponent />
      <FeaturesComponent />
      <HowItWorksComponent />
      <TrustedClientsComponent />
      <ResultsComponent />
      <TestimonialComponent />
      <FaqComponent />
      <OurBlogComponent />
    </div>
  );
};

export default Home;
