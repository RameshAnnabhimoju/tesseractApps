import { useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import NavBarComponent from "./components/navBarComponent/NavBarComponent";
import { BrowserRouter, useLocation } from "react-router-dom";
import FooterComponent from "./components/footerComponent/FooterComponent";
import AppRoutes from "./routes/AppRoutes";

const FULLSCREEN_ROUTES = ["/book-a-demo", "/signup"];

function AppInner() {
  const location = useLocation();
  const isFullscreen = FULLSCREEN_ROUTES.includes(location.pathname);
  const portalContainerRef = useRef<HTMLDivElement>(null);

  return (
    <HelmetProvider>
      <Helmet>
        <title>TesseractApps | NDIS Software & Workforce Management</title>
        <meta
          name="description"
          content="TesseractApps provides end-to-end workforce management software for NDIS providers. Streamline compliance, rostering, and care delivery."
        />
      </Helmet>
      {!isFullscreen && <NavBarComponent portalContainerRef={portalContainerRef} />}
      <div ref={portalContainerRef} />
      <main role="main">
        <AppRoutes />
      </main>
      {!isFullscreen && <FooterComponent />}
    </HelmetProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

export default App;
