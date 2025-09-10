import { Route, Routes, NavigateFunction } from "react-router-dom";
import Home from "../pages/home/Home";
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
import ComingSoon from "../pages/comingSoon/ComingSoon";
import FutureProofingBlog from "../pages/blogPost/FutureProofingBlog";
import {
  aboutUsPageData,
  byBusinessProblem,
  byBusinessType,
  byCareData,
  byIndustryData,
  byRoleData,
  itemsPageDummyData,
  productsDetailsData,
  SubPagesDummyData,
} from "../utils/DummyData";
import OutStory from "../pages/ourStory/OutStory";
import Whitepapers from "../pages/whitepapers/Whitepapers";
import SalesPage from "../pages/salesPage/SalesPage";
import ManualRosteringBlog from "../pages/blogPost/ManualRosteringBlog";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import Blog4 from "../pages/blogPost/Blog4";
import ReleaseNotes from "../pages/ReleaseNotes/ReleaseNotes";
import Blog5 from "../pages/blogPost/Blog5";
import { useEffect } from "react";
// import Signup from "../pages/signup/Signup";

const AppRoutes = ({
  handleDialog,
}: {
  handleDialog: (value?: boolean) => void;
}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/details" element={<Details />} />
      <Route path="/requestDemo" element={<RequestADemo />} />
      <Route path="/salesPage" element={<SalesPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/addBlog" element={<AddBlog />} />
      <Route path="/product" element={<SubPage />} />
      <Route path="/scheduling" element={<SubPage />} />
      <Route path="/time-management" element={<SubPage />} />
      <Route path="/hr-management" element={<SubPage />} />
      <Route path="/communication" element={<SubPage />} />
      <Route path="/blogs" element={<ItemsPage />} />
      <Route path="/case-studies" element={<ItemsPage />} />
      <Route path="/whitepapers" element={<Whitepapers />} />
      <Route path="/support-documentation" element={<ItemsPage />} />
      <Route path="/our-story" element={<OutStory />} />
      <Route path="/our-mission-and-vision" element={<AboutUsSubPage />} />
      <Route path="/help-center" element={<FAQ />} />
      <Route path="/team" element={<Teams />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact-us" element={<ContactInformation />} />
      <Route path="/blogPost" element={<Blogpost />} />
      <Route path="/blogPost2" element={<FutureProofingBlog />} />
      <Route path="/blogPost3" element={<ManualRosteringBlog />} />
      <Route path="/blogPost4" element={<Blog4 />} />
      <Route path="/blogPost5" element={<Blog5 />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-Conditions" element={<TermsAndConditions />} />

      <Route path="/administrator" element={<ByRole />} />
      <Route path="/roster-manager" element={<ByRole />} />
      <Route path="/ndis-staff" element={<ByRole />} />
      <Route path="/hr-manager" element={<ByRole />} />
      <Route path="/accountant" element={<ByRole />} />
      <Route path="/participant" element={<ByRole />} />

      <Route path="/ndis-industry" element={<ByIndustry />} />
      <Route path="/ict-industry" element={<ByIndustry />} />
      <Route path="/retail-hospitality" element={<ByIndustry />} />
      <Route path="/multi-site-businesses" element={<ByIndustry />} />
      <Route path="/construction" element={<ByIndustry />} />
      <Route path="/manufacturing" element={<ByIndustry />} />

      <Route path="/disability-support-ndis" element={<ByIndustry />} />
      <Route path="/support-coordination" element={<ByIndustry />} />
      <Route path="/aged-care-services" element={<ByIndustry />} />
      <Route path="/child-care-services" element={<ByIndustry />} />
      <Route path="/allied-health-services" element={<ByIndustry />} />
      <Route path="/home-community-care-services" element={<ByIndustry />} />

      <Route path="/small-businesses" element={<ByIndustry />} />
      <Route path="/enterprise" element={<ByIndustry />} />
      <Route path="/franchise" element={<ByIndustry />} />
      <Route path="/startups" element={<ByIndustry />} />

      <Route path="/compliance" element={<ByIndustry />} />
      <Route path="/employee-engagement" element={<ByIndustry />} />
      <Route path="/time-efficiency" element={<ByIndustry />} />
      <Route path="/cost-optimisation" element={<ByIndustry />} />

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
      <Route path="/release-notes" element={<ReleaseNotes />} />
      <Route
        path="/signup"
        element={<OpenDialog handleDialog={handleDialog} />}
      />

      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
};

export default AppRoutes;
const OpenDialog = ({
  handleDialog,
}: {
  handleDialog: (open: boolean) => void;
}) => {
  useEffect(() => {
    handleDialog(true);
  }, [handleDialog]);

  return null; // nothing to render, only triggers dialog
};
// eslint-disable-next-line react-refresh/only-export-components
export const appNavigate = (
  route: string,
  navigate?: NavigateFunction,
  defalut = true
) => {
  switch (route) {
    // case "Case Studies":
    //  if(navigate != undefined )navigate("/case-studies", {
    //     state: { data: itemsPageDummyData["Case Studies"] },
    //   });
    //   break;
    case "Whitepapers":
      if (navigate != undefined)
        navigate("/whitepapers", {
          state: { data: itemsPageDummyData["Whitepapers"] },
        });
      break;
    // case "Support Documentation":
    //  if(navigate != undefined )navigate("/support-documentation", {
    //     state: { data: itemsPageDummyData["Support Documentation"] },
    //   });
    //   break;
    case "android":
      window.open(
        "https://play.google.com/store/apps/details?id=com.compinacle&hl=en&pli=1",
        "_blank"
      );
      break;
    case "ios":
      window.open(
        " https://apps.apple.com/al/app/tesseract-apps/id6476831276",
        "_blank"
      );
      break;
    case "linkedin":
      window.open("https://www.linkedin.com/company/tesseractapps", "_blank");
      break;
    case "facebook":
      window.open(
        "https://www.facebook.com/people/TesseractApps/61573872703468/",
        "_blank"
      );
      break;
    case "instagram":
      window.open("https://www.instagram.com/tesseract_apps", "_blank");
      break;
    case "youtube":
      window.open("https://www.youtube.com/@TesseractApps", "_blank");
      break;
    case "Pricing":
      if (navigate != undefined)
        if (navigate != undefined) navigate("/pricing");
      break;
    case "Book a Demo":
      if (navigate != undefined) navigate("/requestDemo");
      break;
    case "Features":
      if (navigate != undefined) navigate("/#features-container");
      break;
    case "Signup":
      if (navigate != undefined) navigate("/signup");
      break;
    case "Blog":
      if (navigate != undefined)
        navigate("/blogs", {
          state: { data: itemsPageDummyData["Blog"] },
        });
      break;
    case "Product":
      if (navigate != undefined)
        navigate("/product", {
          state: { data: SubPagesDummyData["Product"] },
        });
      break;

    case "Help Center":
      if (navigate != undefined) navigate("/help-center");
      break;
    case "Team":
      if (navigate != undefined) navigate("/team");
      break;
    case "Privacy Policy":
      if (navigate != undefined) navigate("/privacy-policy");
      break;
    case "Terms & Conditions":
      if (navigate != undefined) navigate("/terms-and-Conditions");
      break;
    case "Release Notes":
      if (navigate != undefined) navigate("/release-notes");
      break;
    case "Our Story":
      if (navigate != undefined)
        navigate("/our-story", {
          state: { data: aboutUsPageData["Our Story"] },
        });
      break;
    case "Our Mission & Vision":
      if (navigate != undefined)
        navigate("/our-mission-and-vision", {
          state: { data: aboutUsPageData["Our Mission & Vision"] },
        });
      break;
    case "Careers":
      if (navigate != undefined) navigate("/careers");
      break;
    case "Contact Us":
      if (navigate != undefined) navigate("/contact-us");
      break;
    case "Administrator":
      if (navigate != undefined)
        navigate("/administrator", {
          state: { data: byRoleData["Administrator"] },
        });
      break;
    case "Participant":
      if (navigate != undefined)
        navigate("/participant", {
          state: { data: byRoleData["Participant"] },
        });
      break;
    case "Roster Manager":
      if (navigate != undefined)
        navigate("/roster-manager", {
          state: { data: byRoleData["Roster Manager"] },
        });
      break;
    case "NDIS Staff":
      if (navigate != undefined)
        navigate("/ndis-staff", {
          state: { data: byRoleData["NDIS Staff"] },
        });
      break;
    case "HR Manager":
      if (navigate != undefined)
        navigate("/hr-manager", {
          state: { data: byRoleData["HR Manager"] },
        });
      break;
    case "Accountant":
      if (navigate != undefined)
        navigate("/accountant", {
          state: { data: byRoleData["Accountant"] },
        });
      break;
    case "NDIS":
      if (navigate != undefined)
        navigate("/ndis-industry", {
          state: { data: byIndustryData["NDIS Industry"] },
        });
      break;
    case "ICT":
      if (navigate != undefined)
        navigate("/ict-industry", {
          state: { data: byIndustryData["ICT Industry"] },
        });
      break;
    case "Retail & Hospitality":
      if (navigate != undefined)
        navigate("/retail-hospitality", {
          state: { data: byIndustryData["Retail & Hospitality"] },
        });
      break;
    case "Multi-site Businesses":
      if (navigate != undefined)
        navigate("/multi-site-businesses", {
          state: { data: byIndustryData["Multi-Site Businesses"] },
        });
      break;
    case "Construction":
      if (navigate != undefined)
        navigate("/construction", {
          state: { data: byIndustryData["Construction"] },
        });
      break;
    case "Manufacturing":
      if (navigate != undefined)
        navigate("/manufacturing", {
          state: { data: byIndustryData["Manufacturing"] },
        });
      break;
    case "Disability Support (NDIS Providers)":
      if (navigate != undefined)
        navigate("/disability-support-ndis", {
          state: { data: byCareData["Disability Support (NDIS)"] },
        });
      break;
    case "Support Coordination":
      if (navigate != undefined)
        navigate("/support-coordination", {
          state: { data: byCareData["Support Coordination"] },
        });
      break;
    case "Aged Care Services":
      if (navigate != undefined)
        navigate("/aged-care-services", {
          state: { data: byCareData["Aged Care Services"] },
        });
      break;
    case "Childcare Services":
      if (navigate != undefined)
        navigate("/child-care-services", {
          state: { data: byCareData["Childcare Services"] },
        });
      break;
    case "Allied Health Practices":
      if (navigate != undefined)
        navigate("/allied-health-services", {
          state: { data: byCareData["Allied Health Services"] },
        });
      break;
    case "Home & Community Care":
      if (navigate != undefined)
        navigate("/home-community-care-services", {
          state: { data: byCareData["Home & Community Care Services"] },
        });
      break;
    case "Small Businesses":
      if (navigate != undefined)
        navigate("/small-businesses", {
          state: { data: byBusinessType["Small Businesses"] },
        });
      break;
    case "Enterprise":
      if (navigate != undefined)
        navigate("/enterprise", {
          state: { data: byBusinessType["Enterprises"] },
        });
      break;
    case "Franchises":
      if (navigate != undefined)
        navigate("/franchise", {
          state: { data: byBusinessType["Franchises"] },
        });
      break;
    case "Startups":
      if (navigate != undefined)
        navigate("/startups", {
          state: { data: byBusinessType["Startups"] },
        });
      break;
    case "Compliance":
      if (navigate != undefined)
        navigate("/compliance", {
          state: { data: byBusinessProblem["Compliance"] },
        });
      break;
    case "Employee Engagement":
      if (navigate != undefined)
        navigate("/employee-engagement", {
          state: { data: byBusinessProblem["Employee Engagement"] },
        });
      break;
    case "Time Efficiency":
      if (navigate != undefined)
        navigate("/time-efficiency", {
          state: { data: byBusinessProblem["Time Efficiency"] },
        });
      break;
    case "Cost Optimisation":
      if (navigate != undefined)
        navigate("/cost-optimisation", {
          state: { data: byBusinessProblem["Cost Optimisation"] },
        });
      break;
    case "Roster Management":
      if (navigate != undefined)
        navigate("/roster-management", {
          state: { data: productsDetailsData["Roster Management"] },
        });
      break;

    case "Timesheet":
      if (navigate != undefined)
        navigate("/timesheet", {
          state: { data: productsDetailsData["Timesheet"] },
        });
      break;

    case "Admin Console":
      if (navigate != undefined)
        navigate("/admin-console", {
          state: { data: productsDetailsData["Admin Console"] },
        });
      break;

    case "Access Control Panel":
      if (navigate != undefined)
        navigate("/access-control-panel", {
          state: { data: productsDetailsData["Access Control Panel"] },
        });
      break;

    case "HR Operations":
      if (navigate != undefined)
        navigate("/hr-operations", {
          state: { data: productsDetailsData["HR Operations"] },
        });
      break;

    case "T-sign":
      if (navigate != undefined)
        navigate("/t-sign", {
          state: { data: productsDetailsData["T-Sign"] },
        });
      break;

    case "Clock In & Clock Out":
      if (navigate != undefined)
        navigate("/clock-in-and-clock-out", {
          state: { data: productsDetailsData["Clock In & Clock Out"] },
        });
      break;

    case "Participant Management":
      if (navigate != undefined)
        navigate("/participant-management", {
          state: { data: productsDetailsData["Participant Management"] },
        });
      break;

    case "Incident Management":
      if (navigate != undefined)
        navigate("/incident-management", {
          state: { data: productsDetailsData["Incident Management"] },
        });
      break;
    case "Repository":
      if (navigate != undefined)
        navigate("/incident-management", {
          state: { data: productsDetailsData["Repository"] },
        });
      break;

    case "Role based Dashboards":
      if (navigate != undefined)
        navigate("/role-based-dashboard", {
          state: { data: productsDetailsData["Role Based Dashboard"] },
        });
      break;
    case "Role based Dashboard":
      if (navigate != undefined)
        navigate("/role-based-dashboard", {
          state: { data: productsDetailsData["Role Based Dashboard"] },
        });
      break;
    case "ChaT":
      if (navigate != undefined)
        navigate("/chat", {
          state: {
            data: productsDetailsData["ChaT (Secure Communication)"],
          },
        });
      break;
    case "ChaT - Secure Internal Messaging":
      if (navigate != undefined)
        navigate("/chat", {
          state: {
            data: productsDetailsData["ChaT (Secure Communication)"],
          },
        });
      break;
    case "ChaT & Notifications":
      if (navigate != undefined)
        navigate("/chat", {
          state: {
            data: productsDetailsData["ChaT (Secure Communication)"],
          },
        });
      break;

    case "My Profile":
      if (navigate != undefined)
        navigate("/my-profile", {
          state: { data: productsDetailsData["My Profile"] },
        });
      break;

    case "Forms":
      if (navigate != undefined)
        navigate("/forms", {
          state: { data: productsDetailsData["Forms"] },
        });
      break;

    case "Accounting":
      if (navigate != undefined)
        navigate("/accounting", {
          state: { data: productsDetailsData["Accounting"] },
        });
      break;

    case "T Learning Hub":
      if (navigate != undefined)
        navigate("/t-learning-hub", {
          state: { data: productsDetailsData["T Learning Hub"] },
        });
      break;
    default:
      if (defalut && navigate != undefined) navigate("/coming-soon");
      break;
  }
};
