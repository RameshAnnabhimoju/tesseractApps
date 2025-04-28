import FaqComponent from "../../components/faqComponent/FaqComponent";
import FeaturesComponent from "../../components/featuresComponent/FeaturesComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";
import HomeHeroComponent from "../../components/homeHeroComponent/HomeHeroComponent";
import HowItWorksComponent from "../../components/howItWorksComponent/HowItWorksComponent";
import NavBarComponent from "../../components/navBarComponent/NavBarComponent";
import OurBlogComponent from "../../components/ourBlogComponent/OurBlogComponent";
import ResultsComponent from "../../components/resultsComponent/ResultsComponent";
import TestimonialComponent from "../../components/testimonialComponent/TestimonialComponent";
import TrustedClientsComponent from "../../components/trustedClients/TrustedClientsComponent";
import "./HomeStyles.css";

const Home = () => {
  return (
    <div>
      <NavBarComponent />
      <HomeHeroComponent />
      <FeaturesComponent />
      <HowItWorksComponent />
      <TrustedClientsComponent />
      <ResultsComponent />
      <TestimonialComponent />
      <FaqComponent />
      <OurBlogComponent />
      <FooterComponent />
    </div>
  );
};

export default Home;
