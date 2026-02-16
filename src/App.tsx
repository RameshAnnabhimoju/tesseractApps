import { useRef, lazy, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import NavBarComponent from "./components/navBarComponent/NavBarComponent";
import { BrowserRouter } from "react-router-dom";
import FooterComponent from "./components/footerComponent/FooterComponent";
import AppRoutes from "./routes/AppRoutes";
// import ExpoBanner from "./components/exporBanner/ExpoBanner";
import { useAppContext } from "./contexts/AppContext";
// import ExpoPage from "./pages/expoPage/ExpoPage";
// import SignupFlow from "./pages/signupflow/SignupFlow";

// Modals are lazy — their heavy MUI Dialog/Stepper bundles only load when opened
const Signup = lazy(() => import("./pages/signup/Signup"));
const BookADemo = lazy(() => import("./pages/bookADemo/BookADemo"));

function App() {
  const {
    signUp,
    bookADemo,
    // expoBanner, setExpoBanner
  } = useAppContext();
  const displayCondition = signUp || bookADemo;

  const portalContainerRef = useRef<HTMLDivElement>(null);
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Helmet>
          <title>TesseractApps | NDIS Software & Workforce Management</title>
          <meta
            name="description"
            content="TesseractApps provides end-to-end workforce management software for NDIS providers. Streamline compliance, rostering, and care delivery."
          />
        </Helmet>
        {/* Modals only render when their state is true — no MUI overhead on initial load */}
        {signUp && <Suspense fallback={null}><Signup /></Suspense>}
        {bookADemo && <Suspense fallback={null}><BookADemo /></Suspense>}
        {!displayCondition && (
          <NavBarComponent portalContainerRef={portalContainerRef} />
        )}

        <div ref={portalContainerRef} />
        <main role="main">
          {!displayCondition && <AppRoutes />}
        </main>
        {!displayCondition && <FooterComponent />}
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
