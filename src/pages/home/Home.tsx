// import FaqComponent from "../../components/faqComponent/FaqComponent";
import { Suspense, lazy } from "react";
import HomeHeroComponent from "../../components/homeHeroComponent/HomeHeroComponent";
// import MirroredArcsComponent from "../../components/mirroredArcsComponent/MirroredArcsComponent";
// import VideoComponent from "../../components/videoComponent/VideoComponent";
import "./HomeStyles.css";
import { useMetaTags } from "../../utils/useMetaTags";

// All below-fold components are lazy-loaded — they don't block the initial render
const FeaturesComponent = lazy(
  () => import("../../components/featuresComponent/FeaturesComponent"),
);
const HowItWorksComponent = lazy(
  () => import("../../components/howItWorksComponent/HowItWorksComponent"),
);
const TrustedClientsComponent = lazy(
  () =>
    import(
      "../../components/trustedClients/TrustedClientsComponent"
    ),
);
const ResultsComponent = lazy(
  () => import("../../components/resultsComponent/ResultsComponent"),
);
const TestimonialComponent = lazy(
  () =>
    import(
      "../../components/testimonialComponent/TestimonialComponent"
    ),
);
const OurBlogComponent = lazy(
  () => import("../../components/ourBlogComponent/OurBlogComponent"),
);

const Home = () => {
  useMetaTags({
    title: "TesseractApps | NDIS Software & Workforce Management Platform Australia",
    description: "TesseractApps is Australia's leading NDIS software solution for workforce management, rostering, compliance, and billing. Streamline your care operations with our all-in-one Salesforce-based platform. Free trial available."
  });

  return (
    <div>
      <HomeHeroComponent />
      {/* Single Suspense boundary covers all below-fold components */}
      <Suspense fallback={null}>
        {/* <MirroredArcsComponent /> */}
        <FeaturesComponent />
        <HowItWorksComponent />
        {/* <VideoComponent /> */}
        <TrustedClientsComponent />
        <ResultsComponent />
        <TestimonialComponent />
        {/* <FaqComponent /> */}
        <OurBlogComponent />
      </Suspense>
    </div>
  );
};

export default Home;
